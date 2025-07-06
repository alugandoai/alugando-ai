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
├── referencia-visual-cursor/ # Referências de design
│   ├── referencia1.png
│   ├── referencia2.png
│   └── referencia3.png
├── INICIALIZACAO.md        # Especificações do projeto
└── README.md               # Este arquivo
```

## 🚀 Como Executar

### Versão HTML (landing/)
1. Navegue até a pasta `landing/`
2. Abra o arquivo `index.html` em qualquer navegador
3. Ou use um servidor local:
   ```bash
   cd landing
   python -m http.server 8000
   # Acesse http://localhost:8000
   ```

### Versão React (em desenvolvimento)
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
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

### Versão HTML
- **HTML5** - Estrutura semântica
- **TailwindCSS** - Framework CSS utilitário
- **JavaScript Vanilla** - Funcionalidades interativas
- **Lucide Icons** - Biblioteca de ícones

### Versão React (planejada)
- **React 18** - Framework JavaScript
- **Next.js** - Framework React
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização
- **Framer Motion** - Animações
- **Vercel** - Deploy

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

### Fase 2 🚧
- [ ] Migração para React/Next.js
- [ ] Componentização
- [ ] TypeScript
- [ ] Deploy na Vercel

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