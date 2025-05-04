"use client";

import { useState } from "react";
import Image from "next/image";

export default function Galerie() {
  // Données des images (dans un projet réel, ces données viendraient d'une API ou d'une base de données)
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Séance de yoga en plein air",
      categorie: "activites",
      lieu: "Provence"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Méditation face à l&apos;océan",
      categorie: "activites",
      lieu: "Bretagne"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Randonnée en montagne",
      categorie: "activites",
      lieu: "Alpes"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Atelier cuisine bien-être",
      categorie: "ateliers",
      lieu: "Provence"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Cercle de parole entre mamans",
      categorie: "ateliers",
      lieu: "Bretagne"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Massage relaxant",
      categorie: "bien-etre",
      lieu: "Alpes"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Hébergement en Provence",
      categorie: "lieux",
      lieu: "Provence"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1527142879-95b61a0916be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Villa face à l&apos;océan",
      categorie: "lieux",
      lieu: "Bretagne"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1520984032042-162d526883e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Chalet en montagne",
      categorie: "lieux",
      lieu: "Alpes"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Repas sain et équilibré",
      categorie: "repas",
      lieu: "Provence"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Petit-déjeuner face à l&apos;océan",
      categorie: "repas",
      lieu: "Bretagne"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Dîner convivial",
      categorie: "repas",
      lieu: "Alpes"
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Groupe de mamans en Provence",
      categorie: "groupes",
      lieu: "Provence"
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Groupe de mamans en Bretagne",
      categorie: "groupes",
      lieu: "Bretagne"
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Groupe de mamans dans les Alpes",
      categorie: "groupes",
      lieu: "Alpes"
    }
  ];

  // État pour le filtre actif
  const [filtreCategorie, setFiltreCategorie] = useState("toutes");
  const [filtreLieu, setFiltreLieu] = useState("tous");

  // Fonction pour filtrer les images
  const imagesFiltered = images.filter(image => {
    return (filtreCategorie === "toutes" || image.categorie === filtreCategorie) &&
           (filtreLieu === "tous" || image.lieu === filtreLieu);
  });

  return (
    <div className="w-full">
      {/* En-tête de page simple */}
      <section className="py-16 pt-24 bg-[#8A7BC8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galerie</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez en images les moments précieux de nos séjours Break Mums
          </p>
        </div>
      </section>

      {/* Section de filtres */}
      <section className="py-12 bg-[#F5F0FF]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <label htmlFor="categorie" className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
              <select 
                id="categorie" 
                value={filtreCategorie}
                onChange={(e) => setFiltreCategorie(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
              >
                <option value="toutes">Toutes les catégories</option>
                <option value="activites">Activités</option>
                <option value="ateliers">Ateliers</option>
                <option value="bien-etre">Bien-être</option>
                <option value="lieux">Lieux</option>
                <option value="repas">Repas</option>
                <option value="groupes">Groupes</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="lieu" className="block text-sm font-medium text-gray-700 mb-1">Lieu</label>
              <select 
                id="lieu" 
                value={filtreLieu}
                onChange={(e) => setFiltreLieu(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A7BC8] focus:border-[#8A7BC8]"
              >
                <option value="tous">Tous les lieux</option>
                <option value="Provence">Provence</option>
                <option value="Bretagne">Bretagne</option>
                <option value="Alpes">Alpes</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie d'images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {imagesFiltered.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg h-64">
                <div className="absolute inset-0">
                  <Image 
                    src={image.src} 
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{image.alt}</span>
                      <span className="bg-[#8A7BC8] text-white text-xs px-2 py-1 rounded-full">{image.lieu}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {imagesFiltered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">Aucune image ne correspond à vos critères de recherche.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#8A7BC8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Envie de vivre l'expérience Mam'zen Attitude ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez nos séjours conçus spécialement pour les mamans qui ont besoin de se ressourcer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/lieux" 
              className="bg-[#8A7BC8] hover:bg-[#A89CD7] text-white transition-colors px-6 py-3 rounded-full text-lg font-medium inline-block border-2 border-white"
            >
              Découvrir nos lieux
            </a>
            <a 
              href="/contact" 
              className="bg-white text-[#8A7BC8] hover:bg-[#F5F0FF] transition-colors px-6 py-3 rounded-full text-lg font-medium inline-block"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
