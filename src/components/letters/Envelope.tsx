"use client";

import { motion } from "framer-motion";
import { FriendData } from "@/lib/queries";

interface EnvelopeProps {
  friend: FriendData;
  onClick: () => void;
  rotation: number;
}

export function Envelope({ friend, onClick, rotation }: EnvelopeProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      onClick={onClick}
      className="relative w-[280px] h-[180px] cursor-pointer drop-shadow-md hover:drop-shadow-xl transition-shadow duration-300 group"
      style={{ rotate: rotation }}
    >
      {/* Envelope Back (Inside) - White/Cream */}
      <div className="absolute inset-0 bg-[#F4EBE1] rounded-[4px] border border-black/5 overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100\\' height=\\'100\\' filter=\\'url(%23noise)\\' opacity=\\'0.5\\'/%3E%3C/svg%3E')"
        }} />
        
        {/* The letter peaking out inside */}
        <div className="absolute top-2 left-4 right-4 h-16 bg-white rounded-t-sm border border-black/5 shadow-sm" />
      </div>

      {/* Envelope Flap (Top) */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[100px] origin-top z-20 pointer-events-none drop-shadow-sm"
        variants={{
          rest: { rotateX: 0 },
          hover: { rotateX: 160 }
        }}
        initial="rest"
        whileHover="hover"
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: 1200 }}
      >
        <div className="w-full h-full bg-[#EADDCE]" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}>
           {/* Texture */}
           <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100\\' height=\\'100\\' filter=\\'url(%23noise)\\' opacity=\\'0.5\\'/%3E%3C/svg%3E')"
            }} />
        </div>
      </motion.div>

      {/* Envelope Front (Bottom part) */}
      <div className="absolute bottom-0 left-0 w-full h-full z-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-[120px] bg-[#E8D9C8] rounded-b-[4px]" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 50% 50%, 0 0)" }}>
          {/* Texture */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100\\' height=\\'100\\' filter=\\'url(%23noise)\\' opacity=\\'0.5\\'/%3E%3C/svg%3E')"
          }} />
        </div>
      </div>

      {/* Wax Seal & Recipient Label */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center pointer-events-none">
        {/* Wax Seal */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 border border-black/10 shadow-sm group-hover:shadow-md transition-shadow" style={{ backgroundColor: friend.accentColor }}>
          <span className="text-white font-serif text-lg opacity-90">{friend.name.charAt(0)}</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent group-hover:from-white/40 transition-colors" />
        </div>
        
        {/* Recipient Label */}
        <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-[2px] shadow-sm border border-black/5 rotate-[-3deg] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-background-secondary border border-divider overflow-hidden flex items-center justify-center shrink-0">
            {friend.imageSrc ? (
              <img src={friend.imageSrc} alt="" className="w-full h-full object-cover" />
            ) : (
              <span className="text-[8px] uppercase text-caption">Pic</span>
            )}
          </div>
          <span className="font-handwriting text-primary text-[22px] leading-none pr-1">{friend.name}</span>
        </div>
      </div>
    </motion.div>
  );
}
