
import React from 'react';
import { Header } from './components/Header';
import { LevelIndicator } from './components/LevelIndicator';
import { ChallengeCard } from './components/ChallengeCard';
import { DigitalScroll } from './components/DigitalScroll';
import { StageProgress } from './components/StageProgress';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center pb-48">
      {/* Header is part of the flow, not fixed */}
      <Header />
      
      <main className="w-full max-w-7xl mt-8 px-6 flex flex-col lg:grid lg:grid-cols-12 gap-12 animate-in fade-in duration-1000">
        
        {/* Left Side: Question and Briefing */}
        <div className="lg:col-span-5 flex flex-col space-y-10">
          <LevelIndicator level="1.1" title="The Hex Adventure" />
          
          <ChallengeCard 
            title="CHALLENGE BRIEF"
            content="You have discovered two digital scrolls, each containing a hexadecimal value. These scrolls hold the key to unlocking your next location. Your task is to decode the scrolls, perform a calculation, and determine where to go next."
          />
        </div>

        {/* Right Side: Visual Analysis Panel (The Scrolls) */}
        <div className="lg:col-span-7 bg-[#0f0f0f] border border-white/5 p-8 rounded-sm shadow-2xl space-y-10 relative overflow-hidden h-fit">
          {/* Subtle Robot Accents */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -mr-12 -mt-12 blur-3xl"></div>
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-orange-500 font-orbitron text-[11px] font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Core Signal Analysis
            </h3>
            <span className="text-gray-600 text-[9px] font-mono uppercase tracking-[0.2em]">Live Stream</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-4">
            {/* Added decimalValue to satisfy component requirements */}
            <DigitalScroll 
              id="SCROLL_A" 
              hexValue="0x33" 
              decimalValue={51}
              percentage={51} 
            />
            {/* Added decimalValue to satisfy component requirements */}
            <DigitalScroll 
              id="SCROLL_B" 
              hexValue="0x37" 
              decimalValue={55}
              percentage={55} 
            />
          </div>

          <div className="h-1 bg-gray-900 w-full overflow-hidden rounded-full mt-4">
            <div className="h-full bg-orange-500/30 w-full animate-[shimmer_3s_infinite]"></div>
          </div>
        </div>
      </main>

      {/* Persistent Bottom Progress */}
      <StageProgress />
    </div>
  );
};

export default App;