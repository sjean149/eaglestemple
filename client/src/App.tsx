import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Giving from "./pages/Giving";
import Sermons from "./pages/Sermons";
import About from "./pages/About";
import Login from "./pages/Login"; 
import Navs from "./components/NavBar";
import Hero from "./components/HeroSection";

function App(){
    return (
      <div>
        <Navs />
        <Hero />
      </div>
        
    )
        
}

export default App