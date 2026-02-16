import diary from '../assets/diary.jpeg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useRef } from "react"
import gsap from "gsap"

type HomeViewsProps = {
    language: "fr" | "en";
};

function HomeViews({ language }: HomeViewsProps) {
    const frameRef = useRef<HTMLImageElement>(null)
    const copy = language === "fr"
        ? {
            title: "Fullstack DEVELOPER",
            intro: "Bonjour, je m'appelle Diary.",
            description: "Autonome, rigoureux et passionne, je mets a profit mes competences et mon engagement pour contribuer efficacement a la reussite des projets de votre entreprise."
        }
        : {
            title: "Fullstack DEVELOPER",
            intro: "Hello, my name is Diary.",
            description: "Independent, rigorous, and passionate, I use my skills and commitment to contribute effectively to the success of your company's projects."
        };

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

    const handleMouseMove = (e: any) => {
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
        <div className="">
            <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center justify-between gap-8 px-4 py-8 sm:px-6 md:flex-row md:gap-12 md:px-12 md:py-12 lg:px-20">

                {/* Texte */}
                <div className="flex-1 space-y-5 text-center md:space-y-6 md:text-left">
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-4">
                        <h1
                            className="glitch-title home-title text-2xl font-bold sm:text-3xl md:text-4xl"
                            data-text={copy.title}
                        >
                            {copy.title}
                        </h1>
                        {/* <a
                            href={CV}
                            download
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <FaDownload className="text-2xl md:text-3xl" />
                        </a> */}
                    </div>
                    <p className="home-paragraph text-base md:text-lg leading-relaxed">
                        {copy.intro}
                    </p>
                    <p className="home-paragraph text-base md:text-lg leading-relaxed">
                        {copy.description}
                    </p>
                </div>

                {/* Image dans cadre noir avec rotation */}
                <div className="relative h-52 w-52 flex-shrink-0 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
                    <img
                        ref={frameRef}
                        src={diary}
                        alt="Diary"
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
                        onMouseLeave={handleMouseLeave}
                        onMouseEnter={handleMouseLeave}
                        onMouseUp={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                    />
                </div>
            </div>
            <div className="flex items-center justify-center px-4 pb-8 pt-4 sm:px-6 md:p-12">
                <div className="flex gap-8 items-center justify-center md:justify-start text-3xl">
                    <a
                        href="https://www.linkedin.com/in/diary-richarts-bb8913236/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-linkedin transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/DiaryFenohasina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-github transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomeViews;
