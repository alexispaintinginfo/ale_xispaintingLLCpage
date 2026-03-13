import { Paintbrush, Home, Building2, Droplets, ShieldCheck, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.s1.title'),
      description: t('services.s1.desc'),
      icon: <Home className="h-8 w-8 text-blue-600" />,
      image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: t('services.s2.title'),
      description: t('services.s2.desc'),
      icon: <Paintbrush className="h-8 w-8 text-blue-600" />,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: t('services.s3.title'),
      description: t('services.s3.desc'),
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: t('services.s4.title'),
      description: t('services.s4.desc'),
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: t('services.s5.title'),
      description: t('services.s5.desc'),
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      image: 'https://www.cincihomepro.com/wp-content/gallery/stucco-resurface-repair/r.jpg',
    },
    {
      title: t('services.s6.title'),
      description: t('services.s6.desc'),
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      image: 'https://www.leecompany.com/wp-content/uploads/2020/07/Drywall-Repair-Services.jpg',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">{t('services.badge')}</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t('services.title')}
          </p>
          <p className="text-lg text-slate-600">
            {t('services.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 right-8 bg-white p-4 rounded-2xl shadow-lg border border-slate-50 z-20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-2">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
