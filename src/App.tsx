// import './App.css'
import HomeViews from "./views/HomeViews"
import SectionHorizontal from "./views/About"
import Glitch from "./views/Glitch"
import HeaderComponents from "./components/HeaderComponents"

function App() {
  return (
    <div className="bg-white relative min-h-screen w-screen overflow-hidden">
      <HeaderComponents />
      <HomeViews />
      {/* <SectionHorizontal /> */}
      {/* <Glitch words={["Glitch", "Effect"]} /> */}
    </div>
  )
}

export default App
