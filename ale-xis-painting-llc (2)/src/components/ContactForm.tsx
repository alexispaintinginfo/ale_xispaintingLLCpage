import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  // The form uses formsubmit.co to send emails directly to the creator
  const formAction = "https://formsubmit.co/alexispaintinginfo@gmail.com";

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">{t('contact.badge')}</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t('contact.title')}
          </p>
          <p className="text-lg text-slate-600">
            {t('contact.desc')}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('contact.info.title')}</h3>
              <p className="text-slate-600 mb-8">
                {t('contact.info.desc')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{t('contact.info.phone')}</p>
                    <p className="text-lg font-semibold text-slate-900">(520) 365-9629</p>
                    <p className="text-lg font-semibold text-slate-900">(520) 730-5393</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{t('contact.info.email')}</p>
                    <p className="text-lg font-semibold text-slate-900">alexispaintinginfo@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{t('contact.info.area')}</p>
                    <p className="text-lg font-semibold text-slate-900">{t('contact.info.area.val')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-4">{t('contact.info.hours')}</h4>
                <div className="flex justify-between text-slate-600 mb-2">
                  <span>{t('contact.info.monFri')}</span>
                  <span className="font-medium">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-600 mb-2">
                  <span>{t('contact.info.sat')}</span>
                  <span className="font-medium">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>{t('contact.info.sun')}</span>
                  <span className="font-medium">{t('contact.info.closed')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3"
          >
            <form
              action={formAction}
              method="POST"
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl"
              onSubmit={() => setIsSubmitting(true)}
            >
              {/* Formsubmit configuration */}
              <input type="hidden" name="_subject" value="New Estimate Request from Ale-Xis Painting Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder={t('contact.form.name.ph')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder={t('contact.form.email.ph')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder={t('contact.form.phone.ph')}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.service')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                  >
                    <option value="" disabled>{t('contact.form.service.select')}</option>
                    <option value="Interior Painting">{t('services.s1.title')}</option>
                    <option value="Exterior Painting">{t('services.s2.title')}</option>
                    <option value="Remediation Services">{t('services.s3.title')}</option>
                    <option value="Commercial Painting">{t('services.s4.title')}</option>
                    <option value="Stucco Repair">{t('services.s5.title')}</option>
                    <option value="Drywall Repair">{t('services.s6.title')}</option>
                    <option value="Other">{t('contact.form.service.other')}</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('contact.form.address')}
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder={t('contact.form.address.ph')}
                />
              </div>

              <div className="mb-8">
                <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('contact.form.details')}
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                  placeholder={t('contact.form.details.ph')}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
              </button>
              
              <p className="mt-4 text-sm text-center text-slate-500">
                {t('contact.form.disclaimer')}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
