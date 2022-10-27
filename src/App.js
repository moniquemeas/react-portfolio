import './App.css';
import { React, useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';



function App() {

  const [activeSection, setActiveSection] = useState("about")

  const renderPage = () => {
    switch (activeSection) {
      case "projects":
        return <Projects />
        break;
      case "contact":
        return <Contact />
        break;
      case "resume":
        return <Resume />
        break;
      default:
        return <About />
        break;
    }
  }

  return (
    <div>
      <main>
        <Nav 
        activeSection={activeSection} setActiveSection={setActiveSection}
      />
        {renderPage()}
      </main>   
      <Footer />
    </div>
  )

}

export default App;
