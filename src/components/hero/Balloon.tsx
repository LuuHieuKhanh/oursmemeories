"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface BalloonProps {
  name: string;
  imageSrc?: string;
  accentColor: string;
  textColor?: string;
  delay: number;
  namePos?: { top?: string; bottom?: string; left?: string; right?: string };
  onEdit?: () => void;
}

export function Balloon({ name, imageSrc, accentColor, textColor, delay, namePos, onEdit }: BalloonProps) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
      className="relative flex flex-col items-center mt-12 md:mt-0"
    >
      {/* Balloon String (Hidden on mobile where rope doesn't exist) */}
      <div className="absolute -top-16 w-[1px] h-16 bg-gradient-to-b from-caption/40 to-transparent hidden md:block" />
      
      {/* Balloon Body */}
      <div 
        className="relative w-24 h-[105px] sm:w-28 sm:h-[120px] md:w-32 md:h-[135px] lg:w-40 lg:h-[170px] shrink-0 rounded-[50%] bg-white/20 backdrop-blur-[2px] shadow-lg flex items-center justify-center transition-colors border-2"
        style={{ borderColor: accentColor }}
      >
        {/* Soft highlight reflection */}
        <div className="absolute top-2 left-4 w-6 h-14 bg-white/40 rounded-[50%] blur-[4px] rotate-[-25deg]" />
        
        {/* Portrait Container */}
        <div 
          onClick={onEdit}
          className="group w-[82%] h-[82%] rounded-full bg-secondary/10 border-2 border-white overflow-hidden flex items-center justify-center shadow-inner cursor-pointer relative"
        >
          {imageSrc ? (
            <>
              <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Plus size={24} className="text-white drop-shadow-md" />
              </div>
            </>
          ) : (
            <>
              <span className="text-white/60 text-xs font-medium tracking-wider group-hover:opacity-0 transition-opacity">Photo</span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus size={28} strokeWidth={3} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Floating Name */}
      <motion.div
        animate={{ y: [0, -4, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }}
        className="absolute whitespace-nowrap font-handwriting text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold z-20 pointer-events-none drop-shadow-sm"
        style={{ ...namePos, color: textColor || accentColor }}
      >
        {name}
        {/* Tiny Doodle */}
        <span className="absolute -top-3 -right-4 text-[12px] opacity-60">✨</span>
      </motion.div>
    </motion.div>
  );
}
