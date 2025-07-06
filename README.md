# mealug.ai - Landing Page Corporativa B2B

Landing page institucional para apresentar o serviço **mealug.ai** como solução de aluguel inteligente de acervos empresariais.

## 🎯 Sobre o Projeto

O mealug.ai é uma plataforma de aluguel corporativo que permite empresas, escolas, condomínios e estabelecimentos comerciais oferecerem ou monetizarem itens por assinatura ou uso recorrente.

**Slogan**: "Alugue. Lucre. Liberte seu estoque."

## 📁 Estrutura do Projeto

```
mealugai/
├── landing/                 # Versão HTML estática
│   ├── index.html          # Landing page principal
│   ├── css/
│   │   └── styles.css      # Estilos customizados
│   └── js/
│       └── main.js         # Funcionalidades JavaScript
├── src/                    # Código fonte React/Next.js
│   └── app/
│       ├── page.tsx        # Página principal
│       ├── layout.tsx      # Layout da aplicação
│       └── globals.css     # Estilos globais
├── public/                 # Arquivos estáticos
├── package.json            # Dependências
├── tailwind.config.ts      # Configuração Tailwind
├── vercel.json             # Configuração Vercel
├── referencia-visual-cursor/ # Referências de design
│   ├── referencia1.png
│   ├── referencia2.png
│   └── referencia3.png
├── INICIALIZACAO.md        # Especificações do projeto
└── README.md               # Este arquivo
```

## 🚀 Como Executar

### Versão React/Next.js (Principal)
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Deploy na Vercel
npm run build
# Conectar repositório na Vercel
```

### Versão HTML (landing/)
```bash
# Navegar para a pasta
cd landing

# Abrir index.html no navegador ou usar servidor local
python -m http.server 8000
# Acesse http://localhost:8000
```

## 🎨 Design System

### Cores
- **Verde Escuro**: `#145C52`
- **Verde Vibrante**: `#29A073`
- **Cinza Escuro**: `#333333`
- **Cinza Gelo**: `#F8F9FA`
- **Acento**: `#F9B233`

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800

### Ícones
- **Biblioteca**: Lucide Icons
- **Estilo**: Minimalista e moderno

## 📱 Funcionalidades

### Seções da Landing Page
1. **Hero Section** - Apresentação principal com formulário de captação
2. **Benefícios** - 4 cards com vantagens principais
3. **Comparativo** - Tabela comparativa tradicional vs mealug.ai
4. **Prova Social** - Métricas e cases de sucesso
5. **Vantagens Operacionais** - 6 cards com benefícios técnicos
6. **Segmentos** - Linha de produtos por categoria
7. **CTA Final** - Formulário de contato

### Interatividade
- Smooth scroll para navegação interna
- Formulários funcionais com validação
- Animações de entrada (Intersection Observer)
- Menu mobile responsivo
- Notificações de sucesso

## 🛠️ Tecnologias

### Versão React/Next.js
- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **Framer Motion** - Animações
- **Vercel** - Deploy

### Versão HTML
- **HTML5** - Estrutura semântica
- **TailwindCSS** - Framework CSS utilitário
- **JavaScript Vanilla** - Funcionalidades interativas
- **Lucide Icons** - Biblioteca de ícones

## 📊 Métricas de Performance

### Objetivos
- **Lighthouse Score**: 90+ em todas as categorias
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Desenvolvimento

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Git

### Scripts Disponíveis
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Lint e formatação
npm run lint
npm run format

# Testes
npm run test
```

## 📈 Roadmap

### Fase 1 ✅
- [x] Landing page HTML estática
- [x] Design responsivo
- [x] Formulários funcionais
- [x] Animações básicas

### Fase 2 ✅
- [x] Migração para React/Next.js
- [x] Componentização
- [x] TypeScript
- [x] Deploy na Vercel (configurado)

### Fase 3 📋
- [ ] Analytics integrado
- [ ] A/B testing
- [ ] SEO otimizado
- [ ] PWA

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Email**: contato@mealug.ai
- **Telefone**: +55 (11) 99999-9999
- **Website**: https://mealug.ai

---

Desenvolvido com ❤️ para transformar o aluguel corporativo
