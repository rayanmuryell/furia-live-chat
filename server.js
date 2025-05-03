const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

let messages = [];
const userRoles = {
    "e-mail_do_moderador@email.com": "moderator", // E-mail do moderador
};

io.on("connection", (socket) => {
    console.log("Usuário conectado:", socket.id);

    socket.on("join", (userEmail) => {
        const role = userRoles[userEmail] || "user";
        socket.emit("loadMessages", messages);
        socket.emit("userRole", role);
    });

    socket.on("sendMessage", (message) => {
        messages.push({ ...message, id: messages.length });
        io.emit("newMessage", message);
    });

    socket.on("deleteMessage", ({ messageId, userEmail }) => {
        if (userRoles[userEmail] === "moderator") {
            messages = messages.filter((msg) => msg.id !== messageId);
            io.emit("messagesUpdated", messages);
        } else {
            socket.emit("error", "Apenas moderadores podem excluir mensagens.");
        }
    });

    socket.on("disconnect", () => {
        console.log("Usuário desconectado:", socket.id);
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Servidor WebSocket rodando na porta ${PORT}`);
});