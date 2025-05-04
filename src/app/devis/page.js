"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Devis() {
  // État pour le formulaire
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    nombrePersonnes: "",
    dateDebut: "",
    dateFin: "",
    typeHebergement: "",
    typeTransport: "",
    activitesSpeciales: "",
    message: ""
  });

  // État pour le message de confirmation
  const [devisEnvoye, setDevisEnvoye] = useState(false);

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dans un projet réel, vous enverriez les données à votre backend ici
    console.log("Données du devis:", formData);
    // Afficher le message de confirmation
    setDevisEnvoye(true);
    // Réinitialiser le formulaire
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      nombrePersonnes: "",
      dateDebut: "",
      dateFin: "",
      typeHebergement: "",
      typeTransport: "",
      activitesSpeciales: "",
      message: ""
    });
    // Faire disparaître le message après 5 secondes
    setTimeout(() => {
      setDevisEnvoye(false);
    }, 5000);
  };

  return (
    <div className="w-full">
      {/* En-tête de page simple */}
      <section className="py-16 pt-24 bg-[#8A7BC8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Demande de devis</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Obtenez un devis personnalisé pour votre séjour Break Mums
          </p>
        </div>
      </section>

      {/* Section principale */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Informations sur les devis personnalisés */}
            <div>
              <h2 className="text-3xl font-bold text-[#8A7BC8] mb-6">Votre séjour sur mesure</h2>
              <p className="text-gray-600 mb-8">
                Chez Mam&apos;zen Attitude, nous comprenons que chaque maman a des besoins uniques. C&apos;est pourquoi nous vous proposons de créer un séjour entièrement personnalisé selon vos préférences.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#F5F0FF] rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-[#8A7BC8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#8A7BC8]">Durée flexible</h3>
                    <p className="text-gray-600">Choisissez la durée idéale pour votre séjour, de 2 jours à 1 semaine.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#F5F0FF] rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-[#8A7BC8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#8A7BC8]">Hébergement au choix</h3>
                    <p className="text-gray-600">Chambre individuelle, partagée ou suite luxueuse, selon votre budget et vos préférences.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#F5F0FF] rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-[#8A7BC8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#8A7BC8]">Activités à la carte</h3>
                    <p className="text-gray-600">Sélectionnez les activités qui vous intéressent le plus parmi notre large éventail d&apos;options.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#F5F0FF] rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-[#8A7BC8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#8A7BC8]">Groupe personnalisé</h3>
                    <p className="text-gray-600">Venez seule ou avec vos amies pour une expérience partagée.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Formulaire de devis */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#8A7BC8] mb-6">Demandez votre <span className="text-[#8A7BC8]">devis</span></h2>
                
                {/* Message de confirmation */}
                {devisEnvoye && (
                  <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                    <strong className="font-bold">Merci !</strong>
                    <span className="block sm:inline"> Votre demande de devis a bien été envoyée. Nous vous contacterons dans les 48 heures avec une proposition personnalisée.</span>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input 
                      type="text" 
                      id="nom" 
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
                        placeholder="Votre email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                      <input 
                        type="tel" 
                        id="telephone" 
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
                        placeholder="Votre téléphone"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="nombrePersonnes" className="block text-sm font-medium text-gray-700 mb-1">Nombre de personnes</label>
                    <select 
                      id="nombrePersonnes" 
                      name="nombrePersonnes"
                      value={formData.nombrePersonnes}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
                      required
                    >
                      <option value="">Sélectionnez</option>
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3-5">3 à 5 personnes</option>
                      <option value="6-10">6 à 10 personnes</option>
                      <option value="10+">Plus de 10 personnes</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="dateDebut" className="block text-sm font-medium text-gray-700 mb-1">Date de début souhaitée</label>
                      <input 
                        type="date" 
                        id="dateDebut" 
                        name="dateDebut"
                        value={formData.dateDebut}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="dateFin" className="block text-sm font-medium text-gray-700 mb-1">Date de fin souhaitée</label>
                      <input 
                        type="date" 
                        id="dateFin" 
                        name="dateFin"
                        value={formData.dateFin}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="typeHebergement" className="block text-sm font-medium text-gray-700 mb-1">Type d&apos;hébergement souhaité</label>
                    <select 
                      id="typeHebergement" 
                      name="typeHebergement"
                      value={formData.typeHebergement}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
                      required
                    >
                      <option value="">Sélectionnez</option>
                      <option value="chambre-partagee">Chambre partagée (économique)</option>
                      <option value="chambre-individuelle">Chambre individuelle (confort)</option>
                      <option value="chambre-premium">Chambre premium (luxe)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="typeTransport" className="block text-sm font-medium text-gray-700 mb-1">Type de transport souhaité</label>
                    <select 
                      id="typeTransport" 
                      name="typeTransport"
                      value={formData.typeTransport}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
                      required
                    >
                      <option value="">Sélectionnez</option>
                      <option value="aucun">Aucun (je viens par mes propres moyens)</option>
                      <option value="gare">Navette depuis la gare</option>
                      <option value="aeroport-partage">Navette partagée depuis l&apos;aéroport</option>
                      <option value="aeroport-prive">Navette privée depuis l&apos;aéroport</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="activitesSpeciales" className="block text-sm font-medium text-gray-700 mb-1">Activités spéciales souhaitées</label>
                    <select 
                      id="activitesSpeciales" 
                      name="activitesSpeciales"
                      value={formData.activitesSpeciales}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="yoga">Séances de yoga intensives</option>
                      <option value="spa">Journée spa complète</option>
                      <option value="randonnee">Randonnées guidées</option>
                      <option value="cuisine">Ateliers de cuisine</option>
                      <option value="meditation">Méditation et développement personnel</option>
                      <option value="excursion">Excursions culturelles</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Précisions et demandes particulières</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
                      placeholder="Détaillez vos souhaits pour ce séjour personnalisé"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      id="politique" 
                      type="checkbox" 
                      className="h-4 w-4 text-[#8A7BC8] focus:ring-[#8A7BC8] border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="politique" className="ml-2 block text-sm text-gray-700">
                      J&apos;accepte la politique de confidentialité et le traitement de mes données personnelles
                    </label>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-[#8A7BC8] hover:bg-[#A89CD7] text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                      Demander mon devis personnalisé
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section témoignages */}
      <section className="py-16 bg-[#F5F0FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-4">Ce que disent <span className="text-[#8A7BC8]">nos clientes</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les expériences de mamans qui ont vécu nos séjours personnalisés
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#C3B1E1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-[#8A7BC8]">Sophie M.</h3>
                  <p className="text-sm text-gray-500">Maman de 2 enfants</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;J&apos;ai pu créer un séjour exactement comme je le souhaitais. L&apos;équipe a été très à l&apos;écoute de mes besoins et a su me proposer des activités parfaitement adaptées à mes envies.&quot;
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#C3B1E1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  L
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-[#8A7BC8]">Laure D.</h3>
                  <p className="text-sm text-gray-500">Maman de 3 enfants</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;Grâce au devis personnalisé, j&apos;ai pu organiser une retraite pour mon groupe d&apos;amies mamans. Nous avons vécu un moment inoubliable, avec un programme sur mesure qui correspondait parfaitement à nos attentes.&quot;
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#C3B1E1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  C
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-[#8A7BC8]">Caroline B.</h3>
                  <p className="text-sm text-gray-500">Maman d&apos;un enfant</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;Le rapport qualité-prix de mon séjour personnalisé était excellent. J&apos;ai pu choisir uniquement ce qui m&apos;intéressait vraiment et adapter le budget à mes possibilités.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
