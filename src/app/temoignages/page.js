import Image from "next/image";
import Link from "next/link";

export default function Temoignages() {
  // Données des témoignages (dans un projet réel, ces données viendraient d'une API ou d'une base de données)
  const temoignages = [
    {
      id: 1,
      nom: "Sophie Martin",
      age: 34,
      enfants: "Maman de 2 enfants (5 et 8 ans)",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3",
      retraite: "Lieu Printemps en Provence",
      texte: "Cette retraite a été une véritable bouffée d'oxygène pour moi. Après des mois de routine intense entre le travail et les enfants, j'avais besoin de me retrouver. Les ateliers de méditation m'ont particulièrement aidée à prendre conscience de mes besoins et à apprendre à m'accorder du temps sans culpabiliser. J'ai rencontré des femmes formidables avec qui j'ai pu partager mes expériences de maman. Je suis rentrée chez moi ressourcée et avec de nouveaux outils pour mon quotidien. Merci Mam'zen Attitude pour cette expérience transformatrice !"
    },
    {
      id: 2,
      nom: "Laura Dubois",
      age: 39,
      enfants: "Maman de 3 enfants (4, 7 et 10 ans)",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      retraite: "Évasion Océane en Bretagne",
      texte: "J'hésitais beaucoup à m'accorder ces quelques jours loin de ma famille, mais c'est finalement mon mari qui m'a poussée à le faire, voyant mon épuisement. Quelle révélation ! Les séances de yoga face à l'océan, les balades sur la plage, les partages avec les autres mamans... tout était parfait. J'ai appris à écouter mon corps et à respecter mes limites. Cette retraite m'a permis de revenir à l'essentiel et de me reconnecter à moi-même. Je suis rentrée plus sereine et plus présente pour ma famille. Une expérience que je recommande à toutes les mamans qui se sentent débordées."
    },
    {
      id: 3,
      nom: "Nathalie Petit",
      age: 42,
      enfants: "Maman de jumeaux (6 ans)",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3",
      retraite: "Ressourcement Automnal dans les Alpes",
      texte: "En tant que maman de jumeaux, je n'avais jamais pris le temps de m'occuper de moi depuis leur naissance. Cette retraite dans les Alpes a été un véritable cadeau. L'air pur de la montagne, le cadre magnifique et la bienveillance de l'équipe m'ont permis de lâcher prise complètement. J'ai particulièrement apprécié les ateliers sur la gestion du stress qui m'ont donné des outils concrets pour mon quotidien. Les randonnées en pleine conscience m'ont aussi beaucoup apporté. Je repars avec une nouvelle énergie et surtout, j'ai compris l'importance de prendre soin de moi pour être une meilleure maman."
    },
    {
      id: 4,
      nom: "Émilie Rousseau",
      age: 36,
      enfants: "Maman d'une fille (3 ans)",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
      retraite: "Lieu Printemps en Provence",
      texte: "Depuis la naissance de ma fille, j'avais l'impression d'avoir perdu mon identité, de n'être plus qu'une maman. Cette retraite m'a permis de me reconnecter à la femme que je suis. Les ateliers créatifs et les cercles de parole ont été de véritables révélations pour moi. J'ai pu exprimer mes doutes, mes peurs, mais aussi redécouvrir mes passions. L'ambiance était tellement bienveillante et chaleureuse ! J'ai noué des amitiés précieuses avec d'autres mamans qui vivent les mêmes défis que moi. Cette expérience a transformé ma façon d'aborder mon rôle de mère et m'a rappelé l'importance de prendre soin de moi."
    },
    {
      id: 5,
      nom: "Caroline Leroy",
      age: 41,
      enfants: "Maman de 2 enfants (9 et 12 ans)",
      photo: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3",
      retraite: "Évasion Océane en Bretagne",
      texte: "J'ai participé à la retraite en Bretagne après une période particulièrement difficile dans ma vie personnelle. J'avais besoin de me retrouver, de faire le point. Le cadre face à l'océan était parfait pour cela. Les séances de yoga au lever du soleil, les méditations guidées et les moments de partage m'ont profondément touchée. J'ai pu me libérer de certaines émotions négatives et retrouver confiance en moi. L'équipe de Mam'zen Attitude est extraordinaire, à l'écoute et bienveillante. Cette retraite a été un véritable tournant dans ma vie. Je me suis promise de m'accorder ce cadeau chaque année."
    },
    {
      id: 6,
      nom: "Marie Bertrand",
      age: 37,
      enfants: "Maman de 3 enfants (2, 5 et 8 ans)",
      photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      retraite: "Ressourcement Automnal dans les Alpes",
      texte: "Avec trois enfants dont un tout-petit, je me sentais complètement submergée. Cette retraite dans les Alpes est arrivée au bon moment. J'ai adoré le rythme des journées, alternant moments de détente, activités en groupe et temps pour soi. Les repas étaient délicieux et les chambres très confortables. J'ai particulièrement apprécié les ateliers sur la parentalité positive qui m'ont donné des clés pour gérer les conflits à la maison. Je suis repartie avec une nouvelle vision de mon rôle de mère et des outils pratiques. Merci pour cette parenthèse enchantée !"
    }
  ];

  return (
    <div className="w-full">
      {/* En-tête de page simple */}
      <section className="py-16 pt-24 bg-[#8A7BC8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Témoignages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez les expériences vécues par les mamans lors de nos séjours
          </p>
        </div>
      </section>

      {/* Section des témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-4">Paroles de mamans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ces mamans ont participé à nos séjours et partagent leur expérience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {temoignages.map((temoignage) => (
              <div key={temoignage.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 relative border-2 border-[#8A7BC8]">
                      <Image 
                        src={temoignage.photo} 
                        alt={temoignage.nom} 
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#8A7BC8]">{temoignage.nom}</h3>
                      <p className="text-gray-500">{temoignage.age} ans, {temoignage.enfants}</p>
                      <p className="text-[#8A7BC8] text-sm">{temoignage.retraite}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">&quot;{temoignage.texte}&quot;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-[#8A7BC8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prête à vivre votre propre expérience ?</h2>
          <p className="text-lg text-white max-w-3xl mx-auto mb-8">
            Rejoignez-nous pour un séjour qui vous permettra de vous reconnecter à vous-même et de repartir ressourcée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/lieux" 
              className="bg-[#8A7BC8] hover:bg-[#A89CD7] text-white transition-colors px-6 py-3 rounded-full text-lg font-medium inline-block border-2 border-white"
            >
              Découvrir nos lieux
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-[#8A7BC8] hover:bg-[#F5F0FF] transition-colors px-6 py-3 rounded-full text-lg font-medium inline-block"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
