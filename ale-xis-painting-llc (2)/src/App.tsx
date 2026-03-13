/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
        <Navbar />
        <main>
          <Hero />
          <ContactForm />
          <Services />
          <About />
          <WhyChooseUs />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
