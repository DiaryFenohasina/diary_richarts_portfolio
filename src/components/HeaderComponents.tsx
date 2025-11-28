import Icon from '../assets/Icon.png';
function HeaderComponents() {
    return (
        <header className="relative flex items-center p-8">
            {/* Menu centré */}
            <div className="mx-auto border border-gray-300 rounded-2xl shadow-md px-6 py-2">
                <nav>
                    <ul className="flex space-x-10">
                        <li><a href="#home" className="text-black font-bold hover:text-gray-600">Home</a></li>
                        <li><a href="#about" className="text-gray-600 font-bold hover:underline">About</a></li>
                        <li><a href="#project" className="text-gray-600 font-bold hover:underline">Project</a></li>
                        <li><a href="#contact" className="text-gray-600 font-bold hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </div>

            {/* Icône à droite */}
            <div className="absolute right-12 w-14 h-10 border border-gray-300 rounded-full flex justify-center items-center">
                <button className="w-full h-full  text-white rounded-full hover:bg-gray-300 flex justify-center items-center">
                    <img src={Icon} alt="Icon" className="w-9 h-9 rounded-full" />
                </button>
            </div>
        </header>
    );
}

export default HeaderComponents;