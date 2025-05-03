"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await signIn("google", { redirect: false, callbackUrl: "/chat" });
            if (result?.error) {
                throw new Error(result.error);
            }
        } catch (error: any) {
            console.error("Erro detalhado ao fazer login com Google:", {
                message: error.message,
                name: error.name,
                stack: error.stack,
                errorObject: error,
            });
            setError(error.message || "Falha ao fazer login. Tente novamente.");
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
                <img
                    src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png"
                    alt="Logo da FURIA"
                />
                <h2 className="text-sm font-light mb-4 text-gray-950 items-center text-center">
                    Faça login e participe do canal ao vivo com outros torcedores.
                </h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="flex flex-col justify-center mb-4 width-full">
                    <button
                        onClick={handleLogin}
                        disabled={isLoading}
                        className={`btn btn-active ${isLoading ? "opacity-50 cursor-not-allowed btn bg-white text-black border-[#e5e5e5]" : ""
                            }`}
                    >
                        <svg className="bg-transparent" aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        {isLoading ? <span className="loading loading-dots loading-xs text-gray-900"></span> : "Login com Google"}
                    </button>
                    <button
                        onClick={onClose}
                        className="text-gray-500 mt-4 w-full text-center"
                        disabled={isLoading}
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}