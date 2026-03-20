"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Briefcase, ShieldCheck, Cpu } from "lucide-react";

const services = [
  {
    icon: <Cpu className="w-8 h-8 text-brand-teal" />,
    title: "Ingeniería de Software",
    description: "Desarrollo de ecosistemas digitales escalables y sistemas ERP/CRM personalizados de alta criticidad.",
    size: "col-span-1 md:col-span-2"
  },
  {
    icon: <Briefcase className="w-8 h-8 text-brand-sky" />,
    title: "Consultoría IT",
    description: "Diagnóstico estratégico y roadmap de transformación digital para empresas e instituciones.",
    size: "col-span-1"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-teal" />,
    title: "Infraestructura & Seguridad",
    description: "Auditamos y protegemos su operación con estándares internacionales de ciberseguridad.",
    size: "col-span-1"
  },
  {
    icon: <Code2 className="w-8 h-8 text-brand-sky" />,
    title: "Soporte Especializado",
    description: "Mantenimiento preventivo y soporte técnico 24/7 para garantizar la continuidad del negocio.",
    size: "col-span-1 md:col-span-2"
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-40 px-6 bg-slate-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-teal/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black text-brand-teal tracking-[0.3em] uppercase mb-6"
          >
            Nuestras Capacidades
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black leading-tight"
          >
            SOLUCIONES DE <br />
            <span className="text-gradient">ALTO IMPACTO</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${service.size} glass-card p-12 rounded-[2.5rem] group hover:border-brand-teal/30 transition-all duration-500 cursor-default flex flex-col justify-between min-h-[320px]`}
            >
              <div>
                <div className="mb-8 p-5 rounded-2xl bg-white/5 inline-block group-hover:bg-brand-teal group-hover:text-black transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-brand-teal transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
