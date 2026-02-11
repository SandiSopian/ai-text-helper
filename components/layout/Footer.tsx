import React from "react";
import { Courgette } from "next/font/google";

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-red-400  p-6 text-white mt-10 dark:bg-gray-900">
      <h1 className="text-2xl md:text-3xl">AI Text Helper</h1>
      <p className={`${courgette.className} mb-6 max-w-xs text-center`}>
        From simple ideas to impactful writing, crafted effortlessly with AI
        assistance.
      </p>

      <div className="mt-10 text-sm flex gap-4 flex-wrap">
        <a href="/caption-instagram">Caption Instagram</a>
        <a href="/caption-jualan-online">Caption Jualan Online</a>
        <a href="/caption-promosi-wa">Caption Promosi WA</a>
        <a href="/parafrase-kalimat">Parafrase Kalimat</a>
        <a href="/ringkas-teks-otomatis">Ringkas Teks</a>
      </div>

      <div className="w-full border-t border-gray-300 my-2"></div>

      <p>© 2026 AI Text Helper. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
