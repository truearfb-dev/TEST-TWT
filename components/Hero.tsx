import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:w-2/3">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-900/50 border border-brand-500/30 text-brand-300 text-sm font-semibold mb-6">
            Educação & Tecnologia
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            O Futuro da <span className="text-brand-400">Economia Digital</span> no Brasil
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
            Entenda como a tecnologia está transformando o setor financeiro. 
            Conteúdo educativo e imparcial sobre blockchain, segurança de dados e inovação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#artigos" 
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-lg"
            >
              Ler Artigos
            </a>
            <a 
              href="#sobre" 
              className="inline-flex justify-center items-center px-6 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-200 hover:bg-slate-800 transition-colors"
            >
              Sobre Nós
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;