import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070&auto=format&fit=crop"
          alt="Ale-Xis Painting Van"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-400/30 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
            <span>{t('hero.badge')}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            {t('hero.title1')} <br />
            {t('hero.title2')} <span className="text-blue-400">Ale-Xis Painting</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
          >
            {t('hero.desc')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              {t('hero.btn1')}
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/20 text-base font-semibold rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
            >
              {t('hero.btn2')}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-slate-300"
          >
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
              <span>{t('hero.check1')}</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
              <span>{t('hero.check2')}</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
              <span>{t('hero.check3')}</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
              <span>{t('hero.check4')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
