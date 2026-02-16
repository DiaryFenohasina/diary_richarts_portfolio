import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SECTIONS from '../data/MockData';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return;

    let ctx = gsap.context(() => {
      
      if (!componentRef.current || !sliderRef.current) return;

      const getTravel = () => {
        if (!componentRef.current || !sliderRef.current) return 0;
        return Math.max(0, sliderRef.current.scrollWidth - componentRef.current.offsetWidth);
      };

      if (getTravel() === 0) return;

      // Scroll horizontal propre
      const scrollTween = gsap.to(sliderRef.current, {
        x: () => -getTravel(),
        ease: "none",
        scrollTrigger: {
          trigger: componentRef.current,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          end: () => "+=" + (getTravel() + (componentRef.current?.offsetWidth || 0))
        }
      });

      // Animations internes
      for (let index = 0; index < SECTIONS.length; index += 1) {
        
        // ✅ Animation du texte - déclenche à 50% (center)
        gsap.fromTo(`.title-${index} .char`, 
          { 
            y: 100, 
            opacity: 0, 
            rotateX: -90 
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "power4.out",
            scrollTrigger: {
              trigger: `.section-${index}`,
              containerAnimation: scrollTween,
              start: "left center",  // 50% de la section visible
              end: "center center",  // Fin au centre
              scrub: 1,
              toggleActions: "play reverse play reverse"
            }
          }
        );

        // Animation du sous-titre
        gsap.fromTo(`.subtitle-${index}`,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: `.section-${index}`,
              containerAnimation: scrollTween,
              start: "left center",
              end: "center center",
              scrub: 1,
              toggleActions: "play reverse play reverse"
            }
          }
        );

        // Animation de la description
        gsap.fromTo(`.desc-${index}`,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: `.section-${index}`,
              containerAnimation: scrollTween,
              start: "left center",
              end: "center center",
              scrub: 1,
              toggleActions: "play reverse play reverse"
            }
          }
        );

        // Animation du bouton
        gsap.fromTo(`.button-${index}`,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: `.section-${index}`,
              containerAnimation: scrollTween,
              start: "left center",
              end: "center center",
              scrub: 1,
              toggleActions: "play reverse play reverse"
            }
          }
        );

        // Animation d'image (parallax)
        gsap.fromTo(`.img-${index}`,
          { scale: 1.6, xPercent: -20 },
          { 
            scale: 1, 
            xPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: `.section-${index}`,
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: true
            }
          }
        );
      }

      ScrollTrigger.refresh();

    }, componentRef);

    return () => ctx.revert();
  }, [isMobile]);

  // SplitText maison
  const splitText = (text: string) => {
    return text.split("").map((char: string, i: number) => (
      <span key={i} className="char inline-block whitespace-pre transform-style-3d">
        {char}
      </span>
    ));
  };

  if (isMobile) {
    return (
      <div className="w-full bg-black px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          {SECTIONS.map((section: (typeof SECTIONS)[number]) => (
            <article
              key={section.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="h-56 w-full sm:h-72">
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4 p-5 sm:p-6">
                <div className={`text-xs font-bold uppercase tracking-[0.2em] sm:text-sm ${section.accent}`}>
                  {section.subtitle}
                </div>
                <h2 className="text-2xl font-black text-white sm:text-3xl">
                  {section.title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                  {section.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={componentRef} className="overscroll-none h-screen w-full overflow-hidden bg-black">
      <div ref={sliderRef} className="flex w-max">
        
        {SECTIONS.map((section: (typeof SECTIONS)[number], index: number) => (
          <div 
            key={section.id} 
            className={`section-${index} relative h-screen w-screen flex items-center justify-center ${section.bg} overflow-hidden `}
          >
            
            {/* Image de fond (Overlay) légèrement moins opaque pour le thème sombre */}
            <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
               <img 
                 src={section.image} 
                 alt={section.title} 
                 className={`img-${index} w-full h-full object-cover grayscale`} 
               />
            </div>

            <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-12 md:px-8">
              
              <div className="space-y-6">
                <div className={`subtitle-${index} text-sm font-bold tracking-[0.3em] uppercase ${section.accent} mb-4`}>
                  {section.subtitle}
                </div>

                <h2 className="overflow-hidden text-4xl font-black leading-[0.9] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  <div className={`title-${index} flex flex-wrap perspective-text`}>
                    {splitText(section.title)}
                  </div>
                </h2>

                <p className={`desc-${index} mt-6 max-w-md border-l-2 border-white/20 pl-4 text-base text-gray-300 sm:mt-8 sm:pl-6 sm:text-lg md:text-xl`}>
                  {section.description}
                </p>

              </div>

              <div className="hidden md:flex justify-center items-center">
                {/* Cadre de l'image plus "Tech" (carré arrondi ou cercle selon préférence, ici cercle gardé mais avec bordure brillante) */}
                <div className={`img-wrapper-${index} relative h-[420px] w-[320px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50 backdrop-blur-sm lg:h-[500px] lg:w-[400px]`}>
                   <img 
                     src={section.image} 
                     alt="" 
                     className={`img-${index} w-full h-full object-cover`} 
                   />
                   {/* Overlay de scan line pour l'effet tech */}
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-50 pointer-events-none"></div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        .transform-style-3d {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        .perspective-text {
          perspective: 1000px;
        }
      `}</style>
    </div>
  )
}

export default About;
