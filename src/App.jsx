
import "./App.css";
import SideBar from "./components/main-display/side-bar/sidebar";
import MainDisplay from "./components/main-display/MainDisplay";
import { BrowserRouter, Router, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <SideBar/>
   <MainDisplay/>
    </div>
    </BrowserRouter>
  );
}

export default App;

