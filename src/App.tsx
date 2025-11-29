import './App.css'
import HomeViews from "./views/HomeViews"
import ProjectViews from "./views/ProjetcViews"
import HeaderComponents from "./components/HeaderComponents"

function App() {
  return (
    <div className="bg-white">
      <HeaderComponents />
      <ProjectViews />
      {/* <HomeViews /> */}
    </div>
  )
}

export default App
