import React from "react";
import Navbar from "./Component/Navbar";
import Main from "./Component/Main";
import Skills from "./Component/Skills";
import Experience from "./Component/Experience";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";

function App() {
  return (
    <div className="w-[95vw] items-center m-auto">
      <Navbar />
      <div id="About"><Main /></div>
      <div id="Skills"><Skills /></div>
      <div id="Experience"><Experience /></div>
      <div id="Projects"><Projects /></div>
      <div id="Contact"><Contact /></div>
    </div>
  );
}

export default App;
