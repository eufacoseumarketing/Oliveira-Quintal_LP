# Oliveira Quintal Advocacia — Landing Page

**Cliente:** Oliveira Quintal Advocacia (Dra. Terezinha Quintal)
**Área:** Direito de Família e Sucessões · São Paulo
**Domínio em produção:** [terezinhaquintal.adv.br](https://terezinhaquintal.adv.br)
**Hospedagem:** Hostinger (Cloud Startup, FTP `82.112.246.141`)

> Esta é uma **landing page 100% estática**. Depois de compilada, ela vira um conjunto
> de arquivos HTML, CSS, JS e imagens que pode ser publicado em **qualquer** hospedagem
> (Hostinger, cPanel, Netlify, Vercel, GitHub Pages, etc.). Não precisa de servidor Node
> em produção, banco de dados nem configuração especial — só de um espaço de hospedagem comum.

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 15.5 (App Router) |
| Build | `output: "export"` (site 100% estático) |
| UI | React 19 + Tailwind CSS + shadcn/ui |
| Animações | framer-motion |
| Ícones | lucide-react |
| Analytics | Google Tag Manager (`GTM-M866B8KK`) |

---

## Guia rápido: do código ao ar (resumo)

1. Ter o **Node.js 18.18+** instalado (recomendo **20 LTS** ou **22 LTS**).
2. Clonar o repositório.
3. Rodar `npm install` (instala as dependências).
4. Rodar `npm run build` (compila → gera a pasta `out/`).
5. Publicar **o conteúdo da pasta `out/`** na raiz da hospedagem (`public_html`).
6. Confirmar que a página abre e que `/.htaccess` está no ar (Hostinger).

Os passos completos, com detalhes e dicas, estão nas seções abaixo.

---

## 1. Pré-requisitos (o que a pessoa precisa ter instalado)

| Ferramenta | Versão mínima | Para quê |
|-----------|---------------|----------|
| Node.js | 18.18+ (recomendo 20 ou 22 LTS) | Rodar o `npm` e compilar o site |
| npm | vem junto com o Node | Instalar dependências |
| Git | qualquer versão recente | Baixar o código |

Para conferir se já está instalado:

```bash
node -v    # deve mostrar v18.18.0 ou superior (ex.: v20.18.0)
npm -v     # deve mostrar um número de versão (ex.: 10.8.2)
git --version
```

Se o Node não estiver instalado, baixe do site oficial: <https://nodejs.org> (escolha a versão **LTS**).

---

## 2. Baixar o código (clone)

No terminal, dentro da pasta onde quiser trabalhar:

```bash
git clone https://github.com/eufacoseumarketing/Oliveira-Quintal_LP.git
cd Oliveira-Quintal_LP
```

> Se você não tem acesso ao GitHub da EFSM, peça o convite/credencial a quem administra a conta.

---

## 3. Instalar as dependências

```bash
npm install
```

Isso cria a pasta `node_modules/` com tudo que o projeto precisa. Rode **uma vez** por máquina
(ou sempre que o `package-lock.json` mudar).

---

## 4. Rodar em desenvolvimento (opcional)

Para ver o site no navegador enquanto mexe no código, sem precisar compilar:

```bash
npm run dev
```

Abra <http://localhost:3000>. Toda alteração que você salvar atualiza a página na hora.

> Este modo é só para desenvolvimento local. **Não** é isso que você publica.

---

## 5. Compilar (gerar os arquivos de deploy)

```bash
npm run build
```

O que acontece aqui:

1. O Next.js compila todo o código React/Tailwind.
2. Gera os arquivos finais (HTML, CSS, JS, imagens, fontes) dentro da pasta **`out/`**.

**A pasta `out/` é o pacote final de deploy.** É só o que está dentro dela que vai para a hospedagem.

Exemplo do que o `out/` contém (nomes reais podem variar):

```
out/
├── index.html                       # página principal
├── politica-de-privacidade.html     # página de política de privacidade
├── _next/
│   └── static/
│       ├── chunks/…                 # JavaScript
│       ├── css/…                    # estilos
│       └── media/…                  # fontes
├── logo.png, favicon.png, og-image.png
├── banner.jpg, banner2.jpg, sobre.jpg, …
├── logoWhats.png, mobile.jpg, …     # todas as imagens de public/
└── .htaccess                        # regra de URL amigável (Hostinger/Apache)
```

> **Atenção:** o `out/` não deve ser versionado no Git (está no `.gitignore`). É gerado a cada build.

---

## 6. Publicar na hospedagem

### 6.1 O que enviar (e o que NÃO enviar)

Envie **todo o conteúdo de `out/`** (os arquivos e pastas que estão *dentro* de `out/`)
para a **raiz do site** (`public_html`).

- ✅ Enviar: `index.html`, `politica-de-privacidade.html`, `_next/`, as imagens e o `.htaccess`.
- ❌ Não enviar: a pasta `out/` em si, nem `node_modules/`, nem o código-fonte (`app/`, `components/`).

Resumindo: quem visitar `terezinhaquintal.adv.br` deve encontrar o `index.html` na raiz, e não `out/index.html`.

### 6.2 Passo a passo genérico (vale para quase toda hospedagem)

1. **Fazer backup** do que está no ar (pelo painel da hospedagem ou baixando via FTP).
2. Acessar o **Gerenciador de Arquivos** (hPanel/cPanel) ou conectar via FTP (FileZilla, WinSCP).
3. Navegar até a pasta raiz do site (normalmente `public_html/` ou `www/`).
4. **Apagar o conteúdo antigo** da raiz (mantendo o backup).
5. Enviar (upload) **o conteúdo de `out/`** para essa raiz.
6. Garantir que o `.htaccess` subiu junto (ele é um arquivo oculto — em alguns clientes FTP
   é preciso ativar "mostrar arquivos ocultos").

### 6.3 Hostinger — particularidades importantes

A hospedagem atual é a **Hostinger**. Dois cuidados que já causaram incidente antes:

1. **FTP não sobrescreve arquivo com `storbinary` direto.** O upload via FTP da Hostinger
   reporta sucesso mas, em alguns casos, **não substitui** o arquivo. Para atualizar um arquivo
   com segurança, **sempre apague (`DELETE`) antes de enviar (`STOR`)** — ou use o
   **Gerenciador de Arquivos do hPanel**, que é mais confiável que FTP.

2. **`.htaccess` precisa estar no ar.** Sem ele, URLs como `/politica-de-privacidade` não
   resolvem. Se o arquivo sumir (backup corrompido já aconteceu), o conteúdo é:

```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^.]+)$ $1.html [L]
</IfModule>
```

### 6.4 Deploy via FTP com delete explícito (referência)

Para quem automatiza com Python (`ftplib`) ou outro script, o padrão confiável na Hostinger é:

```python
ftp.delete(item)                       # ignora erro se o arquivo ainda não existe
with open(local_path, 'rb') as f:
    ftp.storbinary(f'STOR {item}', f)  # só agora envia
```

Faça isso **para cada arquivo** do `out/` (HTML, JS, CSS, fontes e imagens).

---

## 7. Verificação pós-deploy

Depois de publicar, confirme que está tudo certo:

1. **Abrir a home:** <https://terezinhaquintal.adv.br/> — deve carregar sem erro de layout.
2. **Abrir a política:** <https://terezinhaquintal.adv.br/politica-de-privacidade> — deve carregar.
3. **Validar os assets:** o HTML referencia vários arquivos em `/_next/static/`. Cada um deve
   retornar HTTP 200. Exemplo:

```bash
curl -sI https://terezinhaquintal.adv.br/_next/static/chunks/<chunk>.js
# deve retornar HTTP/2 200
```

Faça isso para **cada chunk JS, CSS e fonte** listado no HTML. Se algum retornar 404, o deploy
foi parcial (faltou subir aquele arquivo) — corrija antes de liberar.

> Dica: um teste simples de "deploy parcial" é dar um *hard refresh* (Ctrl+Shift+R) na página e
> ver se o visual aparece corretamente. Página com layout quebrado quase sempre = CSS/JS faltando.

---

## 8. Cache CDN (Hostinger)

A Hostinger usa LiteSpeed Cache com CDN. Após o deploy:

- O HTML pode demorar **alguns minutos** para atualizar (cache do navegador + CDN).
- Assets estáticos (`_next/static/*`) têm `max-age=604800` (7 dias).
- Para verificar/forçar imediatamente, use query param `?v=<timestamp>` na URL de teste.

---

## 9. Rollback (se algo quebrar)

1. **Restaurar o backup** pelo painel da Hostinger (hPanel). É o caminho mais rápido e confiável.
2. Se não tiver backup, rebuildar a versão anterior do código (`git checkout <commit-antigo>`,
   `npm run build` e redeployar).

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
├── public/                         # Imagens e assets estáticos (copiados para out/ no build)
│   ├── logo.png, favicon.png
│   ├── banner.jpg, banner2.jpg
│   ├── sobre.jpg, sobre2.jpg, sobre3.jpg
│   ├── doutora2.jpg, mulher.jpg, pre.jpg
│   ├── mobile.jpg, mobile2.jpg
│   ├── logoWhats.png, og-image.png
│   └── .htaccess                   # regras de URL amigável
├── Index.html                      # Fallback estático (legado — não usar para deploy)
├── next.config.ts                  # Config com output: "export"
└── tailwind.config.ts
```

> **`Index.html` (com "I" maiúsculo) é legado.** O deploy correto é o `out/` gerado pelo
> `npm run build`. Não confundir os dois.

---

## WhatsApp — Mensagens e Rastreamento

Todas as URLs de WhatsApp usam o formato:

```
https://api.whatsapp.com/send?phone=5511925333331&text=<mensagem>&source_url=https://terezinhaquintal.adv.br
```

**Arquivos onde o número aparece:**
- `app/page.tsx` — constante `WA_BASE`
- `components/ui/site-header.tsx` — link do header
- `Index.html` — links estáticos (fallback legado)

⚠️ **Ao trocar o telefone, editar os arquivos acima.**

A mensagem padrão NÃO inclui `\n\nFonte: XXX` (removido em 07/2026 para manter a experiência limpa).

---

## Manutenção

### Trocar telefone

1. Editar `WA_BASE` em `app/page.tsx`
2. Editar link em `components/ui/site-header.tsx`
3. Editar links em `Index.html` (se ainda estiver em uso)
4. Commit, push, `npm run build` e deploy com verificação
5. **NUNCA editar direto no HTML de produção** — o GitHub é a fonte da verdade

### Trocar imagens

Substituir os arquivos em `public/` e rebuildar. Se a imagem tiver o mesmo nome, basta subir o
arquivo novo (apague antes de enviar, no FTP da Hostinger).

### Adicionar/remover seções

Editar `app/page.tsx` (componentes React). O build gera novo HTML e chunks automaticamente.

---

## Lições Aprendidas

### 🩹 23/07/2026 — Troca de telefone quebrou o site

**Contexto:** precisava trocar o WhatsApp de `(11) 92682-3330` para `(11) 92533-3331`.
A versão em produção não batia com o GitHub.

**Problemas encontrados:**
1. Código no GitHub tinha `\n\nFonte: XXX` nas mensagens que não existia em produção
2. Backup do ex-dev era versão antiga com placeholder de telefone
3. FTP da Hostinger não sobrescrevia arquivos com `storbinary` direto
4. Deploy parcial (HTML sem chunks ou vice-versa) quebrou o site 3 vezes

**Solução final:**
- Alinhar código fonte com produção (remover `Fonte:`, atualizar telefone)
- Deploy com DELETE + STOR para cada arquivo
- Verificação HTTP pós-deploy de todos os assets
- `.htaccess` recriado (backup anterior estava corrompido)

---

## Contato

**Eu Faço Seu Marketing** — [lp.eufacoseu.marketing](https://lp.eufacoseu.marketing)
**GitHub:** [eufacoseumarketing/Oliveira-Quintal_LP](https://github.com/eufacoseumarketing/Oliveira-Quintal_LP)
