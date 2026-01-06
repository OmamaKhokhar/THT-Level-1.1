
import React, { useEffect, useState } from 'react';

interface DigitalScrollProps {
  id: string;
  hexValue: string;
  decimalValue: number;
  percentage: number;
}

export const DigitalScroll: React.FC<DigitalScrollProps> = ({ id, hexValue, decimalValue, percentage }) => {
  const [currentHeight, setCurrentHeight] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCurrentHeight(percentage), 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="flex flex-col items-center gap-6 group">
      <div className="text-center w-full">
        <span className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.3em] block mb-1">
          SCROLL_ID
        </span>
        <span className="text-white font-orbitron text-xs font-bold bg-white/5 px-4 py-1 border border-white/10 block group-hover:border-orange-500/50 transition-colors">
          {id}
        </span>
      </div>

      <div className="relative h-72 w-20 bg-black border-x-4 border-gray-900 flex flex-col justify-between overflow-hidden shadow-2xl">
        <div className="h-4 bg-gray-900 w-full z-20 border-b border-white/5"></div>
        
        <div className="flex-1 relative flex flex-col justify-end bg-gradient-to-b from-gray-900/20 to-black">
          <div className="absolute inset-0 z-10 flex flex-col justify-around py-4 pointer-events-none opacity-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full h-px bg-white/20"></div>
            ))}
          </div>
          
          <div 
            className="liquid-wave w-full z-0 relative"
            style={{ height: `${currentHeight}%` }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/40"></div>
          </div>
        </div>

        <div className="h-4 bg-gray-900 w-full z-20 border-t border-white/5"></div>
        <div className="absolute inset-y-0 right-2 w-1.5 bg-white/5 z-30 pointer-events-none"></div>
      </div>

      <div className="text-center">
        <div className="text-4xl font-orbitron font-black text-white group-hover:text-orange-500 transition-colors">
          {hexValue}
        </div>
       
      </div>
    </div>
  );
};