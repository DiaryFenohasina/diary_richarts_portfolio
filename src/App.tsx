import { useEffect, useState } from "react";
import AppRoutes from "./Router/Routes"
import './App.css'

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  const [language, setLanguage] = useState<"fr" | "en">(() => {
    const saved = localStorage.getItem("language");
    return saved === "en" ? "en" : "fr";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <AppRoutes
      theme={theme}
      language={language}
      onToggleTheme={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
      onToggleLanguage={() => setLanguage((prev) => (prev === "fr" ? "en" : "fr"))}
    />
  )
}

export default App
