import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./sections/Footer";
import Project from "./pages/Project";
import Skills from "./sections/Skill";
import About from "./sections/About";
import Experience from "./sections/Experience";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
    
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/skill" element={<Skills/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/experience" element={<Experience/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;