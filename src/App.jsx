import Navbar from "./Component/Navbar";
import Main from "./Component/main";
import Skills from "./Component/Skills";
import Experience from "./Component/Experience";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Certificate from "./Component/Certificate";

function App() {
  return (
    <div className="w-[95vw] items-center m-auto">
      <Navbar />
      <div id="about">
        <Main />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="certificate">
        <Certificate />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;