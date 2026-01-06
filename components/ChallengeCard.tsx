
import React from 'react';

interface ChallengeCardProps {
  title: string;
  content: string;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, content }) => {
  return (
    <div className="relative w-full group">
      <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-orange-500/50"></div>
      <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-orange-500/50"></div>
      
      <div className="bg-white/5 border border-white/5 p-8 rounded-sm backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300">
        <h4 className="text-orange-500 font-orbitron text-[10px] uppercase tracking-[0.5em] mb-6 font-bold">
          {title}
        </h4>
        <p className="text-gray-300 leading-relaxed font-light text-xl md:text-2xl font-jetbrains italic">
          "{content}"
        </p>
      </div>
    </div>
  );
};
