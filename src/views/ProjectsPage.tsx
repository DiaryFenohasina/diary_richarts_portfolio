import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import steps from "../data/StepperMock";

gsap.registerPlugin(ScrollTrigger);

type ProjectsPageProps = {
  language: "fr" | "en";
};

type StepProject = {
  id: number;
  label: string;
  description: string;
  link?: string;
  images: string[];
  stacks: string[];
};

function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const imageCount = images.length;
  const hasMultipleImages = imageCount > 1;
  const imageHeightClass =
    imageCount >= 3 ? "h-56 sm:h-64" : imageCount === 2 ? "h-64 sm:h-72" : "h-72 sm:h-80";

  useEffect(() => {
    if (paused || !hasMultipleImages) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [hasMultipleImages, images.length, paused]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/70 p-1"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, index) => (
        <img
          key={`${title}-${src}-${index}`}
          src={src}
          alt={`${title} ${index + 1}`}
          className={`${imageHeightClass} w-full rounded-xl border border-gray-200 object-cover transition-opacity duration-500 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          } ${index === 0 ? "relative" : "absolute inset-1"}`}
        />
      ))}
      {hasMultipleImages && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <span
              key={`${title}-dot-${i}`}
              className={`h-1.5 w-1.5 rounded-full ${i === activeIndex ? "bg-white" : "bg-white/45"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectsPage({ language }: ProjectsPageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);
  const edgeSpacerWidth = isMobile ? "1rem" : "14vw";

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


  const fallbackImage = "/img/background/ia.jpg";

  const normalized: StepProject[] = steps.map((step, index) => ({
    images: (() => {
      const deduped = Array.from(new Set(step.images || []));
      return deduped.length > 0 ? deduped : [fallbackImage];
    })(),
    id: index + 1,
    label: step.label,
    description: language === "fr" ? step.description : (step.descriptionEn || step.description),
    link: step.link,
    stacks: step.stacks || []
  }));

  return (
    <div ref={wrapperRef} className="project-stepper-wrap">
      <div
        className={
          isMobile
            ? "mt-8 overflow-x-auto overflow-y-hidden px-4 pb-10 sm:px-6"
            : "h-screen overflow-hidden px-4 sm:px-6 flex items-center"
        }
        style={
          isMobile
            ? {
                marginTop: "2rem",
                overflowX: "auto",
                overflowY: "hidden",
                padding: "0 1rem 2.5rem",
                WebkitOverflowScrolling: "touch"
              }
            : {
                height: "100vh",
                overflow: "hidden",
                padding: "0 1rem",
                display: "flex",
                alignItems: "center"
              }
        }
      >
        <div
          ref={trackRef}
          className={`project-stepper-track flex w-max items-stretch gap-6 ${isMobile ? "snap-x snap-mandatory pr-6" : ""}`}
          style={{
            display: "flex",
            width: "max-content",
            alignItems: "stretch",
            gap: "1.5rem",
            paddingRight: isMobile ? "1.5rem" : 0
          }}
        >
          <div
            className="shrink-0"
            style={{ flex: "0 0 auto", width: edgeSpacerWidth }}
          />
          {normalized.map((step) => (
            <article
              key={step.id}
              className={`project-step-card app-card w-[85vw] max-w-[720px] shrink-0 rounded-3xl p-5 sm:w-[70vw] sm:p-6 lg:w-[58vw] ${isMobile ? "snap-center" : ""}`}
              style={{
                flex: "0 0 auto",
                width: isMobile ? "85vw" : "58vw",
                maxWidth: "720px"
              }}
            >
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
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                      {language === "fr" ? "Stack utilisee" : "Tech Stack"}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {step.stacks.map((tech) => (
                        <span
                          key={`${step.id}-${tech}`}
                          className="rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
                <ProjectCarousel images={step.images} title={step.label} />
              </div>
            </article>
          ))}
          <div
            className="shrink-0"
            style={{ flex: "0 0 auto", width: edgeSpacerWidth }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
