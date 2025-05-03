"use client";
import { useState } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import PlayerCard from "../components/PlayerCard";
import LoginModal from "../components/LoginModal";




export default function Home() {


    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-black text-white flex flex-col">

            {/* Header Fixo */}
            <Header onLoginClick={() => setIsModalOpen(true)} />

            {/* Corpo */}
            <div className="flex flex-1">

                {/* Sidebar Esquerda */}

                <LeftSideBar />

                {/* Conteúdo Central */}
                <PlayerCard />





                {/* Modal */}
                <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            </div>
        </main>
    );
}
