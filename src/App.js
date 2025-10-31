// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ProjectDetail1 from "./pages/ProjectDetail1";
import ProjectDetail2 from "./pages/ProjectDetail2";
import ProjectDetail3 from "./pages/ProjectDetail3";
import ProjectDetail4 from "./pages/ProjectDetail4";

function App() {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/project/");

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/Portfolio"
          element={
            <>
              <Landing />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/project" element={<Projects />} />
        <Route path="/project/it-assets-form" element={<ProjectDetail1 />} />
        <Route path="/project/room-booking-management" element={<ProjectDetail2 />} />
        <Route path="/project/gatepass-management" element={<ProjectDetail3 />} />
        <Route path="/project/spotify-clone" element={<ProjectDetail4 />} />
      </Routes>

      {!isProjectDetail && <footer>© 2025 Mohit.dev</footer>}
    </div>
  );
}

export default App;
