import diary from '../assets/diary.jpeg';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import CV from '../assets/files/CV_Diary_RICHARTS.pdf';
import { useRef } from "react"
import gsap from "gsap"

function HomeViews() {
    const frameRef = useRef<HTMLImageElement>(null)

    const handleMouseLeave = () => {
        const element = frameRef.current
        if (!element) return
        
        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut'
        })
    }

    const handleMouseMove = (e : any) => {
        const { clientX, clientY } = e
        const element = frameRef.current

        if (!element) return

        const rect = element.getBoundingClientRect()
        const x = clientX - rect.left
        const y = clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -10
        const rotateY = ((x - centerX) / centerX) * 10

        gsap.to(element, {
            direction: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })
    }
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-12">

            {/* Texte */}
            <div className="flex-1 text-center md:text-left space-y-6">
                <div className="flex items-center justify-center md:justify-start gap-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Fullstack DEVELOPER
                    </h1>
                    <a
                        href={CV}
                        download
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        <FaDownload className="text-2xl md:text-3xl" />
                    </a>
                </div>
                <p className="text-gray-600 text-base md:text-lg">
                    Bonjour, Je m'appelle Diary.
                </p>
                <p className="text-gray-600 text-base md:text-lg">
                    Autonome, rigoureux et passionné, je mets à profit mes compétences et mon
                    engagement pour contribuer efficacement à la réussite des projets de votre
                    entreprise.
                </p>
                <div className="flex gap-8 items-center justify-center md:justify-start text-3xl">
                    <a
                        href="https://www.linkedin.com/in/diary-richarts-bb8913236/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/DiaryFenohasina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>

            {/* Image dans cadre noir avec rotation */}
            <div className="flex-shrink-0 relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-black rotate-3 md:rotate-6 shadow-2xl"></div>
                <img
                    ref={frameRef}
                    src={diary}
                    alt="Diary"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                />
            </div>
        </div>
    );
}

export default HomeViews;
