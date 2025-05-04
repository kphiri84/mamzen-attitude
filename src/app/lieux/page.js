import Image from "next/image";
import Link from "next/link";
import varyImage from "../../assets/vary.jpeg";
import forgesImage from "../../assets/forges.jpg";

export default function Lieux() {
  // Données des lieux
  const lieux = [
    {
      id: 1,
      titre: "Château Vary",
      lieu: "Loire-Atlantique",
      description: "Niché au cœur de la Loire-Atlantique, le Château Vary est un joyau architectural du XVIIIe siècle entouré de jardins à la française qui invitent à la contemplation et à la sérénité. Ses vastes salons aux moulures délicates, ses chambres élégantes et son parc majestueux en font un écrin parfait pour nos séjours Break Mums. Ici, le temps semble suspendu, permettant à chaque maman de se reconnecter à elle-même dans un cadre alliant histoire, nature et raffinement. Les allées ombragées du parc, les fontaines murmurantes et les espaces de méditation spécialement aménagés offrent autant de havres de paix pour votre ressourcement.",
      image: varyImage
    },
    {
      id: 2,
      titre: "Château des Forges",
      lieu: "Angers, Maine-et-Loire",
      description: "Le Château des Forges d'Angers est un joyau architectural du XVIIe siècle niché au cœur du Val de Loire. Avec ses tours élégantes, ses façades en tuffeau blanc et son parc à la française, ce château historique offre un cadre d'exception pour nos séjours Break Mums. Entouré de 7 hectares de jardins paysagers et bordé par la rivière Maine, il combine harmonieusement patrimoine et sérénité. À l'intérieur, les salons d'apparat aux plafonds à la française, la bibliothèque centenaire et les chambres au charme authentique vous transportent dans un univers où le temps semble suspendu. Les terrasses ombragées, les fontaines et les allées bordées de buis taillés offrent des espaces propices à la méditation et à la reconnexion avec soi-même. Un véritable havre de paix où chaque maman pourra se ressourcer dans un cadre alliant histoire, raffinement et nature préservée.",
      image: forgesImage
    }
  ];

  return (
    <div className="w-full">
      {/* En-tête de page simple */}
      <section className="py-16 pt-24 bg-[#8A7BC8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos lieux</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez nos châteaux d&apos;exception, véritables écrins de bien-être pour votre parenthèse enchantée
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-6">Des lieux choisis avec <span className="text-[#A89CD7]">cœur</span></h2>
            <p className="text-lg text-gray-600 mb-8">
              Chez Break Mums, nous croyons que l&apos;environnement joue un rôle essentiel dans votre expérience de ressourcement. C&apos;est pourquoi nous avons sélectionné avec le plus grand soin des châteaux d&apos;exception, alliant charme historique, confort moderne et cadre naturel préservé.
            </p>
            <p className="text-lg text-gray-600">
              Chaque lieu a été choisi pour sa capacité à vous offrir un véritable cocon, loin du tumulte quotidien, où vous pourrez vous reconnecter à vous-même et partager des moments précieux avec d&apos;autres mamans dans un cadre bienveillant et inspirant.
            </p>
          </div>
        </div>
      </section>

      {/* Liste des lieux */}
      <section className="py-16 bg-[#F5F0FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-4">Nos châteaux d&apos;exception</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les écrins de bien-être qui accueillent nos séjours Break Mums
            </p>
          </div>
          
          <div className="space-y-16">
            {lieux.map((lieu) => (
              <div key={lieu.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-96 md:h-auto">
                    <Image 
                      src={lieu.image} 
                      alt={lieu.titre} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#8A7BC8] mb-2">{lieu.titre}</h3>
                    <div className="flex items-center mb-6">
                      <svg className="w-5 h-5 text-[#8A7BC8] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-gray-600">{lieu.lieu}</span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{lieu.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-white text-[#8A7BC8] px-3 py-1 rounded-full text-sm border border-[#8A7BC8]">Bien-être</span>
                      <span className="bg-white text-[#8A7BC8] px-3 py-1 rounded-full text-sm border border-[#8A7BC8]">Sérénité</span>
                      <span className="bg-white text-[#8A7BC8] px-3 py-1 rounded-full text-sm border border-[#8A7BC8]">Nature</span>
                      <span className="bg-white text-[#8A7BC8] px-3 py-1 rounded-full text-sm border border-[#8A7BC8]">Histoire</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-4">L&apos;expérience Break Mums</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bien plus qu&apos;un simple séjour, une véritable parenthèse enchantée
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F0FF] p-8 rounded-lg shadow-md text-center">
              <div className="bg-[#8A7BC8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8A7BC8] mb-4">Cadre exceptionnel</h3>
              <p className="text-gray-600">
                Des châteaux sélectionnés avec soin pour leur charme, leur confort et leur environnement paisible, propices à la détente et à l&apos;introspection.
              </p>
            </div>
            
            <div className="bg-[#F5F0FF] p-8 rounded-lg shadow-md text-center">
              <div className="bg-[#A89CD7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#A89CD7] mb-4">Accompagnement bienveillant</h3>
              <p className="text-gray-600">
                Une équipe attentive et des intervenants qualifiés pour vous guider dans votre cheminement personnel et vous offrir une expérience sur mesure.
              </p>
            </div>
            
            <div className="bg-[#F5F0FF] p-8 rounded-lg shadow-md text-center">
              <div className="bg-[#8A7BC8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8A7BC8] mb-4">Ambiance chaleureuse</h3>
              <p className="text-gray-600">
                Un espace sécurisant où chaque maman est accueillie avec respect et sans jugement, propice aux échanges authentiques et aux rencontres enrichissantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#8A7BC8] via-[#A89CD7] to-[#C3B1E1] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Envie d&apos;en savoir plus ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour découvrir nos prochaines dates de séjour et réserver votre parenthèse enchantée dans l&apos;un de nos châteaux d&apos;exception.
          </p>
          <Link href="/contact" className="bg-white text-[#8A7BC8] hover:bg-[#F5F0FF] px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-block">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
