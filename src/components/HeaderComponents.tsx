import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaLanguage } from "react-icons/fa";
const sections = ["home", "about", "skills", "project", "contact"];

type HeaderProps = {
    theme?: "light" | "dark";
    language?: "fr" | "en";
    onToggleTheme?: () => void;
    onToggleLanguage?: () => void;
};

function HeaderComponents({
    theme = "light",
    language = "fr",
    onToggleTheme = () => {},
    onToggleLanguage = () => {}
}: HeaderProps) {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const marker = window.innerHeight * 0.35;
            let currentId = "";
            let closestId = "";
            let closestDistance = Number.POSITIVE_INFINITY;

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (!section) return;

                const rect = section.getBoundingClientRect();
                const containsMarker = rect.top <= marker && rect.bottom >= marker;
                const distance = Math.abs(rect.top - marker);

                if (containsMarker) currentId = id;
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestId = id;
                }
            });

            setActiveSection(currentId || closestId || sections[0]);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const linkClass = (id: string) =>
        `header-link font-bold transition ${activeSection === id
            ? "header-link--active"
            : ""
        }`;

    const labels = language === "fr"
        ? { home: "Accueil", about: "A propos", skills: "Skills", project: "Projets", contact: "Contact" }
        : { home: "Home", about: "About", skills: "Skills", project: "Projects", contact: "Contact" };

    return (
        <header className="app-header fixed top-0 left-0 w-full z-50 px-3 py-3 sm:px-4 md:p-8">
            <div className="relative mx-auto w-full max-w-[1280px]">
                <div className="menu-shell mx-auto w-fit max-w-full rounded-2xl shadow-md px-4 py-2 md:px-6">
                    <nav className="overflow-x-auto">
                        <ul className="flex w-max items-center gap-5 whitespace-nowrap sm:gap-7 md:gap-10">
                        <li>
                            <a href="#home" className={linkClass("home")} data-text={labels.home}>
                                {labels.home}
                            </a>
                        </li>
                        <li>
                            <a href="#about" className={linkClass("about")} data-text={labels.about}>
                                {labels.about}
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className={linkClass("skills")} data-text={labels.skills}>
                                {labels.skills}
                            </a>
                        </li>
                        <li>
                            <a href="#project" className={linkClass("project")} data-text={labels.project}>
                                {labels.project}
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={linkClass("contact")} data-text={labels.contact}>
                                {labels.contact}
                            </a>
                        </li>
                        </ul>
                    </nav>
                </div>

                <div className="header-actions mt-3 flex items-center justify-center gap-2 sm:absolute sm:right-2 sm:top-1/2 sm:mt-0 sm:-translate-y-1/2 sm:gap-3 md:right-8">
                <button
                    type="button"
                    className="header-icon-btn"
                    onClick={onToggleLanguage}
                    aria-label={language === "fr" ? "Passer en anglais" : "Switch to French"}
                    title={language === "fr" ? "Langue: FR" : "Language: EN"}
                >
                    <FaLanguage />
                    <span className="text-[10px] font-bold sm:text-xs">{language.toUpperCase()}</span>
                </button>
                <button
                    type="button"
                    className="header-icon-btn"
                    onClick={onToggleTheme}
                    aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
                    title={theme === "light" ? "Dark mode" : "Light mode"}
                >
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponents;
