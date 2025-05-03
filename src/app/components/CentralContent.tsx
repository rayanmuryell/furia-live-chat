import { useEffect, useRef, useState } from "react";
import LoginModal from "./LoginModal";

export default function CentralContent() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);  // Abre o modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);  // Fecha o modal
    };

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Se já estiver carregado, recria o widget
        if (window && (window as any).twttr?.widgets?.load) {
            (window as any).twttr.widgets.load(ref.current);
        }
    }, []);



    return (

        <section className="flex-1 bg-black pt-6 px-6 flex flex-col items-center justify-start text-center relative">
            <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
            {/* Vídeo de fundo */}
            <div className="w-full flex items-start justify-center">
                <video
                    className="absolute w-4/4 h-auto max-h-[20vh] object-cover opacity-80 rounded-lg shadow-lg"
                    src="/furiamontage.mp4"
                    autoPlay
                    loop
                    muted
                    style={{
                        maskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
                    }}
                />
                {/* Texto sobreposto */}
                <div className="z-9 text-center mb-3">
                    <div className="text-primary-content grid place-content-center text-9xl font-black">
                        FURIA
                    </div>
                    <p className="text-2xl md:text-3xl text-gray-400 mb-10">
                        Junte-se à torcida mais feroz dos eSports!
                    </p>
                    <button
                        onClick={handleOpenModal}
                        className="btn btn-soft btn-success text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4"
                    >
                        Entrar no Chat
                    </button>
                </div>
            </div>
            <div className="flex justify-center mb-5">

            </div>
            <iframe width="1312" height="738" src="https://www.youtube.com/embed/IKBWD0B3S9Y" title="O BRASIL FEZ O S1MPLE TREMER! FÚRIA ATROPELA NAVI! MELHORES MOMENTOS FURIA VS NAVI - MAJOR RIO" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>

    )
}