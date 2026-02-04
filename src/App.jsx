import Navbar from "./components/Navbar.jsx";
import Projects from "./components/projects";
import HeroSection from "./components/heroSection";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
     <Navbar />
      <HeroSection />
      <Skills/>
      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-10 text-center">Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Projects />
          </div>
        </div>
      </section>
      <Contact/>
      <Footer/>
    </div>
  );
}
