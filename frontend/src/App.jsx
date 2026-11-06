import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

function App() {
  const [modalKey, setModalKey] = useState(null);

  const projectDetails = {
    pet: {
      category: 'Short-Term Python Project',
      title: 'Pet Adoption Portal',
      overview: 'A web-based portal developed to connect prospective pet adopters with rescue listings. Built using Django\'s Model-View-Template (MVT) architecture with MySQL as the relational database backend.',
      points: [
        'Configured user authentication and session management for account sign-in and registration.',
        'Engineered dynamic forms for listing pets, including secure image uploads and descriptive metadata.',
        'Implemented user-side adoption request submission workflows connecting users with pet records.',
        'Styled clean, responsive UI layouts with Bootstrap and custom CSS for mobile and desktop screens.'
      ],
      tech: 'Backend: Python, Django | Database: MySQL | Frontend: HTML, CSS, Bootstrap'
    },
    iot: {
      category: 'Academic Project',
      title: 'Automatic Passenger Bridge Using IoT',
      overview: 'An IoT-enabled automated railway passenger footbridge safety system built using Arduino microcontroller and integrated sensors to provide reliable, synchronized bridge movement and status alerts.',
      points: [
        'Sensor integration to monitor passenger foot traffic and approaching train proximity.',
        'Automated motorized bridge operation logic programmed in C / embedded Arduino code.',
        'Integrated display panel alerting pedestrians about bridge movement status and train passage.',
        'Rigorous circuit troubleshooting, pin assignments, signal verification, and embedded testing.'
      ],
      tech: 'Hardware: Arduino Board, Detection Sensors, Servo/Motor Actuators, Display Module | Software: Embedded C / Arduino IDE'
    }
  };

  const handleOpenModal = (key) => {
    setModalKey(key);
  };

  const handleCloseModal = () => {
    setModalKey(null);
  };

  return (
    <div className="portfolio-app">
      {/* Subtle ambient glow elements */}
      <div className="ambient-glow ambient-glow-1"></div>
      <div className="ambient-glow ambient-glow-2"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects onOpenModal={handleOpenModal} />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Architecture Modal */}
      <ProjectModal
        modalData={modalKey ? projectDetails[modalKey] : null}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
