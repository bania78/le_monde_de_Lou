import "./styles/App.css"
import Nav from "./components/Nav/Nav"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App

