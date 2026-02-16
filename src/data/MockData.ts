export type AboutSection = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
  bg: string;
};

const SECTIONS: AboutSection[] = [
  {
    id: 1,
    title: "Vision Produit",
    subtitle: "Produit",
    description:
      "Je transforme un besoin metier en fonctionnalite utile, mesurable et maintenable.",
    image: "/img/background/ia.jpg",
    accent: "text-cyan-300",
    bg: "bg-black",
  },
  {
    id: 2,
    title: "Methodologie",
    subtitle: "Execution",
    description:
      "Je travaille en iterations courtes: analyse, prototype, feedback, amelioration continue.",
    image: "/img/background/woman3.jpeg",
    accent: "text-emerald-300",
    bg: "bg-zinc-900",
  },
  {
    id: 3,
    title: "Collaboration",
    subtitle: "Equipe",
    description:
      "Je communique clairement avec les equipes design, produit et technique pour livrer vite et bien.",
    image: "/img/background/ia3.jpg",
    accent: "text-amber-300",
    bg: "bg-neutral-900",
  },
];

export default SECTIONS;
