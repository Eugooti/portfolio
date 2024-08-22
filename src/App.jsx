import './App.css'
import HeroSection from "./components/heroSection.jsx";
import TechStack from "./components/Stack.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Contact from "./components/contact.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/footer.jsx";

function App() {

  return (
    <div>
        <HeroSection/>
        <TechStack/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
