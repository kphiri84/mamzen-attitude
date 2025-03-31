import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section avec animation de fond */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Fond avec effet de parallaxe */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8A7BC8]/60 via-[#A89CD7]/50 to-[#C3B1E1]/40 z-10"></div>
          {/* Image de fond de femme en méditation depuis Unsplash */}
          <Image
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Femme en méditation pour Mam'zen Attitude"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Élément décoratif flou */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#C3B1E1]/20 blur-3xl z-0"></div>
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-[#8A7BC8]/10 blur-3xl z-0"></div>
        </div>
        
        {/* Contenu du hero avec animation d'entrée */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Retrouvez votre <span className="text-[#f27e96]">équilibre</span> et votre <span className="text-[#00a69c]">sérénité</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Des retraites exclusives pour les mamans qui souhaitent prendre soin d'elles et se reconnecter à leur essence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/retraites" className="px-8 py-4 bg-white text-[#8A7BC8] rounded-full font-semibold text-lg hover:bg-[#F5F0FF] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center">
                Découvrir nos retraites
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              <Link href="/a-propos" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
        
        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Section À propos avec design moderne */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F5F0FF] rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#E9E1F8] rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Femme pratiquant le yoga"
                  width={600}
                  height={700}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#8A7BC8] mb-6">Mam'zen Attitude</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Mam'zen Attitude est née d'une conviction profonde : chaque maman mérite de prendre soin d'elle pour mieux s'occuper des autres.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nos retraites sont conçues comme des parenthèses enchantées où vous pourrez vous ressourcer, vous reconnecter à vous-même et partager avec d'autres mamans dans un cadre bienveillant et apaisant.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#F5F0FF] p-6 rounded-xl">
                  <div className="w-12 h-12 bg-[#f27e96] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#8A7BC8] mb-2">Bien-être</h3>
                  <p className="text-gray-600">Des activités pensées pour votre équilibre physique et mental</p>
                </div>
                <div className="bg-[#F5F0FF] p-6 rounded-xl">
                  <div className="w-12 h-12 bg-[#00a69c] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#8A7BC8] mb-2">Partage</h3>
                  <p className="text-gray-600">Des moments d'échange authentiques entre mamans</p>
                </div>
              </div>
              <Link href="/a-propos" className="inline-flex items-center text-[#8A7BC8] font-semibold hover:text-[#C3B1E1] transition-colors">
                Découvrir notre histoire
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos retraites avec cartes modernes */}
      <section className="py-20 bg-[#F9F6FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8A7BC8] mb-4">Nos prochaines retraites</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choisissez la destination qui vous inspire et rejoignez-nous pour une expérience inoubliable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1591291621164-2c6367723315?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Retraite en Provence" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8A7BC8]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium text-[#8A7BC8]">
                  15-19 mai 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8A7BC8] mb-2">Retraite Printemps en Provence</h3>
                <p className="text-gray-600 mb-4">Une parenthèse enchantée au cœur des champs de lavande pour se reconnecter à soi et à la nature.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#C3B1E1] font-semibold">À partir de 590€</span>
                  <Link href="/retraites" className="text-[#8A7BC8] font-medium hover:text-[#C3B1E1] transition-colors">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Carte 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Retraite en Bretagne" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8A7BC8]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium text-[#8A7BC8]">
                  10-14 juillet 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8A7BC8] mb-2">Évasion Océane en Bretagne</h3>
                <p className="text-gray-600 mb-4">Une parenthèse face à l'océan pour se ressourcer au rythme des marées et retrouver votre force intérieure.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#C3B1E1] font-semibold">À partir de 590€</span>
                  <Link href="/retraites" className="text-[#8A7BC8] font-medium hover:text-[#C3B1E1] transition-colors">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Carte 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Retraite dans les Alpes" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8A7BC8]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium text-[#8A7BC8]">
                  25-29 septembre 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8A7BC8] mb-2">Ressourcement Automnal dans les Alpes</h3>
                <p className="text-gray-600 mb-4">Une retraite dans un chalet authentique au cœur des montagnes pour vous reconnecter à votre essence.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#C3B1E1] font-semibold">À partir de 590€</span>
                  <Link href="/retraites" className="text-[#8A7BC8] font-medium hover:text-[#C3B1E1] transition-colors">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/retraites" className="inline-flex items-center justify-center px-8 py-4 bg-[#A89CD7] text-white rounded-full font-semibold hover:bg-[#8A7BC8] transition-all duration-300 shadow-md hover:shadow-lg">
              Voir toutes nos retraites
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Témoignages avec design moderne */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8A7BC8] mb-4">Ce qu'elles en disent</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de mamans qui ont participé à nos retraites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Témoignage 1 */}
            <div className="bg-[#F9F6FF] p-8 rounded-2xl relative">
              <svg className="absolute top-4 left-4 w-12 h-12 text-[#C3B1E1]/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="pt-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Cette retraite a été une véritable révélation pour moi. J'ai pu me reconnecter à moi-même, prendre du temps pour moi et rencontrer des femmes extraordinaires. Je repars ressourcée et pleine d'énergie !"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Sophie" 
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8A7BC8]">Sophie, 34 ans</h4>
                    <p className="text-sm text-gray-500">Maman de 2 enfants</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Témoignage 2 */}
            <div className="bg-[#F9F6FF] p-8 rounded-2xl relative">
              <svg className="absolute top-4 left-4 w-12 h-12 text-[#C3B1E1]/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="pt-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Un moment hors du temps, dans un cadre magnifique. Les ateliers étaient parfaitement adaptés à mes besoins et l'équipe était à l'écoute et bienveillante. Je recommande vivement !"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Laure" 
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8A7BC8]">Laure, 41 ans</h4>
                    <p className="text-sm text-gray-500">Maman de 3 enfants</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Témoignage 3 */}
            <div className="bg-[#F9F6FF] p-8 rounded-2xl relative">
              <svg className="absolute top-4 left-4 w-12 h-12 text-[#C3B1E1]/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="pt-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "J'avais besoin de prendre du recul sur ma vie de maman. Cette retraite m'a permis de me recentrer, de prendre soin de moi et de repartir avec des outils concrets pour mon quotidien."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Émilie" 
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8A7BC8]">Émilie, 29 ans</h4>
                    <p className="text-sm text-gray-500">Maman d'un enfant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/temoignages" className="inline-flex items-center text-[#8A7BC8] font-semibold hover:text-[#C3B1E1] transition-colors">
              Voir tous les témoignages
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section CTA moderne */}
      <section className="py-20 bg-[#A89CD7] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#8A7BC8]/30"></div>
          <svg className="absolute bottom-0 left-0 w-full h-32 text-white/5" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" />
          </svg>
          <svg className="absolute top-0 left-0 w-full h-32 text-white/5 transform rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Prête à vous offrir une parenthèse enchantée ?</h2>
            <p className="text-xl mb-10 text-white/90">
              Rejoignez-nous pour une expérience unique qui transformera votre quotidien de maman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/retraites" className="px-8 py-4 bg-white text-[#8A7BC8] rounded-full font-semibold text-lg hover:bg-[#F5F0FF] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center">
                Réserver ma retraite
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Newsletter moderne */}
      <section className="py-16 bg-[#F9F6FF]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5F0FF] rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#E9E1F8] rounded-full transform -translate-x-12 translate-y-12"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8A7BC8] mb-4">Restez informée</h2>
              <p className="text-gray-600 mb-8">
                Inscrivez-vous à notre newsletter pour recevoir nos actualités, conseils et offres spéciales.
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A89CD7] focus:border-transparent"
                  required
                />
                <button 
                  type="submit" 
                  className="px-8 py-4 bg-[#f27e96] text-white rounded-full font-semibold hover:bg-[#e06c84] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  S'inscrire
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                En vous inscrivant, vous acceptez notre politique de confidentialité. Vous pourrez vous désinscrire à tout moment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
