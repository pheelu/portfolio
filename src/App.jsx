import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Projects from './components/Projects';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';
import NavigatorBar from './components/NavigatorBar';

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-950 bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="sm:px-20 lg:px-32">
        <NavigatorBar />
        <Hero />
        <About />
        {/*<Technologies />*/}
        <Education />
        <Projects />
        <SoftSkills />
        <Contact />
      </div>
    </div>
  );
};

export default App;
