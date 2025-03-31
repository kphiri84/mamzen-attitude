"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [emailValue, setEmailValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription à la newsletter à implémenter
    alert("Merci de vous être inscrit à notre newsletter !");
    setEmailValue("");
  };

  return (
    <footer className="bg-gradient-to-br from-[#A89CD7] to-[#8A7BC8] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#C3B1E1]/20 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#8A7BC8]/20 blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Colonne 1: À propos */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-6">
              <span className="text-[#F5F0FF] text-3xl mr-2">✿</span>
              <h2 className="text-xl font-bold tracking-tight text-white">Mam&apos;zen Attitude</h2>
            </div>
            <p className="text-[#F5F0FF] mb-6 leading-relaxed">
              Des retraites spéciales pour mamans dans des lieux ressourçants pour vous reconnecter à vous-même et retrouver votre équilibre.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Colonne 2: Liens rapides */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-6 text-white">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="group flex items-center text-[#F5F0FF] hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B1E1] mr-2 group-hover:scale-125 transition-transform"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="group flex items-center text-[#F5F0FF] hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B1E1] mr-2 group-hover:scale-125 transition-transform"></span>
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/retraites" className="group flex items-center text-[#F5F0FF] hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B1E1] mr-2 group-hover:scale-125 transition-transform"></span>
                  Nos retraites
                </Link>
              </li>
              <li>
                <Link href="/temoignages" className="group flex items-center text-[#F5F0FF] hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B1E1] mr-2 group-hover:scale-125 transition-transform"></span>
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="group flex items-center text-[#F5F0FF] hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B1E1] mr-2 group-hover:scale-125 transition-transform"></span>
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center text-[#F5F0FF] hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B1E1] mr-2 group-hover:scale-125 transition-transform"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Colonne 3: Contact */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4 text-[#F5F0FF]">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-white/20 transition-all duration-300">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="pt-2">contact@mamzen-attitude.fr</span>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-white/20 transition-all duration-300">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="pt-2">06 XX XX XX XX</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Newsletter */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
            <p className="text-[#F5F0FF] mb-4">
              Recevez nos actualités et offres spéciales directement dans votre boîte mail.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-[#8A7BC8] font-medium py-3 px-4 rounded-lg hover:bg-[#F5F0FF] transition-colors duration-300"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-[#F5F0FF] text-sm">
          <p> {currentYear} Mam&apos;zen Attitude. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
