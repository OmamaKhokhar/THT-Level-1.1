
import React from 'react';

interface LevelIndicatorProps {
  level: string;
  title: string;
}

export const LevelIndicator: React.FC<LevelIndicatorProps> = ({ level, title }) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <div className="bg-orange-600 text-black font-orbitron font-black px-6 py-2 text-xl skew-x-[-15deg] shadow-[4px_4px_0px_#ffffff]">
        LEVEL {level}
      </div>
      <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider">
        {title}
      </h2>
      <div className="flex gap-2">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 w-12 rounded-full ${i === 0 ? 'bg-orange-500 shadow-[0_0_8px_#f97316]' : 'bg-gray-800'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
