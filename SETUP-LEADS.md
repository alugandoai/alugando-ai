# Configuração do Sistema de Captura de Leads - mealug.ai

## 🚀 Configuração Rápida

### 1. Criar Projeto no Supabase

1. Acesse [https://supabase.com](https://supabase.com)
2. Faça login/cadastro
3. Clique em "New Project"
4. Escolha um nome: `mealug-ai-leads`
5. Escolha uma senha forte para o banco
6. Escolha a região mais próxima (São Paulo)
7. Clique em "Create new project"

### 2. Configurar Banco de Dados

1. No dashboard do Supabase, vá em **SQL Editor**
2. Clique em **New Query**
3. Copie e cole o conteúdo do arquivo `supabase-setup.sql`
4. Clique em **Run** para executar o script

### 3. Obter Chaves de API

1. No dashboard do Supabase, vá em **Settings** > **API**
2. Copie:
   - **Project URL** (ex: `https://abcdefghijklmnop.supabase.co`)
   - **anon public** key (ex: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

### 4. Configurar Variáveis de Ambiente

1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione as seguintes variáveis:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_project_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key_aqui
```

### 5. Testar o Sistema

1. Execute o projeto: `npm run dev`
2. Acesse `http://localhost:3000`
3. Preencha um dos formulários de lead
4. Verifique no Supabase se o lead foi salvo

## 📊 Visualizar Leads Capturados

### Via Dashboard do Supabase
1. Acesse o dashboard do seu projeto
2. Vá em **Table Editor**
3. Clique na tabela **leads**
4. Visualize todos os leads capturados

### Via SQL Query
```sql
-- Ver todos os leads
SELECT * FROM leads ORDER BY created_at DESC;

-- Ver leads por fonte
SELECT fonte, COUNT(*) as total FROM leads GROUP BY fonte;

-- Ver leads por status
SELECT status, COUNT(*) as total FROM leads GROUP BY status;
```

## 🔧 Funcionalidades Implementadas

### ✅ Formulários Funcionais
- **Hero Section**: Formulário completo com todos os campos
- **CTA Final**: Formulário minimalista
- **Validação**: Email, campos obrigatórios
- **Feedback Visual**: Loading, sucesso, erro

### ✅ Captura de Dados
- Nome completo
- Email corporativo
- Empresa
- Telefone (opcional)
- Segmento de interesse (opcional)
- Mensagem (opcional)
- Fonte do lead (hero/cta/contato)
- Status do lead (novo/contatado/proposta_enviada/convertido)

### ✅ Segurança
- Row Level Security (RLS) habilitado
- Políticas de acesso configuradas
- Validação de dados no backend
- Sanitização de inputs

### ✅ Performance
- Índices otimizados
- Timestamps automáticos
- Triggers para updated_at

## 🎯 Próximos Passos (Opcionais)

### 1. Dashboard de Leads
Criar uma página administrativa para visualizar e gerenciar leads:

```typescript
// src/app/admin/leads/page.tsx
'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AdminLeads() {
  const [leads, setLeads] = useState([])
  
  useEffect(() => {
    const fetchLeads = async () => {
      const { data } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })
      
      setLeads(data || [])
    }
    
    fetchLeads()
  }, [])
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Leads Capturados</h1>
      <div className="grid gap-4">
        {leads.map((lead: any) => (
          <div key={lead.id} className="border p-4 rounded">
            <h3 className="font-semibold">{lead.nome}</h3>
            <p className="text-gray-600">{lead.email}</p>
            <p className="text-gray-600">{lead.empresa}</p>
            <span className="text-sm bg-blue-100 px-2 py-1 rounded">
              {lead.fonte}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
```

### 2. Notificações por Email
Integrar com serviços como:
- **Resend** (recomendado)
- **SendGrid**
- **Mailgun**

### 3. Integração com CRM
Conectar com:
- **HubSpot**
- **Pipedrive**
- **Salesforce**

## 🛠️ Troubleshooting

### Erro: "Invalid API key"
- Verifique se as variáveis de ambiente estão corretas
- Reinicie o servidor após adicionar as variáveis

### Erro: "relation 'leads' does not exist"
- Execute o script SQL no Supabase
- Verifique se a tabela foi criada corretamente

### Formulário não envia
- Verifique o console do navegador
- Verifique os logs do servidor
- Confirme se a API route está funcionando

## 📈 Métricas Importantes

### Leads por Fonte
```sql
SELECT fonte, COUNT(*) as total 
FROM leads 
GROUP BY fonte 
ORDER BY total DESC;
```

### Conversão por Status
```sql
SELECT status, COUNT(*) as total 
FROM leads 
GROUP BY status 
ORDER BY total DESC;
```

### Performance por Período
```sql
SELECT 
  DATE(created_at) as data,
  COUNT(*) as leads_capturados
FROM leads 
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY data DESC;
```

## 🎉 Sucesso!

Seu sistema de captura de leads está funcionando! Agora você pode:

1. ✅ Capturar leads automaticamente
2. ✅ Visualizar dados no Supabase
3. ✅ Rastrear performance por fonte
4. ✅ Gerenciar status dos leads
5. ✅ Escalar conforme necessário

O sistema está pronto para produção e pode ser deployado na Vercel sem problemas! 