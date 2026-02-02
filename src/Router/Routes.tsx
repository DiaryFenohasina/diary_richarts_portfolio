import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponents from "../components/HeaderComponents";
import All from "../views/All..tsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <HeaderComponents />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<All />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default AppRoutes;
