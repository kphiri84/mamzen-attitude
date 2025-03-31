import Image from "next/image";
import Link from "next/link";

export default function Retraites() {
  // Données des retraites (dans un projet réel, ces données viendraient d'une API ou d'une base de données)
  const retraites = [
    {
      id: 1,
      titre: "Retraite Printemps en Provence",
      lieu: "Mas provençal, Luberon",
      dates: "15-19 mai 2025",
      description: "Une retraite de 5 jours au cœur de la Provence pour se reconnecter à soi et à la nature. Profitez des champs de lavande, des activités de plein air et des ateliers de développement personnel.",
      programme: [
        "Yoga matinal en plein air",
        "Ateliers de méditation et de pleine conscience",
        "Randonnées dans les collines du Luberon",
        "Soirées partage et cercles de parole",
        "Temps libre pour se ressourcer"
      ],
      inclus: [
        "Hébergement en chambre selon la formule choisie",
        "Repas sains et équilibrés, produits locaux",
        "Toutes les activités et ateliers",
        "Accès aux espaces communs et au jardin"
      ],
      image: "/images/retraite-provence.jpg"
    },
    {
      id: 2,
      titre: "Évasion Océane en Bretagne",
      lieu: "Villa face à l'océan, Finistère",
      dates: "10-14 juillet 2025",
      description: "Une parenthèse de 5 jours face à l'océan pour se ressourcer au rythme des marées. Reconnectez-vous à votre force intérieure tout en profitant de la beauté sauvage de la côte bretonne.",
      programme: [
        "Séances de yoga face à l'océan",
        "Ateliers de respiration et de gestion du stress",
        "Balades sur la plage et dans les sentiers côtiers",
        "Atelier cuisine bien-être avec des produits locaux",
        "Temps de repos et de contemplation"
      ],
      inclus: [
        "Hébergement en chambre selon la formule choisie",
        "Repas sains à base de produits locaux et de saison",
        "Toutes les activités et ateliers",
        "Accès à la plage privée"
      ],
      image: "/images/retraite-bretagne.jpg"
    },
    {
      id: 3,
      titre: "Ressourcement Automnal dans les Alpes",
      lieu: "Chalet de montagne, Haute-Savoie",
      dates: "25-29 septembre 2025",
      description: "Une retraite de 5 jours dans un chalet authentique au cœur des montagnes. Profitez de l'air pur et des paysages spectaculaires pour vous reconnecter à votre essence et faire le plein d'énergie.",
      programme: [
        "Yoga et méditation matinale",
        "Randonnées guidées dans les sentiers alpins",
        "Ateliers de développement personnel",
        "Soirées cocooning autour du feu",
        "Spa et moments de détente"
      ],
      inclus: [
        "Hébergement en chambre selon la formule choisie",
        "Repas montagnards sains et réconfortants",
        "Toutes les activités et ateliers",
        "Accès au sauna et à l'espace bien-être"
      ],
      image: "/images/retraite-alpes.jpg"
    }
  ];

  return (
    <div className="w-full">
      {/* En-tête de page */}
      <section className="relative py-20 bg-[#A89CD7] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="bg-gradient-to-r from-[#8A7BC8] via-[#A89CD7] to-[#C3B1E1] w-full h-full opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos retraites</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez nos séjours exclusifs pour mamans dans des lieux d&apos;exception
          </p>
        </div>
      </section>

      {/* Présentation des formules */}
      <section className="py-16 bg-[#F5F0FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-4">Nos formules</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pour chaque retraite, nous proposons trois formules adaptées à vos besoins et à votre budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#8A7BC8] mb-4 text-center">Pack Essentiel</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-[#C3B1E1]">590€</span>
                <span className="text-gray-500 ml-2">/ personne</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Hébergement en chambre partagée (3-4 personnes)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Repas sains et équilibrés</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Toutes les activités de groupe</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Accès aux espaces communs</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/contact" className="inline-block bg-[#A89CD7] hover:bg-[#8A7BC8] text-white font-medium py-2 px-6 rounded-full transition-colors">
                  Réserver
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transform scale-105 border-2 border-[#A89CD7] relative">
              <div className="absolute top-0 right-0 bg-[#A89CD7] text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                Populaire
              </div>
              <h3 className="text-2xl font-bold text-[#8A7BC8] mb-4 text-center">Pack Sérénité</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-[#C3B1E1]">790€</span>
                <span className="text-gray-500 ml-2">/ personne</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Hébergement en chambre double</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Repas bio et locaux</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Toutes les activités de groupe</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>1 atelier individuel au choix</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Accès prioritaire aux espaces bien-être</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/contact" className="inline-block bg-[#C3B1E1] hover:bg-[#A89CD7] text-white font-medium py-2 px-6 rounded-full transition-colors">
                  Réserver
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#8A7BC8] mb-4 text-center">Pack Premium</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-[#C3B1E1]">990€</span>
                <span className="text-gray-500 ml-2">/ personne</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Hébergement en chambre individuelle</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Repas gastronomiques bio et locaux</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Toutes les activités de groupe</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>3 ateliers individuels au choix</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Accès illimité aux espaces bien-être</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#A89CD7] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Transfert depuis la gare/aéroport inclus</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/contact" className="inline-block bg-[#A89CD7] hover:bg-[#8A7BC8] text-white font-medium py-2 px-6 rounded-full transition-colors">
                  Réserver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des retraites */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-4">Nos prochaines retraites</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choisissez la destination qui vous inspire et rejoignez-nous pour une expérience inoubliable.
            </p>
          </div>
          
          <div className="space-y-16">
            {retraites.map((retraite) => (
              <div key={retraite.id} className="bg-[#F5F0FF] rounded-lg overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image 
                      src={retraite.image} 
                      alt={retraite.titre} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#8A7BC8] mb-2">{retraite.titre}</h3>
                    <div className="flex items-center mb-4">
                      <svg className="w-5 h-5 text-[#C3B1E1] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-gray-600">{retraite.lieu}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <svg className="w-5 h-5 text-[#C3B1E1] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-gray-600">{retraite.dates}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{retraite.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-[#E9E1F8] text-[#8A7BC8] px-3 py-1 rounded-full text-sm">Yoga</span>
                      <span className="bg-[#E9E1F8] text-[#8A7BC8] px-3 py-1 rounded-full text-sm">Méditation</span>
                      <span className="bg-[#E9E1F8] text-[#8A7BC8] px-3 py-1 rounded-full text-sm">Bien-être</span>
                      <span className="bg-[#E9E1F8] text-[#8A7BC8] px-3 py-1 rounded-full text-sm">Nature</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="text-[#8A7BC8] font-medium hover:text-[#A89CD7] transition-colors flex items-center">
                        Voir le programme
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      <Link href="/contact" className="bg-[#A89CD7] hover:bg-[#8A7BC8] text-white font-medium py-2 px-6 rounded-full transition-colors">
                        Réserver
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F5F0FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vous avez des questions sur nos retraites ? Consultez notre FAQ ci-dessous.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#8A7BC8] mb-3">Faut-il avoir déjà pratiqué le yoga pour participer ?</h3>
              <p className="text-gray-600">
                Non, aucune expérience préalable n&apos;est requise. Nos séances sont adaptées à tous les niveaux, des débutantes aux plus expérimentées.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#8A7BC8] mb-3">Comment se déroule le paiement ?</h3>
              <p className="text-gray-600">
                Nous demandons un acompte de 30% à la réservation, puis le solde 30 jours avant le début de la retraite. Des facilités de paiement sont possibles, n&apos;hésitez pas à nous contacter.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#8A7BC8] mb-3">Que se passe-t-il si je dois annuler ma participation ?</h3>
              <p className="text-gray-600">
                En cas d&apos;annulation plus de 60 jours avant la retraite, l&apos;acompte est remboursé à 100%. Entre 60 et 30 jours, il est remboursé à 50%. Moins de 30 jours avant la retraite, l&apos;acompte n&apos;est pas remboursable, mais peut être reporté sur une prochaine retraite.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#8A7BC8] mb-3">Les repas sont-ils adaptés aux régimes spéciaux ?</h3>
              <p className="text-gray-600">
                Oui, nous prenons en compte les allergies et intolérances alimentaires, ainsi que les régimes spécifiques (végétarien, végétalien, sans gluten, etc.). Merci de nous préciser vos besoins lors de votre inscription.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#A89CD7] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prête à vivre une expérience transformatrice ?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Rejoignez-nous pour une parenthèse de bien-être et de reconnexion à soi.
          </p>
          <Link href="/contact" className="inline-block bg-white text-[#8A7BC8] hover:bg-[#F5F0FF] font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Réserver ma place
          </Link>
        </div>
      </section>
    </div>
  );
}
