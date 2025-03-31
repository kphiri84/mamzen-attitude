import Image from "next/image";

export default function APropos() {
  return (
    <div className="w-full">
      {/* En-tête de page */}
      <section className="relative py-20 bg-[#8A7BC8] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Groupe de femmes partageant un moment ensemble"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8A7BC8]/80 via-[#A89CD7]/70 to-[#C3B1E1]/60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de <span className="text-[#f27e96]">Mam&apos;zen</span> <span className="text-[#00a69c]">Attitude</span></h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez notre histoire, nos valeurs et notre mission pour vous accompagner dans votre parcours de maman.
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
                alt="Fondatrice de Mam'zen Attitude"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#8A7BC8] mb-6">Mon <span className="text-[#f27e96]">histoire</span></h2>
              <p className="text-gray-600 mb-4">
                Maman de trois enfants, mon parcours professionnel initial en tant qu&apos;aide médico-psychologique pendant de nombreuses années a profondément nourri mon désir de prendre soin des autres et de contribuer à leur épanouissement. Cette expérience m&apos;a permis de développer des qualités essentielles comme l&apos;empathie, une écoute attentive et une capacité à gérer les situations avec douceur et compréhension - des valeurs que j&apos;ai toujours placées au cœur de mes interactions.
              </p>
              <p className="text-gray-600 mb-4">
                Aujourd&apos;hui, forte de cette riche expérience humaine, j&apos;ai choisi de donner un nouvel élan à ma carrière en créant des séjours de retraite dédiés spécialement aux mamans. Ce projet est né d&apos;une envie profonde de concevoir un espace où l&apos;équilibre entre vie personnelle et professionnelle devient réalité, tout en me permettant d&apos;exprimer pleinement mes qualités relationnelles et mon sens de l&apos;organisation, dans une atmosphère bienveillante.
              </p>
              <p className="text-gray-600">
                Imaginez un lieu accueillant, comme un château chaleureux, où les mamans pourraient se retrouver pour une parenthèse enchantée. Un espace de détente pensé pour elles, pour qu&apos;elles puissent échanger, partager leurs expériences de vie et surtout, se sentir écoutées et comprises, dans une ambiance harmonieuse et conviviale. Je suis convaincue que mon cheminement dans le secteur du soin, où l&apos;écoute et l&apos;attention aux besoins de l&apos;autre étaient primordiales, est un atout précieux pour tisser ces séjours uniques. Mon rêve est d&apos;offrir à ces mamans un temps rien qu&apos;à elles, une véritable bulle de bien-être où elles pourront se ressourcer en toute sérénité et repartir le cœur léger et rempli d&apos;énergie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-16 bg-[#F5F0FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-4">Nos <span className="text-[#00a69c]">valeurs</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chez Mam&apos;zen Attitude, nous croyons fermement en ces principes qui guident toutes nos actions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#f27e96] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
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
              <div className="bg-[#00a69c] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8A7BC8] mb-4 text-center">Authenticité</h3>
              <p className="text-gray-600 text-center">
                Nous encourageons chaque maman à se connecter à sa véritable nature et à exprimer ses besoins authentiques, loin des pressions sociales.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#f27e96] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
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
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-6">Notre <span className="text-[#00a69c]">mission</span></h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Notre mission chez Mam&apos;zen Attitude est d&apos;accompagner les mamans dans leur voyage vers un équilibre de vie épanouissant. Nous croyons fermement qu&apos;une maman épanouie rayonne sur toute sa famille.
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
          <h2 className="text-3xl font-bold mb-4">Prête à vivre l&apos;expérience Mam&apos;zen Attitude ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez-nous pour une retraite qui vous permettra de vous reconnecter à vous-même et de repartir ressourcée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/retraites" 
              className="bg-[#f27e96] hover:bg-[#e06c84] text-white transition-colors px-6 py-3 rounded-full text-lg font-medium inline-block"
            >
              Découvrir nos retraites
            </a>
            <a 
              href="/contact" 
              className="bg-[#00a69c] hover:bg-[#008c83] text-white transition-colors px-6 py-3 rounded-full text-lg font-medium inline-block"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
