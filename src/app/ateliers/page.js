import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Nos Ateliers | Mam&apos;zen Attitude',
  description: 'Découvrez nos ateliers bien-être pour mamans : yoga, coaching santé, traitements holistiques et bien plus encore.',
};

export default function Ateliers() {
  const ateliers = [
    {
      id: 1,
      titre: "YOGA",
      description: "Cours de Yoga doux et adapté à tous les niveaux, axés sur la relaxation et la gestion du stress.",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      couleur: "#8A7BC8"
    },
    {
      id: 2,
      titre: "COACHING SANTÉ",
      description: "Participez à des sessions de groupe mises en place par un coach de vie : thématiques sur des sujets pertinents (communication, gestion des émotions, réflexions et outils pour trouver le bon équilibre en groupe).",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      couleur: "#8A7BC8"
    },
    {
      id: 3,
      titre: "TRAITEMENTS HOLISTIQUES",
      description: "Massages relaxants (en option ou inclus dans certains packs), soins du visage et du corps doux et naturels, bain de pieds relaxant aux huiles essentielles.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      couleur: "#8A7BC8"
    },
    {
      id: 4,
      titre: "AROMATHÉRAPIE",
      description: "Soulagez de manière naturelle certains de vos maux du quotidien, comme la fatigue, les douleurs musculaires ou le stress.",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      couleur: "#8A7BC8"
    },
    {
      id: 5,
      titre: "PROMENADES ET RANDONNÉES DOUCES",
      description: "Explorez les environs à un rythme tranquille, profitez de la nature et reconnectez-vous avec votre environnement.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      couleur: "#8A7BC8"
    },
    {
      id: 6,
      titre: "VISITE LOCALE RELAXANTE",
      description: "Découverte des petits villages charmants, villes, marchés, visite de caves à vins.",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      couleur: "#8A7BC8"
    },
    {
      id: 7,
      titre: "CRÉATIVITÉ ET EXPRESSION",
      description: "Laissez votre âme créative s&apos;exprimer ! Peinture, modelage mais également ateliers d&apos;écriture sont proposés.",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      couleur: "#8A7BC8"
    },
    {
      id: 8,
      titre: "INITIATION MUSICALE",
      description: "Initiation à des instruments doux comme le ukulélé ou le bol tibétain.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      couleur: "#8A7BC8"
    }
  ];

  return (
    <div className="w-full">
      {/* En-tête de page simple */}
      <section className="py-16 pt-24 bg-[#8A7BC8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Ateliers</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez nos ateliers conçus pour vous accompagner dans votre parcours de maman
          </p>
        </div>
      </section>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16 text-center">
        <h2 className="text-3xl font-semibold text-[#8A7BC8] mb-6">Découvrez nos ateliers bien-être</h2>
        <p className="text-lg text-gray-700 mb-8">
          Chez Mam&apos;zen Attitude, nous proposons une variété d&apos;ateliers conçus pour vous aider à vous reconnecter à vous-même, 
          à vous détendre et à développer de nouvelles compétences. Tous nos ateliers sont adaptés à tous les niveaux et 
          encadrés par des professionnels bienveillants.
        </p>
      </div>

      {/* Liste des ateliers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ateliers.map((atelier) => (
            <div 
              key={atelier.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56">
                <Image
                  src={atelier.image}
                  alt={atelier.titre}
                  fill
                  className="object-cover"
                />
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{ backgroundColor: atelier.couleur }}
                ></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: atelier.couleur }}>
                  {atelier.titre}
                </h3>
                <p className="text-gray-700 mb-4">
                  {atelier.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Témoignages */}
      <div className="bg-[#F5F0FF] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-[#8A7BC8] mb-12">Ce que nos participantes en disent</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                    alt="Sophie D."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#8A7BC8]">Sophie D.</h3>
                  <p className="text-sm text-gray-500">Maman de 2 enfants</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;L&apos;atelier de yoga m&apos;a permis de me reconnecter à mon corps après ma grossesse. L&apos;ambiance était bienveillante et adaptée à mon niveau. Je me sens plus sereine et énergique au quotidien !&quot;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                    alt="Marie L."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#8A7BC8]">Marie L.</h3>
                  <p className="text-sm text-gray-500">Maman d&apos;un enfant</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;Les sessions de coaching m&apos;ont donné des outils concrets pour gérer mon stress et mieux communiquer avec mes proches. Une vraie révélation qui a transformé mon quotidien !&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Appel à l&apos;action */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#F5F0FF] rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#8A7BC8] mb-4">
              Prête à vous ressourcer ?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Réservez dès maintenant votre séjour et profitez de nos ateliers bien-être.
              Nous avons hâte de vous accueillir et de vous accompagner dans cette parenthèse ressourçante.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/lieux" 
                className="bg-[#8A7BC8] hover:bg-[#A89CD7] text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Découvrir nos lieux
              </Link>
              <Link 
                href="/formules" 
                className="bg-white border-2 border-[#8A7BC8] text-[#8A7BC8] hover:bg-[#F5E6FF] px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Voir nos formules
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
