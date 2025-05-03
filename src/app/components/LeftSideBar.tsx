import Image from "next/image";
const images = {
    ["FURIA"]: "https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png",
    ["Team Liquid"]: "https://upload.wikimedia.org/wikipedia/pt/4/4b/Teamliquid_logo_blue.png?20220910162021",
    ["NAVI"]: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Natus_Vincere_logo.png",
    ["G2"]: "https://upload.wikimedia.org/wikipedia/pt/2/23/G2_Esports_logo.png",
    ["ASTRALIS"]: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Astralis_logo.svg/250px-Astralis_logo.svg.png",
    ["CLOUD 9"]: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cloud9_logo_c._2023.svg/200px-Cloud9_logo_c._2023.svg.png",
}

export default function LeftSideBar() {
    return (
        <aside className="w-1/5 bg-gray-900 p-6 flex flex-col gap-8 overflow-y-auto">
            <section>
                <div className="mx-auto px-4 sm:container">
                    <div className="border-l-[5px] border-primary pl-5">
                        <h2 className="mb-5 text-2xl font-semibold text-dark dark:text-white">
                            Resultados Recentes
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col gap-4">

                    {/* Card de Placar */}
                    <div className="bg-gray-800 rounded-lg p-3 shadow hover:bg-gray-700 transition relative">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <Image
                                    src={images["FURIA"]}
                                    alt="Logo FURIA"
                                    width={40}
                                    height={40}
                                />
                                <span className="text-sm font-bold text-white w-16 text-center">FURIA</span>
                            </div>
                            <span className="text-sm font-bold text-red-400">2 - 1</span>
                            <div className="flex items-center space-x-4">
                                <span className="text-sm font-bold text-white w-16 text-center">CLOUD 9</span>
                                <Image
                                    src={images["CLOUD 9"]}
                                    alt="Logo ASTRALIS"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-3 shadow hover:bg-gray-700 transition relative">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <Image
                                    src={images["FURIA"]}
                                    alt="Logo FURIA"
                                    width={40}
                                    height={40}
                                />
                                <span className="text-sm font-bold text-white w-16 text-center">FURIA</span>
                            </div>
                            <span className="text-sm font-bold text-green-400">2 - 1</span>
                            <div className="flex items-center space-x-4">
                                <span className="text-sm font-bold text-white w-16 text-center">Astralis</span>
                                <Image
                                    src={images["ASTRALIS"]}
                                    alt="Logo ASTRALIS"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-3 shadow hover:bg-gray-700 transition relative">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <Image
                                    src={images["FURIA"]}
                                    alt="Logo FURIA"
                                    width={40}
                                    height={40}
                                />
                                <span className="text-sm font-bold text-white w-16 text-center">FURIA</span>
                            </div>
                            <span className="text-sm font-bold text-green-400">3 - 2</span>
                            <div className="flex items-center space-x-4">
                                <span className="text-sm font-bold text-white w-16 text-center">G2</span>
                                <Image
                                    src={images["G2"]}
                                    alt="Logo G2"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="mx-auto px-4 sm:container">
                    <div className="border-l-[5px] border-primary pl-5">
                        <h2 className="mb-5 text-2xl font-semibold text-dark dark:text-white">
                            Próximos Eventos
                        </h2>
                    </div>
                </div>
                <ul className="text-gray-400 text-base space-y-3">
                    <div className="flex w-full flex-col">
                        <img
                            src="https://img-cdn.hltv.org/eventbanner/UUla2z2YKFadqyn8cL44UO.jpg?ixlib=java-2.1.0&w=1276&s=c058c275ed1f2c0b304de1d72a1ccde0"
                            alt="Logo do Evento"
                            className="inline-block mr-2"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className="card bg-base-300 rounded-box grid h-20 place-items-center bold">PGL Astana 2025
                            <div className="badge badge-soft badge-info">10/05/2025</div>
                        </div>
                        <div className="divider"></div>
                        <img
                            src="https://img-cdn.hltv.org/eventbanner/N0-VIPSOfPzDcD5LutQIjd.png?ixlib=java-2.1.0&w=1276&s=fd54ae002769c88c3196e6b28162fd88"
                            alt="Logo do Evento"
                            className="inline-block mr-2"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className="card bg-base-300 rounded-box grid h-20 place-items-center bold">IEM Dallas 2025
                            <div className="badge badge-soft badge-info">19/05/2025</div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <img
                        src="https://img-cdn.hltv.org/eventbanner/ITPa2pUSNjRxu-kSuUvKxB.png?ixlib=java-2.1.0&w=1276&s=2285e1276bd056d087f5a75d5f1d401e"
                        alt="Logo do Evento"
                        className="inline-block mr-2"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                    <div className="card bg-base-300 rounded-box grid h-20 place-items-center bold">BLAST.tv Austin Major 2025 Stage 2
                        <div className="badge badge-soft badge-info">07/07/2025</div>
                    </div>
                </ul>
            </section>
        </aside>
    )
}