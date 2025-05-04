import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Nos Formules | Mam\'zen Attitude',
  description: 'Découvrez nos différentes formules de retraites bien-être pour mamans. Des moments de détente et de ressourcement adaptés à vos besoins.',
};

export default function Formules() {
  const formules = [
    {
      id: 1,
      titre: "ESSENTIEL MUM",
      description: "La formule de base pour découvrir nos retraites bien-être.",
      details: [
        "TRANSPORT : Depuis la gare",
        "HÉBERGEMENT : Chambre partagée",
        "ACTIVITÉS : Accès aux activités de base proposées",
        "EXTRAS : Cadeau de bienvenue"
      ],
      prix: "À partir de 590€",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      couleur: "#8A7BC8",
      popular: false
    },
    {
      id: 2,
      titre: "ECHAPPÉE DOUCEUR MUM",
      description: "Notre formule la plus populaire pour un confort optimal.",
      details: [
        "TRANSPORT : Depuis la gare ou l'aéroport (navette partagée)",
        "HÉBERGEMENT : Chambre individuelle confortable",
        "ACTIVITÉS : Accès à la majorité des activités proposées",
        "EXTRAS : Petit cadeau de bienvenue"
      ],
      prix: "À partir de 790€",
      image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      couleur: "#8A7BC8",
      popular: true
    },
    {
      id: 3,
      titre: "EVASION ROYALE MUM",
      description: "L'expérience premium pour un séjour d'exception.",
      details: [
        "TRANSPORT : Depuis la gare ou l'aéroport (navette privée)",
        "HÉBERGEMENT : Chambre individuelle, prestation haut de gamme",
        "ACTIVITÉS : Accès à toutes les activités proposées, incluant soins ou atelier exclusif, excursions privées",
        "EXTRAS : Cadeau de bienvenue haut de gamme"
      ],
      prix: "À partir de 990€",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      couleur: "#8A7BC8",
      popular: false
    }
  ];

  return (
    <div className="w-full">
      {/* En-tête de page simple */}
      <section className="py-16 pt-24 bg-[#8A7BC8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Formules</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez nos différentes formules adaptées à vos besoins
          </p>
        </div>
      </section>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16 text-center">
        <h2 className="text-3xl font-semibold text-[#8A7BC8] mb-6">Trouvez la formule qui vous correspond</h2>
        <p className="text-lg text-gray-700 mb-8">
          Pour chaque retraite, nous proposons trois formules adaptées à vos besoins et à votre budget.
          Que vous cherchiez une expérience partagée ou un séjour plus exclusif, 
          nous avons la formule qu&apos;il vous faut.
        </p>
      </div>

      {/* Liste des formules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formules.map((formule) => (
            <div 
              key={formule.id} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${formule.popular ? 'transform scale-105 border-2 border-[#8A7BC8] relative' : ''}`}
            >
              {formule.popular && (
                <div className="absolute top-0 right-0 bg-[#8A7BC8] text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Populaire
                </div>
              )}
              <div className="relative h-56">
                <Image
                  src={formule.image}
                  alt={formule.titre}
                  fill
                  className="object-cover"
                />
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{ backgroundColor: formule.couleur }}
                ></div>
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-[#8A7BC8] font-semibold">
                  {formule.prix}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-center" style={{ color: formule.couleur }}>
                  {formule.titre}
                </h3>
                <p className="text-gray-700 mb-4 text-center">
                  {formule.description}
                </p>
                <p className="font-medium text-[#8A7BC8] mb-3 text-center">LE PACK COMPREND :</p>
                <ul className="space-y-3 mb-6">
                  {formule.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#8A7BC8] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-[#8A7BC8] hover:bg-[#8A7BC8] text-white font-medium py-2 px-6 rounded-full transition-colors"
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appel à l'action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#F5F0FF] rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#8A7BC8] mb-4">
            Vous souhaitez une formule personnalisée ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Nous pouvons créer un séjour sur mesure selon vos besoins spécifiques.
            Contactez-nous pour discuter de vos envies et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-[#8A7BC8] hover:bg-[#8A7BC8] text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Nous contacter
            </Link>
            <Link 
              href="/devis" 
              className="bg-white border-2 border-[#8A7BC8] text-[#8A7BC8] hover:bg-[#F5E6FF] px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
