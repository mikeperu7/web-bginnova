"use client";

import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 px-6 py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-8 py-3 rounded-2xl border-white/5">
        {/* Logo Section - High Visibility */}
        <div className="flex items-center gap-4 group cursor-pointer relative isolation-isolate">
          <div className="transition-all flex items-center justify-center">
            <img 
              src="/bg_innova_isotipo_trans.png?v=3" 
              alt="BG Symbol" 
              className="h-10 md:h-11 w-auto brightness-110 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl md:text-2xl font-display font-black tracking-tighter text-white leading-none">
              BG <span className="text-brand-teal">iNNOVA</span>
            </span>
            <span className="text-[7px] tracking-[0.5em] uppercase font-bold text-slate-500 mt-1.5 border-t border-white/5 pt-1">
              ENGINEERING & CONSULTING
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest font-black text-slate-400">
          <a href="#inicio" className="hover:text-brand-teal transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-brand-teal transition-colors">Soluciones</a>
          <a href="#nosotros" className="hover:text-brand-teal transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-brand-teal transition-colors">Contacto</a>
          <button className="bg-white text-space-black px-7 py-2.5 rounded-lg font-black hover:bg-brand-teal transition-all active:scale-95 shadow-lg shadow-brand-teal/10">
            SOLICITAR CONSULTA
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 glass-card rounded-2xl p-8 flex flex-col gap-6 text-center shadow-2xl"
        >
          <a href="#inicio" className="text-lg font-bold text-white" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#servicios" className="text-lg font-bold text-white" onClick={() => setIsOpen(false)}>Soluciones</a>
          <a href="#nosotros" className="text-lg font-bold text-white" onClick={() => setIsOpen(false)}>Nosotros</a>
          <button className="bg-brand-teal text-space-black py-4 rounded-xl font-black uppercase tracking-wider">
            Solicitar Consulta
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
