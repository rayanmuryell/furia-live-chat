export default function Header({ onLoginClick }: { onLoginClick: () => void }) {
    return (
        <header className="sticky top-0 bg-black flex items-center p-4 border-b border-gray-800 z-10">
            <img
                src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png"
                alt="Logo da FURIA"
                className="w-16 h-auto mr-4"
            />
            <script
                async
                src="https://platform.twitter.com/widgets.js"
            ></script>
            <div className="flex space-x-4">
                <a className="btn btn-ghost text-sm">FURIA eSports</a>
                <a href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Página Inicial</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={onLoginClick}>Transmissões Ao Vivo
                    <div className="ml-2 inline-grid *:[grid-area:1/1]">
                        <div className="status status-success animate-ping"></div>
                        <div className="status status-success"></div>
                    </div>
                </a>
                <a href="/players" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Jogadores</a>
            </div>
        </header>
    )
}