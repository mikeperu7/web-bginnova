"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden nebula-bg">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-sky/10 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex items-center gap-5 mb-0">
             <img src="/bg_innova_isotipo_trans.png?v=3" alt="BG Symbol" className="h-20 w-auto brightness-110" />
             <span className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white">
               BG <span className="text-brand-teal">iNNOVA</span>
             </span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-10 leading-[0.9] text-white"
        >
          INGENIERÍA <br />
          <span className="text-gradient">SIN FRONTERAS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-14 font-medium leading-relaxed"
        >
          Transformamos la visión de su empresa en sistemas robustos y escalables. Consultoría especializada y desarrollo de software de alto impacto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button className="group relative bg-white text-space-black px-12 py-5 rounded-xl font-black text-lg transition-all hover:bg-brand-teal hover:scale-[1.02] active:scale-95 shadow-2xl shadow-brand-teal/20">
            AGENDAR CONSULTA
            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-12 py-5 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/5 text-white transition-colors">
            PORTAFOLIO
          </button>
        </motion.div>
      </div>

      {/* Hero Visual Detail (Optional, could be an image or SVG) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-gradient-to-t from-brand-teal/20 to-transparent blur-3xl -z-10"
      />
    </section>
  );
};

export default Hero;
