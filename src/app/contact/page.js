"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  // État pour le formulaire
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: ""
  });

  // État pour le message de confirmation
  const [messageEnvoye, setMessageEnvoye] = useState(false);

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
    console.log("Données du formulaire:", formData);
    // Afficher le message de confirmation
    setMessageEnvoye(true);
    // Réinitialiser le formulaire
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      sujet: "",
      message: ""
    });
    // Faire disparaître le message après 5 secondes
    setTimeout(() => {
      setMessageEnvoye(false);
    }, 5000);
  };

  return (
    <div className="w-full">
      {/* En-tête de page */}
      <section className="relative py-20 bg-[#8A7BC8] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Femme écrivant dans un carnet"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8A7BC8]/80 via-[#A89CD7]/70 to-[#C3B1E1]/60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez <span className="text-[#f27e96]">Mam&apos;zen</span> <span className="text-[#00a69c]">Attitude</span></h1>
          <p className="text-xl max-w-3xl mx-auto">
            Nous sommes à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre démarche.
          </p>
        </div>
      </section>

      {/* Section principale */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Informations de contact */}
            <div>
              <h2 className="text-3xl font-bold text-[#8A7BC8] mb-6">Contactez-nous</h2>
              <p className="text-gray-600 mb-8">
                Vous avez des questions sur nos retraites, vous souhaitez en savoir plus sur notre concept ou vous avez besoin d&apos;informations supplémentaires ? N&apos;hésitez pas à nous contacter, nous serons ravis de vous répondre.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#F5F0FF] rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-[#A89CD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#8A7BC8]">Téléphone</h3>
                    <p className="text-gray-600">+33 6 12 34 56 78</p>
                    <p className="text-sm text-gray-500 mt-1">Du lundi au vendredi, 9h-18h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#F5F0FF] rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-[#A89CD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#8A7BC8]">Email</h3>
                    <p className="text-gray-600">contact@mamzen-attitude.fr</p>
                    <p className="text-sm text-gray-500 mt-1">Nous vous répondons sous 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#F5F0FF] rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-[#A89CD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#8A7BC8]">Adresse</h3>
                    <p className="text-gray-600">123 Avenue de la Sérénité</p>
                    <p className="text-gray-600">75001 Paris, France</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-[#8A7BC8] mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#F5F0FF] hover:bg-[#F0E4FF] text-[#A89CD7] p-3 rounded-full transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#F5F0FF] hover:bg-[#F0E4FF] text-[#A89CD7] p-3 rounded-full transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#F5F0FF] hover:bg-[#F0E4FF] text-[#A89CD7] p-3 rounded-full transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Formulaire de contact */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#8A7BC8] mb-6">Envoyez-nous un <span className="text-[#f27e96]">message</span></h2>
                
                {/* Message de confirmation */}
                {messageEnvoye && (
                  <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                    <strong className="font-bold">Merci !</strong>
                    <span className="block sm:inline"> Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.</span>
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
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                    <select 
                      id="sujet" 
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information">Demande d&apos;informations</option>
                      <option value="reservation">Réservation d&apos;une retraite</option>
                      <option value="partenariat">Proposition de partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
                      placeholder="Votre message"
                      required
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
                      className="w-full bg-[#f27e96] hover:bg-[#e06c84] text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                      Envoyer mon message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 bg-[#F5F0FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-4">Questions <span className="text-[#00a69c]">fréquentes</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vous trouverez peut-être déjà la réponse à votre question
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#8A7BC8] mb-3">Comment réserver une retraite ?</h3>
              <p className="text-gray-600">
                Pour réserver une retraite, rendez-vous sur la page &quot;Nos retraites&quot;, sélectionnez la retraite qui vous intéresse et cliquez sur le bouton &quot;Réserver&quot;. Vous serez guidé à travers le processus de réservation et de paiement.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#8A7BC8] mb-3">Puis-je annuler ma réservation ?</h3>
              <p className="text-gray-600">
                Oui, vous pouvez annuler votre réservation jusqu&apos;à 30 jours avant la date de début de la retraite avec un remboursement complet. Entre 30 et 15 jours, 50% du montant sera remboursé. Moins de 15 jours avant, aucun remboursement ne sera possible, mais vous pourrez reporter votre participation à une autre date.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#8A7BC8] mb-3">Que dois-je apporter pour la retraite ?</h3>
              <p className="text-gray-600">
                Nous vous enverrons une liste détaillée des choses à apporter après votre réservation. En général, prévoyez des vêtements confortables pour les activités, une tenue pour les séances de yoga, des chaussures de marche, des produits de toilette et tout médicament dont vous pourriez avoir besoin.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#8A7BC8] mb-3">Les repas sont-ils inclus ?</h3>
              <p className="text-gray-600">
                Oui, tous les repas sont inclus dans le prix de la retraite. Nous proposons une cuisine saine, équilibrée et majoritairement bio. Si vous avez des allergies ou des restrictions alimentaires, veuillez nous en informer lors de votre réservation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#8A7BC8] mb-3">Faut-il avoir de l&apos;expérience en yoga ou méditation ?</h3>
              <p className="text-gray-600">
                Non, aucune expérience préalable n&apos;est nécessaire. Nos activités sont adaptées à tous les niveaux, des débutants aux plus expérimentés. Nos instructeurs vous guideront pas à pas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section carte */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8A7BC8] mb-4">Où nous trouver</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre bureau principal est situé au cœur de Paris
            </p>
          </div>
          
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            {/* Dans un projet réel, vous intégreriez ici une carte Google Maps ou autre */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Carte interactive (Google Maps)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
