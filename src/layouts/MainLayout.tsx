import { Outlet } from "react-router-dom";
import HeaderComponents from "../components/HeaderComponents";

function MainLayout() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <HeaderComponents />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
