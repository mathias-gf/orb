import React from "react";
import Image from "next/image";
import { Download, Users, Zap, Sparkles, ChevronRight } from "lucide-react";
{
  /* eslint-disable react/no-unescaped-entities */
}
export default function ORBeyondLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-950/40 via-black to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white font-minecraft">
            OR BEYOND
          </h1>

          <div className="flex gap-6 items-center">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Fonctionnalités
            </a>
            <a
              href="#download"
              className="text-gray-300 hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Télécharger
            </a>
            <a
              href="#community"
              className="text-gray-300 hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Communauté
            </a>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2 font-minecraft">
              <Download size={20} />
              Télécharger
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-white mb-6 font-minecraft">
                OR BEYOND
              </h1>
              <p
                className="text-xl text-gray-300 mb-8"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Explorez au-delà des limites. Un modpack qui repousse les
                frontières de Minecraft avec plus de 100 mods soigneusement
                sélectionnés.
              </p>
              <div className="flex gap-4">
                <button
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <Download size={24} />
                  Télécharger maintenant
                </button>
                <button
                  className="bg-black hover:bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  En savoir plus
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="bg-black rounded-2xl p-8 border border-orange-500/30 backdrop-blur">
              {/* ESPACE POUR IMAGE HERO */}
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/pictures/ORB_Menu.png"
                  alt="OR Beyond Menu"
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-16 font-minecraft">
            FONCTIONNALITÉS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles size={32} />,
                title: "Magie & Technologie",
                description:
                  "Combinez magie et technologie avancée pour créer des systèmes uniques",
              },
              {
                icon: <Zap size={32} />,
                title: "Performances Optimisées",
                description:
                  "Profitez d'une expérience fluide grâce à nos optimisations",
              },
              {
                icon: <Users size={32} />,
                title: "Multijoueur",
                description: "Jouez avec vos amis sur nos serveurs dédiés",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-black rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="text-orange-400 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 font-minecraft">
                  {feature.title}
                </h3>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Showcase Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-16 font-minecraft">
            DÉCOUVREZ LE PACK
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-black rounded-xl overflow-hidden border border-orange-500/20 hover:border-orange-500/50 transition-all"
              >
                {/* ESPACE POUR IMAGES SHOWCASE */}
                <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center">
                  <p
                    className="text-gray-400"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    [Screenshot {item}]
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-minecraft">
                    TITRE {item}
                  </h3>
                  <p
                    className="text-gray-400"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Description de cette fonctionnalité incroyable du modpack.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Download Section */}
      <section id="download" className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8 font-minecraft">
            PRÊT À JOUER ?
          </h2>
          <p
            className="text-xl text-gray-300 mb-12"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Téléchargez OR Beyond dès maintenant et commencez votre aventure
          </p>

          <div className="bg-black rounded-2xl p-8 border border-orange-500/30 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2 font-minecraft">
                  100+
                </div>
                <div
                  className="text-gray-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Mods inclus
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2 font-minecraft">
                  1.21.1
                </div>
                <div
                  className="text-gray-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Version Minecraft
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2 font-minecraft">
                  8GB
                </div>
                <div
                  className="text-gray-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  RAM recommandée
                </div>
              </div>
            </div>

            <button
              className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 flex items-center gap-3 mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Download size={28} />
              Télécharger OR Beyond
            </button>
          </div>

          <p
            className="text-gray-400 text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Available on Modrinth
          </p>
        </div>
      </section>
      {/* Community Section */}
      <section id="community" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8 font-minecraft">
            REJOIGNEZ LA COMMUNAUTÉ
          </h2>
          <p
            className="text-xl text-gray-300 mb-12"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Connectez-vous avec des milliers de joueurs du monde entier
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black rounded-xl p-8 border border-orange-500/20">
              {/* Logo Discord */}
              <div className="w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/Logos/Logo_ORB.png"
                  alt="OR Beyond Logo"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-minecraft">
                DISCORD
              </h3>
              <p
                className="text-gray-400 mb-6"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Rejoignez notre serveur Discord pour discuter, obtenir de l'aide
                et partager vos créations
              </p>
              <a
                href="https://discord.gg/wf2FgjXPQV"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors inline-block text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Rejoindre Discord
              </a>
            </div>

            <div className="bg-black rounded-xl p-8 border border-orange-500/20">
              {/* ESPACE POUR IMAGE WIKI */}
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <p
                  className="text-gray-400 text-xs"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  [Logo]
                </p>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-minecraft">
                WIKI
              </h3>
              <p
                className="text-gray-400 mb-6"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Consultez notre wiki complet pour des guides, tutoriels et
                informations détaillées
              </p>
              <button
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Consulter le Wiki
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black border-t border-orange-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-bold text-white mb-4 font-minecraft">
            OR BEYOND
          </div>
          <p
            className="text-gray-400 mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Créé avec passion pour la communauté Minecraft
          </p>
          <div className="flex gap-6 justify-center text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Discord
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              GitHub
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Wiki
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Support
            </a>
          </div>
          <p
            className="text-gray-500 text-sm mt-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            © 2025 OR Beyond. Non affilié à Mojang Studios. and origin realms :p
          </p>
        </div>
      </footer>
    </div>
  );
}
{
  /* eslint-enable react/no-unescaped-entities */
}
