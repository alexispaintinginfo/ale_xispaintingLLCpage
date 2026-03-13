import { Shield, Clock, ThumbsUp, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      title: t('why.f1.title'),
      description: t('why.f1.desc'),
      icon: <Shield className="h-10 w-10 text-blue-500 mb-4" />,
    },
    {
      title: t('why.f3.title'),
      description: t('why.f3.desc'),
      icon: <Clock className="h-10 w-10 text-blue-500 mb-4" />,
    },
    {
      title: t('why.f4.title'),
      description: t('why.f4.desc'),
      icon: <ThumbsUp className="h-10 w-10 text-blue-500 mb-4" />,
    },
    {
      title: t('why.f2.title'),
      description: t('why.f2.desc'),
      icon: <Award className="h-10 w-10 text-blue-500 mb-4" />,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-blue-400 tracking-wide uppercase mb-3">{t('why.badge')}</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {t('why.title')}
          </p>
          <p className="text-lg text-slate-400">
            {t('why.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors duration-300"
            >
              {reason.icon}
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
