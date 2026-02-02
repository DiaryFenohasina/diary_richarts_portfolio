import { useEffect, useState } from "react";
const sections = ["home", "about", "contact","project"];

function HeaderComponents() {
    const [activeSection, setActiveSection] = useState("");

    // Scroll spy
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 120;

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const top = section.offsetTop;
                    const bottom = top + section.offsetHeight;

                    if (scrollPos >= top && scrollPos < bottom) {
                        setActiveSection(id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClass = (isActive: boolean, id?: string) =>
        `font-bold transition ${isActive || activeSection === id
            ? "text-black underline"
            : "text-gray-600 hover:text-gray-800"
        }`;

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white flex items-center p-8">

            {/* Menu centré */}
            <div className="mx-auto border border-gray-300 rounded-2xl shadow-md px-6 py-2">
                <nav>
                    <ul className="flex space-x-10">
                        <li>
                            <a href="#home" className={linkClass(false, "home")}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className={linkClass(false, "about")}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={linkClass(false, "contact")}>
                                Contact
                            </a>
                        </li>                        
                        <li>
                            <a href="#project" className={linkClass(false, "project")}>
                                Project
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default HeaderComponents;
