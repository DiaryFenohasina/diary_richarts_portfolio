type SkillsPageProps = {
  language: "fr" | "en";
};

const skills = [
  {
    tech: "React + TypeScript",
    fr: "Composants reutilisables, hooks, et architecture front claire.",
    en: "Reusable components, hooks, and clean frontend architecture."
  },
  {
    tech: "Node.js + Express",
    fr: "Creation d'API REST, gestion auth, et validation des donnees.",
    en: "Building REST APIs, auth flows, and data validation."
  },
  {
    tech: "PostgreSQL + Prisma",
    fr: "Modelisation relationnelle, migrations, et requetes performantes.",
    en: "Relational modeling, migrations, and performant queries."
  },
  {
    tech: "Tailwind CSS",
    fr: "Interfaces responsives, rapides a iterer, avec design system coherent.",
    en: "Responsive interfaces with fast iteration and consistent design systems."
  },
  {
    tech: "Testing",
    fr: "Tests unitaires/integration pour securiser les evolutions produit.",
    en: "Unit and integration tests to secure product evolution."
  },
  {
    tech: "DevOps Basics",
    fr: "CI/CD, build, deploiement et suivi des erreurs en production.",
    en: "CI/CD, build pipelines, deployment, and production monitoring."
  }
];

function SkillsPage({ language }: SkillsPageProps) {
  const title = language === "fr" ? "Skills" : "Skills";
  const subtitle = language === "fr"
    ? "Exemples de competences par techno"
    : "Skill examples by technology";

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base sm:text-lg">{subtitle}</p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((item, index) => (
          <article
            key={item.tech}
            className="app-card skill-card rounded-2xl p-6 shadow-sm"
            style={{ animationDelay: `${0.08 * index}s` }}
          >
            <h3 className="text-xl font-semibold">{item.tech}</h3>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">
              {language === "fr" ? item.fr : item.en}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;
