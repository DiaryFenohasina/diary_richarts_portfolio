import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponents from "../components/HeaderComponents";
import All from "../views/All..tsx";

type AppRoutesProps = {
  theme: "light" | "dark";
  language: "fr" | "en";
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
};

function AppRoutes({ theme, language, onToggleTheme, onToggleLanguage }: AppRoutesProps) {
  return (
    <BrowserRouter>
      <HeaderComponents
        theme={theme}
        language={language}
        onToggleTheme={onToggleTheme}
        onToggleLanguage={onToggleLanguage}
      />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<All language={language} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default AppRoutes;
