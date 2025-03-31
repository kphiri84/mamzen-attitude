"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 text-[#8A7BC8] shadow-md backdrop-blur-sm' : 'bg-transparent text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity">
              <span className="flex items-center">
                <span className="mr-2 text-[#C3B1E1]">✿</span>
                Mam&apos;zen Attitude
              </span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-6">
                <Link href="/" className="relative group">
                  <span className="px-2 py-2 text-sm font-medium transition-colors">Accueil</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C3B1E1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link href="/a-propos" className="relative group">
                  <span className="px-2 py-2 text-sm font-medium transition-colors">À propos</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C3B1E1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link href="/retraites" className="relative group">
                  <span className="px-2 py-2 text-sm font-medium transition-colors">Retraites</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C3B1E1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link href="/temoignages" className="relative group">
                  <span className="px-2 py-2 text-sm font-medium transition-colors">Témoignages</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C3B1E1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link href="/galerie" className="relative group">
                  <span className="px-2 py-2 text-sm font-medium transition-colors">Galerie</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C3B1E1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link href="/contact" className="relative group">
                  <span className="px-2 py-2 text-sm font-medium transition-colors">Contact</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C3B1E1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link 
              href="/retraites" 
              className="bg-[#A89CD7] hover:bg-[#8A7BC8] text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center"
            >
              Réserver une retraite
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-current hover:bg-[#C3B1E1]/20 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <div className="relative w-6 h-6">
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                <span className={`absolute h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-4 w-0' : 'opacity-100 w-6'}`}></span>
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu avec animation */}
      <div 
        className={`transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'} md:hidden absolute top-full left-0 right-0 bg-white shadow-lg`}
      >
        <div className="px-4 py-6 space-y-4">
          <Link 
            href="/" 
            className="block px-4 py-2 rounded-lg text-[#8A7BC8] font-medium hover:bg-[#F5F0FF] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            href="/a-propos" 
            className="block px-4 py-2 rounded-lg text-[#8A7BC8] font-medium hover:bg-[#F5F0FF] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            À propos
          </Link>
          <Link 
            href="/retraites" 
            className="block px-4 py-2 rounded-lg text-[#8A7BC8] font-medium hover:bg-[#F5F0FF] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Retraites
          </Link>
          <Link 
            href="/temoignages" 
            className="block px-4 py-2 rounded-lg text-[#8A7BC8] font-medium hover:bg-[#F5F0FF] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Témoignages
          </Link>
          <Link 
            href="/galerie" 
            className="block px-4 py-2 rounded-lg text-[#8A7BC8] font-medium hover:bg-[#F5F0FF] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Galerie
          </Link>
          <Link 
            href="/contact" 
            className="block px-4 py-2 rounded-lg text-[#8A7BC8] font-medium hover:bg-[#F5F0FF] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-4 mt-4 border-t border-gray-200">
            <Link 
              href="/retraites" 
              className="block w-full bg-[#A89CD7] hover:bg-[#8A7BC8] text-white px-4 py-3 rounded-full text-center font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Réserver une retraite
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
