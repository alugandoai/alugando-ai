# Configurações Vercel - mealug.ai

## Variáveis de Ambiente

Configure as seguintes variáveis de ambiente no painel da Vercel:

### Obrigatórias
- `NEXT_PUBLIC_SITE_URL`: URL do site (ex: https://mealug.ai)
- `NEXT_PUBLIC_SITE_NAME`: Nome do site (mealug.ai)
- `NEXT_PUBLIC_SITE_DESCRIPTION`: Descrição do site

### Opcionais (Analytics)
- `NEXT_PUBLIC_GA_ID`: ID do Google Analytics
- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID`: ID do Vercel Analytics

### Opcionais (Formulários)
- `NEXT_PUBLIC_FORMSPREE_ID`: ID do Formspree (se usar)
- `NEXT_PUBLIC_NETLIFY_FORM_ID`: ID do Netlify Forms (se usar)

## Configurações de Deploy

### Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Environment Variables
- **Node.js Version**: 18.x ou superior
- **Region**: São Paulo (gru1)

## Headers de Segurança

O projeto já inclui headers de segurança configurados:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

## Cache e Performance

- Arquivos estáticos em `/landing/` têm cache de 1 ano
- Imagens otimizadas com WebP e AVIF
- Code splitting automático
- Compressão gzip habilitada

## Monitoramento

- Vercel Analytics habilitado
- Performance monitoring
- Error tracking
- Real-time logs 