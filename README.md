# 🚀 mealug.ai - Aluguel Inteligente de Acervos Empresariais

Solução definitiva de aluguel corporativo para acervos e equipamentos. Transforme seus ativos em fonte de receita com a plataforma mais inteligente do mercado.

## ✨ Características

- **Previsibilidade Financeira**: Receita recorrente e previsível
- **Gestão de Contratos**: Sistema automatizado para controle total
- **Proteção de Ativos**: Seguro completo, caução e rastreamento
- **Flexibilidade Total**: Adapte-se às necessidades do seu negócio
- **Captura de Leads**: Sistema completo de captura e gestão

## 🛠️ Tecnologias

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, API)
- **Deploy**: Vercel
- **Ícones**: Lucide React
- **Formulários**: React Hook Form + Validação

## 🚀 Deploy Rápido

### Pré-requisitos
- Node.js 18+
- Conta no Supabase
- Conta na Vercel

### 1. Clone o repositório
```bash
git clone https://github.com/alugandoai/alugando-ai.git
cd alugando-ai
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o Supabase
1. Crie um projeto em [supabase.com](https://supabase.com)
2. Execute o script `supabase-setup.sql` no SQL Editor
3. Copie as chaves de API em Settings > API

### 4. Configure as variáveis de ambiente
```bash
cp .env.local.example .env.local
```

Edite `.env.local` com suas chaves do Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
```

### 5. Execute o projeto
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### 6. Deploy na Vercel
```bash
npm run build
```

Conecte seu repositório na Vercel e configure as variáveis de ambiente.

## 📊 Dashboard de Leads

Acesse `/admin/leads` para visualizar e gerenciar os leads capturados:

- 📈 Estatísticas em tempo real
- 📋 Lista de todos os leads
- 🔄 Atualização de status
- 📊 Filtros por fonte e status

## 🎯 Segmentos Atendidos

- **Ferramentas e Equipamentos**: Aluguel de ferramentas profissionais
- **Acervos Didáticos**: Bibliotecas digitais e materiais educacionais
- **Mobiliário Empresarial**: Móveis de escritório e salas de reunião
- **Tecnologia Compartilhada**: Computadores, tablets e equipamentos de TI
- **Condomínios e Eventos**: Itens para áreas comuns e eventos
- **Soluções Customizadas**: Desenvolvimento de soluções específicas

## 🔧 Estrutura do Projeto

```
src/
├── app/
│   ├── admin/leads/     # Dashboard administrativo
│   ├── api/leads/       # API de captura de leads
│   ├── globals.css      # Estilos globais
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página inicial
├── components/
│   └── LeadForm.tsx     # Componente de formulário
└── lib/
    └── supabase.ts      # Configuração Supabase
```

## 📈 Métricas e Analytics

O sistema captura automaticamente:

- **Leads por fonte** (hero, CTA, contato)
- **Status de conversão** (novo, contatado, proposta, convertido)
- **Performance por período**
- **Segmentos de interesse**

## 🔒 Segurança

- Row Level Security (RLS) habilitado
- Validação de dados no backend
- Sanitização de inputs
- Políticas de acesso configuradas
- HTTPS obrigatório

## 🚀 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals**: Otimizado
- **SEO**: Meta tags e estrutura semântica
- **Responsivo**: Mobile-first design

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

- **Email**: contato@mealug.ai
- **Documentação**: [SETUP-LEADS.md](SETUP-LEADS.md)
- **Issues**: [GitHub Issues](https://github.com/alugandoai/alugando-ai/issues)

## 🎉 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React
- [Supabase](https://supabase.com/) - Backend as a Service
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Lucide](https://lucide.dev/) - Ícones
- [Vercel](https://vercel.com/) - Deploy e hosting

---

**mealug.ai** - Alugue. Lucre. Liberte seu estoque. 🚀
