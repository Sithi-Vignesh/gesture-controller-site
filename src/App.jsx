import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import StatsStrip from './components/StatsStrip';
import Demo from './components/Demo';
import GestureReference from './components/GestureReference';
import SetupGuide from './components/SetupGuide';
import Roadmap from './components/Roadmap';
import CTAFooter from './components/CTAFooter';
import CustomCursor from './effects/CustomCursor';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-brand-black text-brand-white selection:bg-brand-yellow selection:text-brand-black overflow-x-hidden">
      <CustomCursor />
      
      <Navbar />
      
      <main>
        <Hero />
        <ProblemSolution />
        <StatsStrip />
        <Demo />
        <GestureReference />
        <SetupGuide />
        <Roadmap />
      </main>

      <CTAFooter />
    </div>
  );
}

export default App;
