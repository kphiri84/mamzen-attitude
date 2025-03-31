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
      alt: "Méditation face à l'océan",
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
      alt: "Villa face à l'océan",
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
      alt: "Petit-déjeuner face à l'océan",
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
      {/* En-tête de page */}
      <section className="relative py-20 bg-[#f27e96] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Femme prenant des photos"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f27e96]/80 via-[#e06c84]/70 to-[#ff99cc]/60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galerie <span className="text-[#00a69c]">d'images</span></h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez en images nos retraites et activités
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
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#f27e96] focus:border-[#f27e96]"
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
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00a69c] focus:border-[#00a69c]"
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
                    <h3 className="text-white font-semibold">{image.alt}</h3>
                    <p className="text-white/80 text-sm">{image.lieu}</p>
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
    </div>
  );
}
