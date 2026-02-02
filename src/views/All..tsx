import HomeViews from "./HomeViews";
import SectionHorizontal from "./About";
export default function All() {
    return (
        <div>
            <section id="home" className="min-h-screen flex items-center justify-center text-4xl"><HomeViews /></section>
            <section id="about" className="min-h-screen flex items-center justify-center text-4xl"><HomeViews /></section>
            <section id="contact" className="min-h-screen">Contact Section</section>
            <section id="project" className="min-h-screen bg-gray-100"><SectionHorizontal /></section>
        </div>
    );
}                                       
