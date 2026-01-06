
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-12 flex flex-col items-center justify-center space-y-2 border-b border-orange-500/10">
      <h1 className="text-4xl md:text-6xl font-orbitron font-black tracking-[0.2em] text-white text-center">
        DUETECH'25
      </h1>
      <div className="flex items-center gap-4">
        <div className="h-px w-8 bg-orange-500/50"></div>
        <p className="text-xs md:text-sm text-orange-500 font-orbitron font-bold uppercase tracking-[0.4em]">
          Technical Treasure Hunt
        </p>
        <div className="h-px w-8 bg-orange-500/50"></div>
      </div>
    </header>
  );
};
