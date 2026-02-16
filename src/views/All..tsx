import HomeViews from "./HomeViews";
import SectionHorizontal from "./About";

type AllProps = {
    language: "fr" | "en";
};

export default function All({ language }: AllProps) {
    const contactText = language === "fr" ? "Section Contact" : "Contact Section";

    return (
        <div>
            <section id="home" className="min-h-screen flex items-center justify-center"><HomeViews language={language} /></section>
            <section id="about" className="min-h-screen flex items-center justify-center"><HomeViews language={language} /></section>
            <section id="contact" className="min-h-[45vh] app-contact-section px-4 pb-16 pt-24 text-center text-lg sm:text-xl">{contactText}</section>
            <section id="project" className="min-h-screen section-project"><SectionHorizontal /></section>
        </div>
    );
}
