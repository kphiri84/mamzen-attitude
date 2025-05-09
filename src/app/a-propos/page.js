import Image from "next/image";

export default function APropos() {
  return (
    <div className="w-full">
      {/* En-tête de page simple */}
      <section className="py-16 pt-24 bg-[#8A7BC8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de <span className="text-[#C3B1E1]">Break</span> <span className="text-[#F5F0FF]">Mums</span></h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez notre histoire, nos valeurs et notre mission
          </p>
        </div>
      </section>

      {/* Présentation personnelle */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Fondatrice de Break Mums"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#8A7BC8] mb-6">Mon <span className="text-[#A89CD7]">histoire</span></h2>
              <p className="text-gray-600 mb-4">
                Je m&apos;appelle Audrey, je suis maman de trois adorables enfants. Ancienne aide médico psychologique, je suis depuis 2021, directrice d&apos;une société de transport privé.
                De nos jours, une maman doit allier sa vie professionnelle, personnelle et familiale.
              </p>
              <p className="text-gray-600 mb-4">
                Le besoin de moment de répit, de ressourcement et de reconnexion avec soi-même est de plus en plus fort.
                Une idée m&apos;est venue... Pourquoi ne pas créer des séjours conçus spécialement pour des mamans ?
              </p>
              <p className="text-gray-600 mb-4">
                La naissance de &quot;mon nouveau bébé&quot; &quot;Break Mums&quot;.
              </p>
              <p className="text-gray-600 mb-4">
                &quot;Break Mums&quot; est un projet unique, né d&apos;une envie profonde de concevoir un espace où l&apos;équilibre entre la vie personnelle et professionnelle devient réalité dans une atmosphère chaleureuse.
              </p>
              <p className="text-gray-600 mb-4">
                Les séjours proposés ont pour but de permettre aux mamans de souffler, se ressourcer, échanger avec d&apos;autres mamans tout en prenant soin d&apos;elles.
              </p>
              <p className="text-gray-600">
                Mon but est de créer des séjours insolites dans des lieux choisis avec soin, tout en proposant des activités liant bien-être, créativité et relaxation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-16 bg-[#F5F0FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-4">Nos <span className="text-[#A89CD7]">valeurs</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chez Break Mums, nous croyons fermement en ces principes qui guident toutes nos actions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#8A7BC8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8A7BC8] mb-4 text-center">Bienveillance</h3>
              <p className="text-gray-600 text-center">
                Nous créons un espace sécurisant où chaque maman est accueillie avec respect et sans jugement, quels que soient son parcours et ses choix.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#A89CD7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#A89CD7] mb-4 text-center">Authenticité</h3>
              <p className="text-gray-600 text-center">
                Nous encourageons chaque maman à se connecter à sa véritable nature et à exprimer ses besoins authentiques, loin des pressions sociales.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#8A7BC8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8A7BC8] mb-4 text-center">Équilibre</h3>
              <p className="text-gray-600 text-center">
                Nous aidons les mamans à trouver leur propre équilibre entre prendre soin d&apos;elles-mêmes et prendre soin des autres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-6">Notre <span className="text-[#A89CD7]">mission</span></h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Notre mission chez Break Mums est d&apos;accompagner les mamans dans leur voyage vers un équilibre de vie épanouissant. Nous croyons fermement qu&apos;une maman épanouie rayonne sur toute sa famille.
              </p>
              <p>
                À travers nos retraites, nous souhaitons offrir aux mamans :
              </p>
              <ul className="list-disc pl-6 text-left space-y-2">
                <li>Un espace pour se reconnecter à elles-mêmes et à leurs besoins</li>
                <li>Des outils concrets pour gérer le stress et les défis du quotidien</li>
                <li>Une communauté bienveillante de soutien et de partage</li>
                <li>Des moments de détente et de ressourcement dans des cadres exceptionnels</li>
                <li>Une expérience transformatrice qui les accompagne bien au-delà de la retraite</li>
              </ul>
              <p className="mt-6">
                Nous nous engageons à créer des expériences sur mesure qui respectent le rythme et les besoins de chaque maman, tout en proposant un accompagnement professionnel et chaleureux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#8A7BC8] via-[#A89CD7] to-[#C3B1E1] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prête à vivre l&apos;expérience Break Mums ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez-nous pour une retraite qui vous permettra de vous reconnecter à vous-même et de repartir ressourcée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/lieux" 
              className="bg-[#8A7BC8] hover:bg-[#A89CD7] text-white transition-colors px-6 py-3 rounded-full text-lg font-medium inline-block"
            >
              Découvrir nos lieux
            </a>
            <a 
              href="/contact" 
              className="bg-white text-[#8A7BC8] hover:bg-[#F5F0FF] border-2 border-white transition-colors px-6 py-3 rounded-full text-lg font-medium inline-block"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
