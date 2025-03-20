// import Navbar from "./component/Navbar";
// import Main from "./component/Main";
// import Skills from "./component/Skills";
// import Experience from "./component/Experience";
// import Projects from "./component/Projects";
// import Contact from "./component/Contact";

import Navbar from "./Component/Navbar";

import Main from "./Component/main";
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
