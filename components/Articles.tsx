import React from 'react';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const Articles: React.FC = () => {
  return (
    <section id="artigos" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Últimas Análises</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Aprofunde seus conhecimentos com nossos materiais educativos sobre as tendências do mercado tecnológico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Article 1 */}
          <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://picsum.photos/600/400?random=1" 
                alt="Blockchain illustration" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Tag size={14} className="text-brand-600" />
                <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">Tecnologia</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                O que é Blockchain e como ele funciona?
              </h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-1">
                Frequentemente associada apenas a criptomoedas, a tecnologia Blockchain é, na verdade, um livro-razão digital descentralizado. Ela permite registros imutáveis e transparentes, revolucionando setores como logística, saúde e cartórios, garantindo integridade sem intermediários centrais.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                <span className="flex items-center text-slate-400 text-xs">
                  <Clock size={14} className="mr-1" /> 5 min de leitura
                </span>
                <button className="text-brand-600 hover:text-brand-800 font-medium text-sm flex items-center transition-colors">
                  Ler mais <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </article>

          {/* Article 2 */}
          <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://picsum.photos/600/400?random=2" 
                alt="Digital Security" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
               <div className="flex items-center gap-2 mb-3">
                <Tag size={14} className="text-brand-600" />
                <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">Segurança</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Segurança Digital: Como proteger seus dados em 2024
              </h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-1">
                Com o aumento das transações digitais, a cibersegurança tornou-se vital. Práticas essenciais incluem o uso de autenticação de dois fatores (2FA), gerenciadores de senhas complexas e a atenção redobrada contra ataques de phishing que simulam comunicações bancárias oficiais.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                <span className="flex items-center text-slate-400 text-xs">
                  <Clock size={14} className="mr-1" /> 7 min de leitura
                </span>
                <button className="text-brand-600 hover:text-brand-800 font-medium text-sm flex items-center transition-colors">
                  Ler mais <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </article>

          {/* Article 3 */}
          <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://picsum.photos/600/400?random=3" 
                alt="Fintech Growth" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
               <div className="flex items-center gap-2 mb-3">
                <Tag size={14} className="text-brand-600" />
                <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">Mercado</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                A evolução das Fintechs no Brasil
              </h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-1">
                O Brasil tornou-se um dos maiores ecossistemas de tecnologia financeira do mundo. A democratização do acesso ao crédito e a simplificação de pagamentos instantâneos (Pix) demonstram como a tecnologia pode reduzir burocracias e incluir milhões de pessoas no sistema financeiro formal.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                <span className="flex items-center text-slate-400 text-xs">
                  <Clock size={14} className="mr-1" /> 6 min de leitura
                </span>
                <button className="text-brand-600 hover:text-brand-800 font-medium text-sm flex items-center transition-colors">
                  Ler mais <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Articles;