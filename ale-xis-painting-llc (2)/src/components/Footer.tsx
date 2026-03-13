import { Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tight text-white mb-4 block">
              Ale-Xis <span className="text-blue-500">Painting</span>
            </a>
            <p className="text-sm text-slate-400 max-w-xs">
              {t('footer.desc')}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">{t('footer.links')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">{t('nav.home')}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t('nav.services')}</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">{t('nav.about')}</a></li>
              <li><a href="#why-us" className="hover:text-blue-400 transition-colors">{t('nav.whyUs')}</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">{t('nav.estimate')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t('services.s1.title')}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t('services.s2.title')}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t('services.s3.title')}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t('services.s4.title')}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t('services.s5.title')}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t('services.s6.title')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} {t('footer.rights')}
          </p>
          <div className="flex items-center space-x-6 text-sm text-slate-500">
            <a href="https://ig.me/m/alexis_painting" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
