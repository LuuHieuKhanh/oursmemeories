"use client";

import { motion } from "framer-motion";

export function SkyBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft Gradient */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-background via-baby-blue/40 to-sky-blue/20" />
      
      {/* Floating Sparkles */}
      <motion.div
        animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[15%] w-2 h-2 bg-white rounded-full blur-[1px]"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.5, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[25%] left-[85%] w-3 h-3 bg-white rounded-full blur-[2px]"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[40%] left-[30%] w-1.5 h-1.5 bg-white rounded-full blur-[1px]"
      />

      {/* Tiny Clouds (using soft radial gradients) */}
      <motion.div 
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[400px] h-[100px] bg-white/20 blur-[40px] rounded-[100%]"
      />
      <motion.div 
        animate={{ x: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[500px] h-[120px] bg-white/20 blur-[50px] rounded-[100%]"
      />

      {/* Paper Airplane */}
      <motion.div
        animate={{ x: [-100, 1200], y: [0, -50, 20, -30] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-[-100px] opacity-30 rotate-12"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2 11 13" />
          <path d="M22 2 15 22 11 13 2 9 22 2z" />
        </svg>
      </motion.div>
    </div>
  );
}
