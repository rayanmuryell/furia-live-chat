const players = [
    {
        id: 1,
        name: 'Gabriel "FalleN" Toledo',
        image: 'https://img-cdn.hltv.org/playerbodyshot/Wf26SO_o8nvnsLh0AqZXc5.png?ixlib=java-2.1.0&w=400&s=36b7189a4ae7b020d0acb087fd44777a',
        role: 'Rifler',
        roleimg: 'https://www.hltv.org/img/static/scoreboard/weapons/ak47.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        flag: 'https://www.hltv.org/img/static/flags/30x20/BR.gif',
    },
    {
        id: 2,
        name: 'Yuri "yuurih" Santos',
        image: 'https://img-cdn.hltv.org/playerbodyshot/i6UGhkYxrhutAOmWZT0-8O.png?ixlib=java-2.1.0&w=400&s=2cd696f6ff4baf5680a43d537214b6eb',
        role: 'Rifler',
        roleimg: 'https://www.hltv.org/img/static/scoreboard/weapons/ak47.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        flag: 'https://www.hltv.org/img/static/flags/30x20/BR.gif',
    },
    {
        id: 3,
        name: 'Mareks "YEKINDAR" Gaļinskis',
        image: 'https://img-cdn.hltv.org/playerbodyshot/rRclDPBXIMxFv2fv0dV0J0.png?ixlib=java-2.1.0&w=400&s=2b0f6209ca40efa081852b9d1d8e01c1',
        role: 'Rifler',
        roleimg: 'https://www.hltv.org/img/static/scoreboard/weapons/ak47.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        flag: 'https://www.hltv.org/img/static/flags/30x20/LV.gif',
    },
    {
        id: 4,
        name: 'Kaike "KSCERATO" Cerato',
        image: 'https://img-cdn.hltv.org/playerbodyshot/U6t0j2bJDKUR3mTI8rIqv7.png?ixlib=java-2.1.0&w=400&s=b5257c378b8122f415f21985855e95ca',
        role: 'Rifler',
        roleimg: 'https://www.hltv.org/img/static/scoreboard/weapons/ak47.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        flag: 'https://www.hltv.org/img/static/flags/30x20/BR.gif',
    },
    {
        id: 5,
        name: 'Danil "molodoy" Golubenko',
        image: 'https://img-cdn.hltv.org/playerbodyshot/qNyAd_xVHTTmbCAKPx-jPk.png?ixlib=java-2.1.0&w=400&s=b128ede878e462107c70590202b14139',
        role: 'AWPER',
        roleimg: 'https://www.hltv.org/img/static/scoreboard/weapons/awp.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        flag: 'https://www.hltv.org/img/static/flags/30x20/KZ.gif',
    },
];

export default function PlayerCard() {
    return (
        <section className="flex-1 bg-black pt-2 px-6 flex flex-col items-center justify-start text-center relative">
            <div className="relative w-full flex items-start justify-center">
                <div className="flex flex-col items-center space-y-8">
                    <div className="flex justify-center space-x-8">
                        {players.slice(0, 3).map((player) => (
                            <div
                                key={player.id}
                                className="card card-side bg-base-100 shadow-sm"
                                style={{ width: '300px', height: '200px' }}
                            >
                                <figure>
                                    <img
                                        src={player.image}
                                        alt={player.name}
                                        style={{ width: '100px', height: '100%' }}
                                    />
                                </figure>
                                <div className="card-body flex-col justify-center items-center">
                                    <h2 className="card-title text-sm text-amber-100">{player.name}</h2>
                                    <p className="text-sm">{player.description}</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-disabled text-amber-50 bg-black rounded-full">
                                            <img
                                                src={player.roleimg}
                                                alt={player.role}
                                                className="inline-block mr-2"
                                                style={{ width: '50px', height: 'auto' }}
                                            />
                                            {player.role}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center space-x-8">
                        {players.slice(3).map((player) => (
                            <div
                                key={player.id}
                                className="card card-side bg-base-100 shadow-sm"
                                style={{ width: '300px', height: '200px' }}
                            >
                                <figure>
                                    <img
                                        src={player.image}
                                        alt={player.name}
                                        style={{ width: '100px', height: '100%' }}
                                    />
                                </figure>
                                <div className="card-body flex-col justify-center items-center">
                                    <h2 className="card-title text-amber-100 text-sm">{player.name}</h2>
                                    <p>{player.description}</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-disabled text-amber-50 bg-black rounded-full">
                                            <img
                                                src={player.roleimg}
                                                alt={player.role}
                                                className="inline-block mr-2"
                                                style={{ width: '50px', height: 'auto' }}
                                            />
                                            {player.role}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}