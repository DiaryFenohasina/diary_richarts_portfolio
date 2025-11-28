import './App.css'
import HomeViews from "./views/HomeViews"
import HeaderComponents from "./components/HeaderComponents"

function App() {
  return (
    <div className="bg-white">
      <HeaderComponents />
      <HomeViews />
    </div>
  )
}

export default App
