// import './App.css'
import HomeViews from "./views/HomeViews"
import ProjectViews from "./views/ProjetcViews"
import SectionHorizontal from "./views/About"
import Glitch from "./views/Glitch"
import Story from "./views/Story"
import HeaderComponents from "./components/HeaderComponents"

function App() {
  return (
    <div className="bg-white relative min-h-screen w-screen overflow-hidden">
      <HeaderComponents />
      {/* <ProjectViews /> */}
      <HomeViews />
      <SectionHorizontal />
      {/* <Story /> */}
      <Glitch words={["Glitch", "Effect"]} />
    </div>
  )
}

export default App
