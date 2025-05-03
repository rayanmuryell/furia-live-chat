"use client";
import { useState } from "react";
import LoginModal from "./components/LoginModal"; // Importa o componente de modal
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import CentralContent from "./components/CentralContent";




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
        <CentralContent />





        {/* Modal */}
        <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </div>
    </main>
  );
}
