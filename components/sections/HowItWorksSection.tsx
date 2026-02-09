import {
  MagnifyingGlassCircleIcon,
  PencilSquareIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const steps = [
  {
    icon: PencilSquareIcon,
    title: "Langkah 1",
    heading: "Masukkan teks atau ide Anda",
    desc: `Tulis teks, kalimat, atau ide dasar yang ingin Anda olah di kolom input. Bisa berupa paragraf yang ingin diringkas, kalimat yang ingin diperbaiki, atau ide mentah yang ingin dikembangkan. Semakin jelas teks yang Anda masukkan, semakin optimal hasil yang akan diberikan oleh AI.`,
  },
  {
    icon: MagnifyingGlassCircleIcon,
    title: "Langkah 2",
    heading: "Pilih mode, gaya, dan karakter penulisan",
    desc: `Tentukan bagaimana teks Anda akan diproses. Pilih mode seperti penulis caption, ringkas teks, lanjutkan teks, perbaiki teks, parafrase, atau ubah nada. Lalu sesuaikan gaya bahasa dan karakter penulisan sesuai kebutuhan Anda.`,
  },
  {
    icon: SparklesIcon,
    title: "Langkah 3",
    heading: "Klik Generate dan dapatkan hasilnya",
    desc: `Setelah semua opsi dipilih, klik tombol Generate dan biarkan AI memproses teks Anda. Jika hasil belum sesuai, Anda bisa menyesuaikan pilihan lalu generate ulang hingga mendapatkan hasil terbaik.`,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-14">
        Cara Menggunakan AI-Text-Helper
      </h1>

      <div className="relative max-w-6xl mx-auto">
        {/* Garis penghubung desktop */}
        <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-gray-200" />

        <div className="grid md:grid-cols-3 gap-10 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="text-center flex flex-col items-center relative"
              >
                {/* Icon bulat */}
                <div className="bg-orange-500 shadow-md shadow-orange-200 text-white p-4 rounded-full z-10">
                  <Icon className="w-8 h-8" />
                </div>

                <h2 className="mt-6 font-semibold text-lg">{step.title}</h2>
                <h3 className="font-semibold mt-2">{step.heading}</h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
