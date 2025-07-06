-- Script para configurar a tabela de leads no Supabase
-- Execute este script no SQL Editor do Supabase

-- Criar tabela de leads
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  empresa VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  segmento VARCHAR(100),
  mensagem TEXT,
  fonte VARCHAR(20) NOT NULL DEFAULT 'contato',
  status VARCHAR(20) NOT NULL DEFAULT 'novo',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_fonte ON leads(fonte);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);

-- Habilitar Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir inserção de leads (público)
CREATE POLICY "Permitir inserção de leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Criar política para visualizar leads (apenas autenticados)
CREATE POLICY "Visualizar leads" ON leads
  FOR SELECT USING (auth.role() = 'authenticated');

-- Criar função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Criar trigger para atualizar updated_at
CREATE TRIGGER update_leads_updated_at 
  BEFORE UPDATE ON leads 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Inserir dados de exemplo (opcional)
INSERT INTO leads (nome, email, empresa, telefone, segmento, fonte, status) VALUES
('João Silva', 'joao@empresa.com', 'Empresa ABC Ltda', '(11) 99999-9999', 'tecnologia', 'hero', 'novo'),
('Maria Santos', 'maria@startup.com', 'Startup XYZ', '(11) 88888-8888', 'mobiliario', 'cta', 'contatado'),
('Pedro Costa', 'pedro@escola.com', 'Escola ProFuturo', '(11) 77777-7777', 'acervos', 'contato', 'novo'); 