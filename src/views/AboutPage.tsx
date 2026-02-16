import aboutMock from "../data/AboutMock";

type AboutPageProps = {
  language: "fr" | "en";
};

function AboutPage({ language }: AboutPageProps) {
  const copy = language === "fr" ? aboutMock.fr : aboutMock.en;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <h2 className="glitch-title text-3xl font-bold sm:text-4xl" data-text={copy.title}>
        {copy.title}
      </h2>
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
