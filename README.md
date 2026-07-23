# Oliveira Quintal Advocacia — Landing Page

**Cliente:** Oliveira Quintal Advocacia  
**Área:** Direito de Família e Sucessões · São Paulo  
**Domínio:** [terezinhaquintal.adv.br](https://terezinhaquintal.adv.br)  
**Hospedagem:** Hostinger (Cloud Startup, FTP `82.112.246.141`)

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 15.5 (App Router) |
| Build | `output: "export"` (SPA estático) |
| UI | React 19 + Tailwind CSS + shadcn/ui |
| Animações | framer-motion |
| Ícones | lucide-react |
| Analytics | Google Tag Manager (`GTM-M866B8KK`) |

---

## Estrutura do Projeto

```
├── app/
│   ├── page.tsx                    # Landing page principal
│   ├── layout.tsx                  # Layout raiz (fonts, GTM, metadados)
│   ├── globals.css                 # Tailwind + estilos globais
│   └── politica-de-privacidade/
│       └── page.tsx                # Página de política de privacidade
├── components/
│   └── ui/
│       ├── site-header.tsx         # Header com logo + WhatsApp
│       └── animated-hero-section-1.tsx
├── lib/                            # Utilitários
├── public/                         # Imagens e assets estáticos
│   ├── logo.png, favicon.png
│   ├── banner.jpg, banner2.jpg
│   ├── sobre.jpg, sobre2.jpg, sobre3.jpg
│   ├── doutora2.jpg, mulher.jpg, pre.jpg
│   ├── mobile.jpg, mobile2.jpg
│   └── logoWhats.png, og-image.png
├── Index.html                      # Fallback estático (legado)
├── next.config.ts                  # Config com output: "export"
└── tailwind.config.ts
```

---

## WhatsApp — Mensagens e Rastreamento

Todas as URLs de WhatsApp usam o formato:

```
https://api.whatsapp.com/send?phone=5511925333331&text=<mensagem>&source_url=https://terezinhaquintal.adv.br
```

**Arquivos onde o número aparece:**
- `app/page.tsx` — constante `WA_BASE`
- `components/ui/site-header.tsx` — link do header
- `Index.html` — links estáticos (fallback)

⚠️ **Ao trocar o telefone, editar os 3 arquivos acima.**

A mensagem padrão NÃO inclui `\n\nFonte: XXX` (removido em 07/2026 para manter a experiência limpa).

---

## Build

```bash
npm install
npm run build
# Output em out/
```

O build gera `out/index.html` + `out/_next/static/`. **Os dois são um par atômico** — nunca deployar um sem o outro.

---

## Deploy (Hostinger FTP)

### ⛔ Regras críticas

1. **NUNCA fazer `storbinary` direto** — o FTP da Hostinger reporta sucesso mas não sobrescreve o arquivo
2. **SEMPRE `DELETE` antes de `STOR`** — única forma confiável de atualizar um arquivo
3. **Verificar HTTP 200 em cada asset** após o deploy — JS, CSS e fontes referenciados no HTML
4. **Backup antes de qualquer deploy** — usar o painel da Hostinger (mais confiável que FTP)

### Pipeline de deploy

```bash
# 1. Build limpo
rm -rf .next out
npm run build

# 2. Deploy — para cada arquivo: DELETE → STOR
#    Exemplo Python (ftplib):

for each file in out/:
    ftp.delete(filename)      # ignora erro se não existe
    ftp.storbinary(filename)  # upload

# 3. Verificação pós-deploy
#    Extrair todos os assets do index.html e validar HTTP 200:

curl -sI https://terezinhaquintal.adv.br/_next/static/chunks/<chunk>.js
# Deve retornar HTTP/2 200 para CADA chunk, CSS e fonte
```

### Script de deploy atômico

```python
# upload com delete explícito (confiável na Hostinger)
ftp.delete(item)
with open(local_path, 'rb') as f:
    ftp.storbinary(f'STOR {item}', f)
```

### Rollback

Se algo quebrar: **restaurar backup pelo painel da Hostinger** (hpanel). É mais rápido e confiável que tentar corrigir via FTP.

---

## Cache CDN (Hostinger)

A Hostinger usa LiteSpeed Cache com CDN. Após o deploy:
- HTML pode demorar alguns minutos para atualizar (cache do navegador + CDN)
- Assets estáticos (`_next/static/*`) têm `max-age=604800` (7 dias)
- Para bypass imediato: usar query param `?v=<timestamp>` nas verificações

---

## Lições Aprendidas

### 🩹 23/07/2026 — Troca de telefone quebrou o site

**Contexto:** Precisava trocar WhatsApp de `(11) 92682-3330` para `(11) 92533-3331`. A versão em produção não batia com o GitHub.

**Problemas encontrados:**
1. Código no GitHub tinha `\n\nFonte: XXX` nas mensagens que não existia em produção
2. Backup do Bruno (ex-dev) era versão antiga com placeholder de telefone
3. FTP da Hostinger não sobrescrevia arquivos com `storbinary` direto
4. Deploy parcial (HTML sem chunks ou vice-versa) quebrou o site 3 vezes

**Solução final:**
- Alinhar código fonte com produção (remover `Fonte:`, atualizar telefone)
- Deploy com DELETE + STOR para cada arquivo
- Verificação HTTP pós-deploy de todos os assets
- `.htaccess` recriado (backup anterior estava corrompido)

---

## Manutenção

### Trocar telefone

1. Editar `WA_BASE` em `app/page.tsx`
2. Editar link em `components/ui/site-header.tsx`
3. Editar links em `Index.html`
4. Commit, push, build, deploy com verificação
5. **NUNCA editar direto no HTML de produção** — o GitHub é a fonte da verdade

### Trocar imagens

Substituir os arquivos em `public/` e rebuildar. Se a imagem tiver o mesmo nome, só precisa subir o arquivo novo (DELETE + STOR).

### Adicionar/remover seções

Editar `app/page.tsx` (componentes React). O build gera novo HTML e chunks automaticamente.

---

## Contato

**Eu Faço Seu Marketing** — [lp.eufacoseu.marketing](https://lp.eufacoseu.marketing)  
**GitHub:** [eufacoseumarketing/Oliveira-Quintal_LP](https://github.com/eufacoseumarketing/Oliveira-Quintal_LP)
