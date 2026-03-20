import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-space-black selection:bg-brand-teal/30">
      <Navbar />
      <Hero />
      
      {/* Trust Bar Section */}
      <section className="py-12 border-y border-white/5 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
          <span className="text-2xl font-black tracking-widest">MICROSOFT</span>
          <span className="text-2xl font-black tracking-widest">AWS</span>
          <span className="text-2xl font-black tracking-widest">ORACLE</span>
          <span className="text-2xl font-black tracking-widest">GOOGLE CLOUD</span>
        </div>
      </section>

      <Services />

      {/* About / Mission Section */}
      <section id="nosotros" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-teal/20 to-brand-sky/20 blur-2xl rounded-3xl group-hover:opacity-100 transition-opacity" />
            <div className="relative glass-card aspect-square rounded-3xl flex items-center justify-center p-12">
               <div className="text-center">
                  <div className="text-7xl font-black text-brand-teal mb-2">15+</div>
                  <div className="text-xs font-bold tracking-[0.3em] uppercase opacity-50">Años de Experticia Colectiva</div>
               </div>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold text-brand-sky tracking-[0.2em] mb-4 uppercase">Nuestra Misión</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
              IMPULSANDO EL <span className="text-gradient">ÉXITO</span> DE LAS STARTUPS
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              En BG Innova, entendemos que cada línea de código es un paso hacia el futuro de tu empresa. No solo brindamos servicios técnicos; construimos los cimientos de tu crecimiento digital con agilidad, precisión y una visión futurista.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-bold text-slate-200">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" /> 
                Escalabilidad garantizada desde el día 1
              </li>
              <li className="flex items-center gap-3 font-bold text-slate-200">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" /> 
                Arquitecturas modernas y seguras
              </li>
              <li className="flex items-center gap-3 font-bold text-slate-200">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" /> 
                Soporte evolutivo de clase mundial
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 blur-3xl -z-10" />
          <h2 className="text-4xl md:text-7xl font-display font-black mb-8">
            ¿LISTO PARA <br /> <span className="text-gradient">DESPEGAR?</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-12">
            Hablemos sobre tu próximo gran proyecto y cómo podemos hacerlo realidad con tecnología de vanguardia.
          </p>
          <button className="bg-gradient-to-r from-brand-teal to-brand-sky text-space-black px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform glow-teal">
            Empezar Proyecto
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
