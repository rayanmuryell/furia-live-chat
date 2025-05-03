# 🐾 Fan Chat da FURIA

Um chat ao vivo em tempo real para os fãs da FURIA eSports interagirem entre si, feito com **Next.js + TypeScript** e **WebSocket (Socket.IO)**.


---

## 🚀 Funcionalidades

- Login com Google via NextAuth
- Chat em tempo real com Socket.IO
- Sistema de moderação com exclusão de mensagens
- Mensagens automatizadas do bot
- Design com vídeo de fundo, animações e visual moderno
- Chat com versão responsiva

---

## 🛠️ Tecnologias

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [Socket.IO](https://socket.io/)
- [NextAuth.js](https://next-auth.js.org/)

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/rayanmuryell/furia-fan-chat.git
cd furia-fan-chat
```

### 2. Instale as dependências

```bash
npm install
```

---

## ⚙️ Configuração

### 1. Crie seu `.env`

Copie o exemplo e edite com suas variáveis reais:

```bash
cp .env.example .env
```

### 2. Edite `.env` com suas credenciais:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000 # Para desenvolvimento
```

---

## ▶️ Executando o Projeto

### 1. Inicie o servidor WebSocket (backend)

```bash
npm install
npm run websocket
```

Ou, se estiver usando TypeScript:

```bash
ts-node src/index.ts
```

> Certifique-se de que o servidor está rodando na porta `3001`.

---

### 2. Inicie a aplicação Next.js (frontend)

Em outra aba do terminal, na raiz do projeto:

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 📂 Estrutura do Projeto

```
    └── 📁public
        └── file.svg
        └── furiamontage.mp4
        └── globe.svg
        └── next.svg
        └── vercel.svg
        └── window.svg
    └── 📁src
        └── 📁app
            └── 📁api
                └── 📁auth
                    └── 📁[...nextauth](NextAuth com Google)
                        └── route.ts
            └── 📁chat
                └── page.tsx
            └── 📁components
                └── CentralContent.tsx
                └── Header.tsx
                └── LeftSideBar.tsx
                └── LoginModal.tsx
                └── PlayerCard.tsx
                └── Tab.tsx
            └── favicon.ico
            └── globals.css
            └── layout.tsx
            └── page.tsx
            └── 📁players
                └── page.tsx
    └── .env.example
    └── .gitignore
    └── eslint.config.mjs
    └── next-env.d.ts
    └── next.config.ts
    └── package-lock.json
    └── package.json
    └── postcss.config.mjs
    └── README.md
    └── server.js(WEBSOCKET)
    └── tsconfig.json

```



---

## 🧪 Testando

1. Acesse `http://localhost:3000`
2. Clique em "Entrar no Chat" e faça login com o Google
3. Teste enviar mensagens, ver mensagens de outros usuários, e se for moderador, use o botão de excluir.

Caso queira adicionar o seu e-mail como moderador, edite a variável `userRoles` no `server.js` do Websocket.
Depois é necessário reiniciar o WS.
Exemplo:
```js
const userRoles = {
    "e-mail_do_moderador@email.com": "moderator", // E-mail do moderador
};
````

---

## 🧳 Licença

MIT © 2025 – [Rayan Muryell]

---

## 💬 Contato

Se tiver dúvidas, sugestões ou quiser contribuir, abra uma issue ou mande um PR. 👊