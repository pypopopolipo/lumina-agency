import React from 'react';

export const TechBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#1c1c1e]">
      {/* Very subtle cyan glow - top left */}
      <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] rounded-full bg-[#00d4ff]/5 blur-[150px]" />

      {/* Very subtle purple glow - bottom right */}
      <div className="absolute bottom-[-15%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#a855f7]/4 blur-[140px]" />
    </div>
  );
};
