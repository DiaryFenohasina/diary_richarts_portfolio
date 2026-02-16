import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import steps from "../data/StepperMock";
import SECTIONS from "../data/MockData";

gsap.registerPlugin(ScrollTrigger);

type ProjectsPageProps = {
  language: "fr" | "en";
};

function ProjectsPage({ language }: ProjectsPageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return;
    if (!wrapperRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const getTravel = () => {
        if (!wrapperRef.current || !trackRef.current) return 0;
        return Math.max(0, trackRef.current.scrollWidth - wrapperRef.current.offsetWidth);
      };

      if (getTravel() === 0) return;

      gsap.to(trackRef.current, {
        x: () => -getTravel(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          end: () => "+=" + (getTravel() + (wrapperRef.current?.offsetWidth || 0))
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [isMobile]);

  const title = language === "fr" ? "Projets" : "Projects";
  const intro = language === "fr"
    ? "Stepper horizontal anime avec GSAP."
    : "Horizontal GSAP animated stepper.";

  const normalized = steps.map((step, index) => ({
    id: index + 1,
    label: step.label,
    description: step.description,
    link: step.link,
    image: SECTIONS[index % SECTIONS.length]?.image
  }));

  return (
    <div ref={wrapperRef} className="project-stepper-wrap">
      {/* <div className="project-stepper-head mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 md:pt-20">
        <h2 className="project-main-title text-4xl font-extrabold sm:text-5xl md:text-6xl">{title}</h2>
        <p className="mt-4 text-base sm:text-lg">{intro}</p>
      </div> */}

      <div
        className={
          isMobile
            ? "mt-8 overflow-hidden px-4 pb-10 sm:px-6"
            : "h-screen overflow-hidden px-4 sm:px-6 flex items-center"
        }
      >
        <div ref={trackRef} className="project-stepper-track flex w-max items-stretch gap-6">
          <div className="shrink-0 w-[7.5vw] sm:w-[15vw] lg:w-[21vw]" />
          {normalized.map((step) => (
            <article key={step.id} className="project-step-card app-card w-[85vw] max-w-[720px] shrink-0 rounded-3xl p-5 sm:w-[70vw] sm:p-6 lg:w-[58vw]">
              <div className="mb-5 flex items-center gap-3">
                <span className="project-step-index inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold">
                  {step.id}
                </span>
                <div className="project-step-line h-[2px] flex-1 rounded-full" />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.2fr_1fr] md:gap-6">
                <div>
                  <h3 className="text-2xl font-semibold sm:text-3xl">{step.label}</h3>
                  <p className="mt-4 text-sm leading-relaxed sm:text-base">{step.description}</p>
                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-step-link mt-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold"
                    >
                      {language === "fr" ? "Voir le repo" : "View repo"}
                    </a>
                  )}
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={step.image}
                    alt={step.label}
                    className="h-56 w-full object-cover sm:h-64"
                  />
                </div>
              </div>
            </article>
          ))}
          <div className="shrink-0 w-[7.5vw] sm:w-[15vw] lg:w-[21vw]" />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
