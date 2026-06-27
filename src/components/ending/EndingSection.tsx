"use client";

import { motion } from "framer-motion";

export function EndingSection() {
  return (
    <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 bg-[#FAF7F2] flex flex-col items-center justify-center overflow-hidden">
      
      <div className="w-full max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        
        {/* Group Photo Polaroid */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02, rotate: 0 }}
          className="w-full max-w-[400px] md:max-w-[500px] bg-white p-4 pb-12 md:p-5 md:pb-16 rounded-[2px] shadow-2xl border border-black/5 mb-12 relative cursor-pointer"
        >
          {/* Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/50 backdrop-blur-md shadow-sm rotate-2 border border-black/5 mix-blend-multiply opacity-80" />
          
          <div className="w-full aspect-[4/3] bg-background-secondary border border-black/5 flex items-center justify-center overflow-hidden">
             {/* Placeholder for group photo */}
             <div className="flex flex-col items-center text-caption opacity-40">
               <span className="text-4xl mb-3">📸</span>
               <span className="text-xs uppercase tracking-widest font-medium">Group Photo</span>
             </div>
          </div>
          <p className="font-handwriting text-3xl md:text-4xl text-primary mt-6">Forever 5!</p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-primary leading-tight md:leading-relaxed max-w-3xl mx-auto">
            "We didn't realize we were making memories, <br className="hidden md:block" />
            we just knew we were having fun."
          </h2>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-8 text-center text-secondary/50 text-xs font-medium">
        <p>© 2026 Digital Graduation Album. Designed for memories.</p>
      </footer>
    </section>
  );
}
