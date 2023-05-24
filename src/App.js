import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";





function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <HomeDummy /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="about-me" element={<About/>} /> */}
        <Route path="projects" element={<Project/>} />
        <Route path="contact" element={<Contact/>} />
        {/* <Route path="resume" element={<Resume/>} /> */}
        <Route path="skills" element={<Skills/>} />
      </Routes>
    
    </>
  );
}

export default App;
