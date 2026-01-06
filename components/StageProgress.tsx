
import React from 'react';

export const StageProgress: React.FC = () => {
  const stages = [
    { id: 1, label: 'STAGE 01', active: true },
    { id: 2, label: 'STAGE 02', active: false },
    { id: 3, label: 'STAGE 03', active: false },
    { id: 4, label: 'STAGE 04', active: false },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-orange-500/20 py-10 px-6 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-12">
        {stages.map((stage) => (
          <div key={stage.id} className="flex-1 flex flex-col gap-3">
            <div className={`text-[10px] font-orbitron font-black tracking-[0.2em] ${stage.active ? 'text-orange-500' : 'text-gray-700'}`}>
              {stage.label}
            </div>
            <div className={`h-2 w-full rounded-sm overflow-hidden border ${stage.active ? 'border-orange-500/30 bg-orange-500/10' : 'border-white/5 bg-gray-900/50'}`}>
              <div 
                className={`h-full transition-all duration-1000 ${stage.active ? 'bg-orange-500 w-full shadow-[0_0_15px_#f97316]' : 'w-0'}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <span className="text-[8px] font-mono text-gray-600 tracking-[0.8em] uppercase">
          MISSION PROGRESS MONITOR • SYSTEM ACTIVE
        </span>
      </div>
    </div>
  );
};
