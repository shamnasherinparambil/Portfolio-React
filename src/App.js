import React from "react";
import "./index.css"
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Projects" element={<Projects />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Contact" element={<Contact />}/>
    </Routes>
    </>
  );
}

export default App;
