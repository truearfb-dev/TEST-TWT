import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600">
          <p>
            <strong>Respeitamos sua privacidade.</strong> Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site, em conformidade com a LGPD. 
            Ao continuar navegando, você concorda com nossa <a href="#" className="text-brand-600 underline hover:text-brand-800">Política de Privacidade</a>.
          </p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button 
            onClick={handleAccept}
            className="w-full md:w-auto px-6 py-2.5 bg-brand-600 text-white font-medium text-sm rounded-md hover:bg-brand-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
          >
            Aceitar e Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;