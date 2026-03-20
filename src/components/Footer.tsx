"use client";

import React from "react";
import NextImage from "next/image";
import { Instagram, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-16 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal via-white/20 to-brand-sky opacity-20" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-4 mb-10 isolation-isolate">
            <img 
              src="/bg_innova_isotipo_trans.png?v=3" 
              alt="BG Symbol" 
              className="h-10 w-auto brightness-110"
            />
            <span className="text-2xl font-display font-black tracking-tighter text-white">
              BG <span className="text-brand-teal">iNNOVA</span>
            </span>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
            Ingeniería de software y consultoría estratégica para el sector logístico e industrial.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-brand-teal hover:text-black transition-all"><Instagram size={20} /></a>
            <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-brand-teal hover:text-black transition-all"><Linkedin size={20} /></a>
            <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-brand-teal hover:text-black transition-all"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Links 1 */}
        <div>
          <h5 className="font-black text-xs tracking-widest uppercase mb-8 text-white">Soluciones</h5>
          <ul className="space-y-4 text-slate-400 font-bold">
            <li><a href="#" className="hover:text-brand-teal transition-colors">Sistemas ERP / TMS</a></li>
            <li><a href="#" className="hover:text-brand-teal transition-colors">Ingeniería de Software</a></li>
            <li><a href="#" className="hover:text-brand-teal transition-colors">Ciberseguridad</a></li>
            <li><a href="#" className="hover:text-brand-teal transition-colors">Infraestructura Crítica</a></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h5 className="font-black text-xs tracking-widest uppercase mb-8 text-white">Compañía</h5>
          <ul className="space-y-4 text-slate-400 font-bold">
             <li><a href="#" className="hover:text-brand-teal transition-colors">Nuestra Visión</a></li>
             <li><a href="#" className="hover:text-brand-teal transition-colors">Casos de Éxito</a></li>
             <li><a href="#" className="hover:text-brand-teal transition-colors">Blog Tech</a></li>
             <li><a href="#" className="hover:text-brand-teal transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h5 className="font-black text-xs tracking-widest uppercase mb-8 text-white">Presencia Regional</h5>
          <ul className="space-y-4 text-slate-400 font-bold">
            <li className="flex items-start gap-3"><Mail size={18} className="text-brand-teal mt-1" /> info@bginnova.pe</li>
            <li className="flex items-start gap-3"><MapPin size={18} className="text-brand-teal mt-1" /> Av. Javier Prado Este, <br />San Borja, Lima, Perú</li>
          </ul>
          <div className="mt-10">
             <button className="w-full bg-white text-black py-4 rounded-xl hover:bg-brand-teal transition-all font-black uppercase tracking-wider shadow-lg shadow-brand-teal/5">
               SOLICITAR CONSULTA
             </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-500 font-black tracking-[0.3em] uppercase">
          © 2026 BG INNOVA. TODOS LOS DERECHOS RESERVADOS.
        </div>
        <div className="flex gap-8 text-[10px] text-slate-500 font-black tracking-widest uppercase">
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
