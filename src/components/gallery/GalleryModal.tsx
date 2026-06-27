"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useData } from "@/lib/DataProvider";

interface Props {
  photoIndex: number | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function GalleryModal({ photoIndex, isOpen, onClose, onNavigate }: Props) {
  const { gallery } = useData();
  const photo = photoIndex !== null ? gallery[photoIndex] : null;

  // Listen to keyboard for navigation
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onNavigate(photoIndex !== null && photoIndex > 0 ? photoIndex - 1 : gallery.length - 1);
      } else if (e.key === "ArrowRight") {
        onNavigate(photoIndex !== null && photoIndex < gallery.length - 1 ? photoIndex + 1 : 0);
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, photoIndex, gallery.length, onNavigate, onClose]);


  return (
    <AnimatePresence>
      {isOpen && photo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 lg:p-10">
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/90"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[1400px] h-full md:h-[90vh] bg-background flex flex-col lg:flex-row md:rounded-[24px] overflow-hidden z-10 shadow-2xl"
          >
            {/* Close Button Mobile */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors z-20 lg:hidden backdrop-blur-md"
            >
              <X size={20} />
            </button>

            {/* LEFT: PHOTO (70%) */}
            <div className="w-full lg:w-[65%] xl:w-[70%] h-[40vh] lg:h-full bg-black flex items-center justify-center relative group">
              {photo.url ? (
                <img src={photo.url} alt={photo.title} className="w-full h-full object-contain" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-white/50 border border-white/10 m-4 rounded-xl bg-white/5">
                   <span className="text-4xl opacity-50 mb-4">📷</span>
                   <span className="text-xs uppercase tracking-widest">{photo.category} placeholder</span>
                </div>
              )}
              
              {/* Navigation Arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); onNavigate(photoIndex !== null && photoIndex > 0 ? photoIndex - 1 : gallery.length - 1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-md"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onNavigate(photoIndex !== null && photoIndex < gallery.length - 1 ? photoIndex + 1 : 0); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-md"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* RIGHT: INFO & COMMENTS (30%) */}
            <div className="w-full lg:w-[35%] xl:w-[30%] h-[60vh] lg:h-full bg-white flex flex-col overflow-hidden relative">
              <button 
                onClick={onClose}
                className="hidden lg:flex absolute top-6 right-6 p-2 rounded-full text-caption hover:bg-black/5 transition-colors z-20"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
              <div className="flex-1 p-6 lg:p-10 pt-8 lg:pt-12 flex flex-col justify-center">
                {/* Header Info */}
                <div className="pb-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-background-secondary text-[10px] uppercase tracking-widest text-caption font-medium mb-4">
                    {photo.category}
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">{photo.title}</h3>
                  <p className="text-secondary/90 leading-relaxed mb-6">{photo.description}</p>
                  <div className="flex items-center gap-2 text-xs text-caption">
                    <span>Uploaded by <strong>{photo.uploader}</strong></span>
                    <span>•</span>
                    <span>{photo.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
