import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Articles from './components/Articles';
import About from './components/About';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Articles />
        <About />
      </main>
      <Footer />
      <CookieConsent />
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 p-3 bg-brand-600 text-white rounded-full shadow-lg transition-all duration-300 z-40 hover:bg-brand-700 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;