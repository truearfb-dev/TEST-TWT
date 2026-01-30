import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="md:col-span-1">
             <span className="font-bold text-xl text-white tracking-tight block mb-4">
              InovaTech<span className="text-brand-500">Finanças</span>
            </span>
            <p className="text-sm mb-4">
              Informação de qualidade para navegar na economia digital com segurança e consciência.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#artigos" className="hover:text-white transition-colors">Artigos</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
             <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Cookies</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
             <h4 className="text-white font-semibold mb-4">Contato</h4>
             <p className="text-sm mb-2">Av. Paulista, 1000 - Bela Vista</p>
             <p className="text-sm mb-2">São Paulo - SP, 01310-100</p>
             <p className="text-sm">contato@inovatechfinancas.com.br</p>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-center md:text-left">
          <p className="text-xs leading-relaxed text-slate-500 mb-4">
            <strong>Isenção de Responsabilidade:</strong> Este site tem fins puramente educacionais e informativos. 
            O conteúdo aqui apresentado não constitui consultoria financeira, recomendação de investimento ou oferta de compra/venda de ativos. 
            Todo investimento envolve riscos. Recomendamos que consulte um profissional financeiro certificado antes de tomar decisões financeiras.
            A InovaTech Finanças não se responsabiliza por perdas ou danos resultantes do uso das informações contidas neste site.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; 2024 InovaTech Finanças. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido com foco em transparência e educação.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;