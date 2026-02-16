import skillsMock from "../data/SkillsMock";
import { FaCode, FaLaptopCode, FaServer, FaTools } from "react-icons/fa";
import type { IconType } from "react-icons";

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
                  className="rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-xs font-semibold"
                >
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
