import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Layouts/Home";
import About from "./Layouts/About";
import Menu from "./Components/Menu";
import Vans from "./Layouts/Vans";
import VanDetail from "./Layouts/VanDetail";

import './data/server'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
