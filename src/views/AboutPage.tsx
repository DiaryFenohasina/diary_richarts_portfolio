type AboutPageProps = {
  language: "fr" | "en";
};

function AboutPage({ language }: AboutPageProps) {
  const copy = language === "fr"
    ? {
        title: "A propos",
        intro: "Je suis developpeur fullstack, axe produit, performance et qualite de code.",
        cards: [
          { title: "Vision Produit", text: "Je transforme un besoin metier en fonctionnalite utile, mesurable et maintenable." },
          { title: "Methodologie", text: "Je travaille en iterations courtes: analyse, prototype, feedback, amelioration continue." },
          { title: "Collaboration", text: "Je communique clairement avec les equipes design, produit et technique pour livrer vite et bien." }
        ]
      }
    : {
        title: "About",
        intro: "I am a fullstack developer focused on product quality, performance, and maintainable code.",
        cards: [
          { title: "Product Vision", text: "I turn business needs into useful, measurable, and maintainable features." },
          { title: "Method", text: "I work in short iterations: analysis, prototype, feedback, and continuous improvement." },
          { title: "Collaboration", text: "I communicate clearly with design, product, and engineering teams to ship faster." }
        ]
      };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <h2 className="text-3xl font-bold sm:text-4xl">{copy.title}</h2>
      <p className="mt-4 text-base sm:text-lg">{copy.intro}</p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {copy.cards.map((card) => (
          <article key={card.title} className="app-card rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">{card.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
