import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext.tsx";

function HeaderComponents() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="relative flex items-center p-8">
            {/* Menu centré */}
            <div className="mx-auto border border-gray-300 rounded-2xl shadow-md px-6 py-2">
                <nav>
                    <ul className="flex space-x-10">
                        <li><a href="/" className="text-black font-bold hover:text-gray-600">Home</a></li>
                        <li><a href="/about" className="text-gray-600 font-bold hover:underline">About</a></li>
                        <li><a href="/project" className="text-gray-600 font-bold hover:underline">Project</a></li>
                        <li><a href="/contact" className="text-gray-600 font-bold hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </div>

            {/* Icône à droite */}
            <div className="absolute right-12 w-14 h-10 border border-gray-300 rounded-full flex justify-center items-center">
                <button
                    onClick={toggleTheme}
                    className="w-full h-full rounded-full flex justify-center items-center
                   hover:bg-gray-300 dark:hover:bg-orange-700 transition"
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? (
                        <FiSun className="w-6 h-6 text-yellow-400 transition-transform rotate-0" />
                    ) : (
                        <FiMoon className="w-6 h-6 text-gray-700 transition-transform rotate-0" />
                    )}
                </button>
            </div>

        </header>
    );
}

export default HeaderComponents;