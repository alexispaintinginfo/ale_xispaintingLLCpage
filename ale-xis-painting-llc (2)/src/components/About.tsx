import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 font-bold text-xl">
                    20+
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-900">{t('about.stat1')}</p>
                    <p className="text-sm text-slate-500">{t('about.stat2')}</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">{t('about.badge')}</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              {t('about.title')}
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-3xl mx-auto">
              {t('about.p1')}
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              {t('about.p2')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              {[
                t('about.check1'),
                t('about.check2'),
                t('about.check3'),
                t('about.check4'),
                t('about.check5'),
                t('about.check6'),
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all"
              >
                {t('about.btn')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
