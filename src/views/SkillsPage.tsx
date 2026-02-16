import skillsMock from "../data/SkillsMock";
import { FaCode, FaLaptopCode, FaServer, FaTools } from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiFastapi,
  SiLaravel,
  SiSymfony,
  SiDocker,
  SiGit,
  SiApachekafka,
  SiRedis
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

type SkillsPageProps = {
  language: "fr" | "en";
};

function SkillsPage({ language }: SkillsPageProps) {
  const title = language === "fr" ? "Skills" : "Skills";
  const subtitle =
    language === "fr"
      ? "Domaines de competence et technologies utilisees"
      : "Skill domains and technologies I use";

  const iconMap: Record<string, IconType> = {
    code: FaCode,
    frontend: FaLaptopCode,
    backend: FaServer,
    devops: FaTools
  };

  const stackIconMap: Record<string, IconType> = {
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    Python: SiPython,
    Java: FaJava,
    PHP: SiPhp,
    React: SiReact,
    Angular: SiAngular,
    "Vue.js": SiVuedotjs,
    "Node.js": SiNodedotjs,
    Express: SiExpress,
    "Spring Boot": SiSpringboot,
    FastAPI: SiFastapi,
    Laravel: SiLaravel,
    Symfony: SiSymfony,
    Docker: SiDocker,
    Git: SiGit,
    Kafka: SiApachekafka,
    Redis: SiRedis
  };

  const stackColorMap: Record<string, string> = {
    JavaScript: "#f7df1e",
    TypeScript: "#3178c6",
    Python: "#3776ab",
    Java: "#f89820",
    PHP: "#777bb4",
    React: "#61dafb",
    Angular: "#dd0031",
    "Vue.js": "#42b883",
    "Node.js": "#339933",
    Express: "#111827",
    "Spring Boot": "#6db33f",
    FastAPI: "#009688",
    Laravel: "#ff2d20",
    Symfony: "#000000",
    Docker: "#2496ed",
    Git: "#f05032",
    Kafka: "#231f20",
    Redis: "#dc382d"
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <h2 className="glitch-title text-3xl font-bold sm:text-4xl" data-text={title}>
        {title}
      </h2>
      <p className="mt-4 text-base sm:text-lg">{subtitle}</p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillsMock.map((item, index) => (
          <article
            key={item.tech}
            className="app-card skill-card rounded-2xl p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1"
            style={{ animationDelay: `${0.08 * index}s` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-300 bg-white/80 text-lg">
                  {(() => {
                    const Icon = iconMap[item.icon] || FaCode;
                    return <Icon />;
                  })()}
                </div>
                <h3 className="text-xl font-semibold">{item.tech}</h3>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.stack?.map((tech) => (
                <span
                  key={`${item.tech}-${tech}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-xs font-semibold"
                >
                  {(() => {
                    const TechIcon = stackIconMap[tech];
                    const color = stackColorMap[tech] || "#374151";
                    return TechIcon ? <TechIcon className="text-sm" style={{ color }} aria-hidden="true" /> : null;
                  })()}
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-gray-200/80 bg-white/40 p-4">
              <p className="text-sm leading-relaxed sm:text-base">
                {language === "fr" ? item.fr : item.en}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;
