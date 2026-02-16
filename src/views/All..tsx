import HomeViews from "./HomeViews";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";
import ProjectsPage from "./ProjectsPage";

type AllProps = {
    language: "fr" | "en";
};

export default function All({ language }: AllProps) {
    return (
        <div className="w-full">
            <section id="home" className="min-h-screen w-full flex items-center justify-center scroll-mt-28 md:scroll-mt-32">
                <HomeViews language={language} />
            </section>
            <section id="about" className="min-h-[92vh] w-full flex items-center scroll-mt-28 md:scroll-mt-32">
                <AboutPage language={language} />
            </section>
            <section id="skills" className="min-h-[92vh] w-full flex items-center scroll-mt-28 md:scroll-mt-32">
                <SkillsPage language={language} />
            </section>
            <section id="project" className="min-h-screen w-full section-project scroll-mt-28 md:scroll-mt-32">
                <ProjectsPage language={language} />
            </section>
            <section id="contact" className="min-h-[88vh] w-full app-contact-section flex items-center scroll-mt-28 md:scroll-mt-32">
                <ContactPage language={language} />
            </section>
        </div>
    );
}
