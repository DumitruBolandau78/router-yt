import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Layouts/Home";
import About from "./Layouts/About";
import Menu from "./Components/Menu";
import Vans from "./Layouts/Vans";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
