"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, Users, Zap, Sparkles, ChevronRight } from "lucide-react";
/* eslint-disable react/no-unescaped-entities */

export default function ORBeyondLanding() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // ferme le menu mobile après clic
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-950/40 via-black to-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-400 font-minecraft">
            OR BEYOND
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <button
              onClick={() => scrollTo("features")}
              className="text-gray-300 hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Features
            </button>
            <button
              onClick={() => scrollTo("download")}
              className="text-gray-300 hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Ready to play?
            </button>
            <button
              onClick={() => scrollTo("community")}
              className="text-gray-300 hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Community
            </button>
            <a
              href="https://modrinth.com/modpack/origin-realms-beyond"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2 font-minecraft"
            >
              <Download size={20} />
              Download
            </a>
          </div>

          {/* Hamburger Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black/90 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out border-t border-orange-500/20 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 px-6 py-4">
            <button
              onClick={() => scrollTo("features")}
              className="text-gray-300 hover:text-white text-lg font-semibold transition-all hover:translate-x-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Features
            </button>
            <button
              onClick={() => scrollTo("download")}
              className="text-gray-300 hover:text-white text-lg font-semibold transition-all hover:translate-x-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Ready to play?
            </button>
            <button
              onClick={() => scrollTo("community")}
              className="text-gray-300 hover:text-white text-lg font-semibold transition-all hover:translate-x-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Community
            </button>
            <a
              href="https://modrinth.com/modpack/origin-realms-beyond"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-all hover:scale-105 flex items-center gap-2 font-minecraft w-fit mx-auto"
            >
              <Download size={20} />
              Download
            </a>
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
                The Origin Realms Beyond modpack is designed to enhance your
                Origin Realms experience with improved visuals, performance, and
                quality-of-life features — all while staying true to the
                server’s unique gameplay. This modpack ensures a smooth and
                immersive experience by including optimization mods that make it
                run better than vanilla Minecraft.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("download")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <Download size={24} />
                  Download Now
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-black hover:bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Learn More
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="bg-black rounded-2xl p-8 border border-orange-500/30 backdrop-blur">
              {/* HERO IMAGE PLACEHOLDER */}
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/pictures/ORB_Campaign.png"
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
            FEATURES
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles size={32} />,
                title: "Beauty & Technology",
                description:
                  "Combine high-qyality visuals and advanced technology to enhance the game's appearance and create a more immersive experience",
              },
              {
                icon: <Zap size={32} />,
                title: "Optimized Performance",
                description:
                  "Enjoy a smooth experience thanks to our optimizations",
              },
              {
                icon: <Users size={32} />,
                title: "Quality of life",
                description:
                  "Focus on quality of life improvements to make gameplay easier and more enjoyable",
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
            DISCOVER THE PACK
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-black rounded-xl overflow-hidden border border-orange-500/20 hover:border-orange-500/50 transition-all"
              >
                {/* SHOWCASE IMAGE */}
                <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center">
                  {item === 1 ? (
                    <Image
                      src="/images/pictures/tyler.png"
                      alt="OR Beyond Showcase 1"
                      width={1000}
                      height={562}
                      className="rounded-lg object-cover"
                    />
                  ) : item === 2 ? (
                    <Image
                      src="/images/pictures/orb_menu.png"
                      alt="OR Beyond Showcase 2"
                      width={1000}
                      height={562}
                      className="rounded-lg object-cover"
                    />
                  ) : item === 3 ? (
                    <Image
                      src="/images/pictures/orb_dark.png"
                      alt="OR Beyond Showcase 3"
                      width={1000}
                      height={562}
                      className="rounded-lg object-cover"
                    />
                  ) : (
                    <Image
                      src="/images/pictures/orb_badger.png"
                      alt="OR Beyond Showcase 4"
                      width={1000}
                      height={562}
                      className="rounded-lg object-cover"
                    />
                  )}
                </div>

                {/* DESCRIPTION */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-minecraft">
                    {item === 1
                      ? "Immersive World"
                      : item === 2
                      ? "Enhanced Interface"
                      : item === 3
                      ? "Dark Aesthetic"
                      : "New Tools!"}
                  </h3>
                  <p
                    className="text-gray-400"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item === 1
                      ? "Explore vibrant landscapes enhanced with new visual depth and lighting that elevate the Origin Realms experience"
                      : item === 2
                      ? "A redesigned menu that combines style and clarity for a seamless modded experience"
                      : item === 3
                      ? "Experience the unique dark theme overhaul that brings a mysterious and cinematic atmosphere to your adventures"
                      : "You can now play easily thanks to our well selected quality of life mods"}
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
            READY TO PLAY?
          </h2>
          <p
            className="text-xl text-gray-300 mb-12"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Download OR Beyond now and start your adventure
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
                  Included Mods
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
                  Minecraft Version
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
                  Recommended RAM
                </div>
              </div>
            </div>

            <a
              href="https://modrinth.com/modpack/origin-realms-beyond"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-3 mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Download size={28} />
              Download OR Beyond
            </a>
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
            JOIN THE COMMUNITY
          </h2>
          <p
            className="text-xl text-gray-300 mb-12"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Enjoy playing the best Minecraft experience ;)
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black rounded-xl p-8 border border-orange-500/20">
              {/* Discord Logo */}
              <div className="w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/Logos/Logo_Discord.png"
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
                Join our Discord server to chat, get help, and share your
                feedback
              </p>
              <a
                href="https://discord.gg/wf2FgjXPQV"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors inline-block text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Join Discord
              </a>
            </div>

            <div className="bg-black rounded-xl p-8 border border-orange-500/20">
              {/* Modrinth Logo */}
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/Logos/Logo_Modrinth_Dark.png"
                  alt="Modrinth Logo"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-minecraft">
                Modrinth
              </h3>
              <p
                className="text-gray-400 mb-6"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Download the latest version of the OR Beyond modpack
              </p>
              <a
                href="https://modrinth.com/modpack/origin-realms-beyond"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors inline-block text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Go on Modrinth
              </a>
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
            Created with passion for the Origin Realms community
          </p>
          <p
            className="text-gray-500 text-sm mt-2"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            © 2025 OR Beyond. Not affiliated with Origin Realms - Made by Snay
            &lt;3
          </p>
        </div>
      </footer>
    </div>
  );
}
/* eslint-enable react/no-unescaped-entities */
