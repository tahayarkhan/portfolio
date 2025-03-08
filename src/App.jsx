import React from 'react';
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SpaceParticles from './components/SpaceParticles';
import bird from './assets/bird.gif';
import cloud1 from './assets/cloud1.png';


const Cloud = ({ id }) => {
  const cloudStyles = {
    top: `${Math.random() * 10}%`, // Changed from 15% to 10% for even higher positioning
    animationDuration: `${25 + (id % 2) * 10}s`, // Two speeds: 25s or 35s
    animationDelay: `${id * 8}s`, // Longer delays between clouds: 0s, 8s, 16s, 24s
  };

  return (
    <div className="cloud-container animate-cloud" style={cloudStyles}>
      {/* Cloud Image */}
      <img
        src={cloud1}
        className="cloud"
        key={id}
        alt="Cloud"
      />
    </div>
  );
};

const App = () => {
  const [showParticles, setShowParticles] = React.useState(false);
  const [showBird, setShowBird] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const bg = document.getElementById('dynamic-bg');
      const spaceBg = document.getElementById('space-bg');
      const scrollPosition = window.scrollY;
      const opacity = Math.max(0, 1 - (scrollPosition / 500));
      if (bg) bg.style.opacity = opacity;
      if (spaceBg) spaceBg.style.opacity = 1 - opacity;
      
      // Show particles when sky is completely faded
      setShowParticles(opacity < 0.1);
      // Hide bird when transitioning to space
      setShowBird(opacity > 0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-full overflow-y-auto antialiased">
      {/* Space background (always visible) */}
      <div className="fixed inset-0 space-bg" id="space-bg"></div>
      
      {/* Particles effect */}
      {showParticles && <SpaceParticles />}
     
      {/* Gradient background (fades out on scroll) */}
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img h-screen" id="dynamic-bg"></div>

      {/* Single Bird in the middle - only shown in sky section */}
      {showBird && (
        <div 
          className="fixed w-full pointer-events-none"
          style={{ 
            top: '0',
            height: '100vh',
            zIndex: 10 
          }}
        >
          <img
            src={bird}
            className="bird animate-bird"
            alt="Bird"
            style={{ top: '15%' }}
          />
        </div>
      )}

      {/* Cloud Animation */}
      <div className="absolute top-10 left-0 w-full h-screen overflow-hidden pointer-events-none">
        {Array.from({ length: 4 }).map((_, i) => (
          <Cloud key={i} id={i} />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        <WorkExperience />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default App;

