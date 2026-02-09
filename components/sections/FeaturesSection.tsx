import React from "react";
import {
  ComputerDesktopIcon,
  PaintBrushIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const featur = [
  {
    icon: ComputerDesktopIcon,
    heading: "Berbagai Mode Penulisan Sesuai Kebutuhan Anda",
    desc: `AI-Text-Helper menyediakan beragam mode penulisan yang bisa langsung
          Anda pilih sesuai kebutuhan. Ingin membuat caption? Meringkas teks
          panjang? Melanjutkan tulisan yang terhenti? Memperbaiki kalimat yang
          berantakan? Melakukan parafrase? Atau mengubah nada tulisan? Semua
          bisa dilakukan hanya dengan memilih mode yang tersedia—tanpa perlu
          menulis ulang dari awal.`,
  },

  {
    icon: PaintBrushIcon,
    heading: "Atur Gaya Bahasa Sesuai Konteks",
    desc: `Setiap teks memiliki konteks yang berbeda. Karena itu, Anda dapat
          menyesuaikan gaya bahasa mulai dari santai, formal, semi-formal,
          friendly, hingga profesional. Dengan pilihan ini, teks yang
          dihasilkan tidak terasa kaku atau generik, tetapi menyesuaikan
          dengan tujuan dan audiens Anda.`,
  },

  {
    icon: UserIcon,
    heading: "Pilih Karakter Penulisan yang Anda Inginkan",
    desc: `Selain gaya bahasa, Anda juga dapat menentukan karakter penulisan
          seperti storytelling, persuasif, to the point, deskriptif, atau
          edukatif. Fitur ini membantu AI memahami bagaimana teks harus
          disampaikan, sehingga hasil akhirnya terasa lebih hidup, terarah,
          dan sesuai ekspektasi Anda.`,
  },
];

const FeaturesSection = () => {
  return (
    <>
      <div className="text-center border border-gray-200 bg-gradient-to-r from-rose-50 to-red-100 p-4 rounded-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Hasilkan Teks Berkualitas Secara Gratis
        </h1>

        <p>
          AI-Text-Helper dirancang untuk membantu Anda menghasilkan teks yang
          rapi, jelas, dan sesuai kebutuhan hanya dalam hitungan detik.
          Dibandingkan menulis secara manual yang memakan waktu dan energi, Anda
          cukup menjelaskan kebutuhan Anda dengan kata-kata sederhana. Tentukan
          gaya penulisan, panjang teks, atau tujuan penggunaannya, dan
          AI-Text-Helper akan menyesuaikan hasil teks berdasarkan input Anda
          secara instan—tanpa proses rumit dan tanpa biaya.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {featur.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="p-4">
              <h2 className="font-semibold text-lg mb-2">
                <span>
                  <Icon className="w-5 h-5 inline-block mr-2 text-blue-500" />
                </span>
                {feature.heading}
              </h2>
              <p>{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FeaturesSection;
