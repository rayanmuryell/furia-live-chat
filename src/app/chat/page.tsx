"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { io, Socket } from "socket.io-client";

interface Message {
    id: number;
    user: string;
    text: string;
    timestamp: string;
    image?: string;
}

const Chat = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [socket, setSocket] = useState<Socket | null>(null);
    const [userRole, setUserRole] = useState<string>("user");
    const messagesContainerRef = useRef<HTMLDivElement>(null); // Referência ao contêiner de mensagens
    const [showMenu, setShowMenu] = useState(false); // Estado para controlar a exibição do menu
    const [showPlayer, setShowPlayer] = useState(false); // Estado para controlar a exibição do menu

    // Função para rolar até o final
    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTo({
                top: messagesContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    };

    // Rola para o final sempre que as mensagens mudarem
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Estilo para esconder a barra de rolagem
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.style.scrollbarWidth = "none"; // Firefox
            messagesContainerRef.current.style.overflow = "hidden"; // Esconde a barra
            messagesContainerRef.current.style.overflowY = "scroll"; // Permite rolagem
        }
    }, []);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/");
            return;
        }

        const newSocket = io("http://localhost:3001", { autoConnect: true });
        setSocket(newSocket);

        if (session?.user?.email) {
            newSocket.emit("join", session.user.email);
        }

        newSocket.on("userRole", (role: string) => {
            setUserRole(role);
            console.log("User role:", role);
        });

        newSocket.on("loadMessages", (loadedMessages: Message[]) => {
            setMessages(loadedMessages);
        });

        newSocket.on("newMessage", (message: Message) => {
            setMessages((prev) => [...prev, message]);
        });

        newSocket.on("messagesUpdated", (updatedMessages: Message[]) => {
            setMessages(updatedMessages);
        });

        newSocket.on("error", (errorMessage: string) => {
            alert(errorMessage);
        });

        return () => {
            newSocket.disconnect();
        };
    }, [status, router, session?.user?.email]);

    const sendMessage = () => {
        if (input.trim() && socket && session?.user) {
            const message: Message = {
                id: messages.length,
                user: session.user.name || "Usuário",
                text: input,
                timestamp: new Date().toISOString(),
                image: session.user.image || "/default-avatar.png",
            };
            socket.emit("sendMessage", message);
            setInput("");
        }
    };

    const deleteMessage = (messageId: number) => {
        if (socket && session?.user?.email) {
            socket.emit("deleteMessage", {
                messageId,
                userEmail: session.user.email,
            });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    if (status === "loading") {
        return <div className="flex justify-center items-center h-screen">Carregando...</div>;
    }

    if (!session) {
        return null;
    }

    function gotoHome(): void {
        router.push("/");
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            {/* Cabeçalho */}
            <header className="bg-gray-800 p-4 flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                    <img
                        src={session.user?.image || "/default-avatar.png"}
                        alt="Foto de perfil"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h1 className="text-2xl font-bold">Chat ao Vivo - FURIA</h1>
                        <p className="text-sm text-gray-400">
                            Olá, {session.user?.name}!
                            <button
                                onClick={gotoHome}
                                className="btn btn-link badge badge-sm ml-2"
                            >
                                Sair
                            </button>
                        </p>
                    </div>
                    <button
                        onClick={() => setShowPlayer((prev) => !prev)}
                        className="ml-auto bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
                    >
                        {showPlayer ? "Esconder Player" : "Mostrar Player"}
                    </button>
                </div>
                {showPlayer && (
                    <div className="mt-4">
                        <iframe
                            src="https://player.twitch.tv/?channel=gaules&parent=localhost&autoplay=true&pip=true"
                            height="300"
                            width="300"
                            allowFullScreen
                            allow="picture-in-picture"
                            className="rounded-lg"
                        ></iframe>
                        <div className="mt-2 flex items-center justify-between">
                            <p className="text-sm text-gray-400 mt-2 flex items-center">
                                A FURIA está ao vivo! Acompanhe o jogo e interaja com a comunidade.
                            </p>
                        </div>
                    </div>
                )}
            </header>

            {/* Área de mensagens com rolagem independente */}
            <div
                ref={messagesContainerRef}
                className="flex-1 p-4 overflow-y-auto max-h-[calc(100vh-180px)]"
            >
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`mb-4 ${msg.user === session.user?.name ? "text-right" : "text-left"}`}
                    >
                        <div
                            className={`inline-block p-3 rounded-lg ${msg.user === session.user?.name
                                ? "bg-blue-600 text-white"
                                : "bg-gray-700 text-gray-200"
                                }`}
                        >
                            <div className="flex items-center space-x-2">
                                <img
                                    src={msg.image || "/default-avatar.png"}
                                    alt={`Foto de ${msg.user}`}
                                    className="w-6 h-6 rounded-full object-cover"
                                />
                                <p className="text-sm font-semibold">{msg.user}</p>
                            </div>
                            <p className="whitespace-pre-line">{msg.text}</p>
                            <p className="text-xs text-gray-400">
                                {new Date(msg.timestamp).toLocaleTimeString()}
                            </p>
                            {userRole === "moderator" && (
                                <button
                                    onClick={() => deleteMessage(msg.id)}
                                    className="text-red-400 text-xs mt-1 hover:text-red-600"
                                >
                                    Excluir
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Caixa de envio fixa na parte inferior */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex items-center space-x-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        if (e.target.value.length <= 50) {
                            setInput(e.target.value);
                        }
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Digite sua mensagem (máx. 50 caracteres)..."
                    className="flex-1 p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    disabled={input.trim().length === 0}
                >
                    Enviar
                </button>
                <div className="relative">
                    <button
                        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
                        onClick={() => setShowMenu((prev) => !prev)}
                    >
                        🤖
                    </button>
                    {showMenu && (
                        <div
                            className="absolute bottom-full mb-2 right-0 bg-gray-800 text-white rounded-lg shadow-lg w-48"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
                        >
                            <ul className="py-2">
                                <li
                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                    onClick={() => {
                                        if (socket) {
                                            const botMessage: Message = {
                                                id: messages.length,
                                                image: "https://gg.soclminer.com.br/customers/79f6dd9a-33ad-4af8-a265-9d446e17b89c/e88a572fa1ef4ec0be7a81d3695ec840/logo.png?v=1745822610818",
                                                user: "Chatbot - FURIOSO 🤖",
                                                text: `Atualmente a FURIA está jogando contra a CLOUD 9! Caso não esteja vendo, clique no botão "Mostrar Player" acima!`,
                                                timestamp: new Date().toISOString(),
                                            };
                                            socket.emit("sendMessage", { ...botMessage, isBot: true });
                                        }
                                    }}
                                >
                                    LIVE! 🟢
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                    onClick={() => {
                                        if (socket) {
                                            const botMessage: Message = {
                                                id: messages.length,
                                                image: "https://gg.soclminer.com.br/customers/79f6dd9a-33ad-4af8-a265-9d446e17b89c/e88a572fa1ef4ec0be7a81d3695ec840/logo.png?v=1745822610818",
                                                user: "Chatbot - FURIOSO 🤖",
                                                text: "Os próximos campeonatos são: \n1. PGL Astana 2025\n2. IEM Dallas 2025\n3. BLAST.tv Austin Major 2025 Stage 2",
                                                timestamp: new Date().toISOString(),
                                            };
                                            socket.emit("sendMessage", { ...botMessage, isBot: true });
                                        }
                                    }}
                                >
                                    Próximos Campeonatos
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                    onClick={() => {
                                        window.open("https://www.furia.gg/", "_blank");
                                    }}
                                >
                                    Loja da FURIA
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                    onClick={() => {
                                        if (socket) {
                                            const botMessage: Message = {
                                                id: messages.length,
                                                image: "https://gg.soclminer.com.br/customers/79f6dd9a-33ad-4af8-a265-9d446e17b89c/e88a572fa1ef4ec0be7a81d3695ec840/logo.png?v=1745822610818",
                                                user: "Chatbot - FURIOSO 🤖",
                                                text: "Para tirar dúvidas, entre em contato com: rayan_muryell@hotmail.com",
                                                timestamp: new Date().toISOString(),
                                            };
                                            socket.emit("sendMessage", { ...botMessage, isBot: true });
                                        }
                                    }}
                                >
                                    Tirar dúvidas
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Chat;