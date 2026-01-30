import React from 'react';
import { BookOpen, Users, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img 
              src="https://picsum.photos/800/600?random=4" 
              alt="Office meeting" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Sobre a InovaTech</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Somos um portal independente dedicado à democratização do conhecimento sobre tecnologia financeira. Nossa missão é descomplicar termos técnicos e apresentar inovações que moldam o futuro da economia.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Acreditamos que a educação é a melhor ferramenta para a segurança digital. Por isso, nosso conteúdo é focado exclusivamente em teoria, análise de mercado e boas práticas de segurança, sem promessas de enriquecimento ou viés comercial.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <BookOpen className="text-brand-600 mb-2 h-8 w-8" />
                <span className="font-semibold text-slate-800">Educação</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Shield className="text-brand-600 mb-2 h-8 w-8" />
                <span className="font-semibold text-slate-800">Segurança</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Users className="text-brand-600 mb-2 h-8 w-8" />
                <span className="font-semibold text-slate-800">Comunidade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;