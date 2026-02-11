import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Pembuat Caption Jualan Online Otomatis Gratis",
  description:
    "Buat caption jualan online, caption promosi WhatsApp, Instagram, dan marketplace secara otomatis dengan AI. Gratis, cepat, dan tanpa ribet.",
};

export default function CaptionJualanOnlinePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">
        AI Pembuat Caption Jualan Online Otomatis Gratis
      </h1>

      <p className="mb-4">
        Bingung bikin caption jualan yang menarik? Sekarang kamu bisa membuat
        caption promosi WhatsApp, Instagram, Shopee, dan marketplace lainnya
        secara otomatis menggunakan AI.
      </p>

      <p className="mb-4">
        Cukup masukkan deskripsi produk, lalu biarkan AI membuatkan caption
        jualan yang menarik, persuasif, dan siap pakai.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">
        Contoh Caption Jualan Online
      </h2>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          “Lagi cari skincare yang aman dan bikin glowing? Coba produk ini,
          diskon 20% hari ini!”
        </li>
        <li>
          “Stok terbatas! Tas premium dengan harga terjangkau, cocok untuk kerja
          dan hangout.”
        </li>
        <li>
          “Mau rumah wangi sepanjang hari? Diffuser aromaterapi ini solusinya!”
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-4">
        Cara Membuat Caption Jualan Otomatis
      </h2>

      <ol className="list-decimal ml-6 mb-10 space-y-2">
        <li>Masukkan deskripsi produk yang ingin dijual.</li>
        <li>Pilih gaya caption yang diinginkan.</li>
        <li>AI akan membuatkan caption jualan secara instan.</li>
      </ol>

      <Link
        href="/"
        className="inline-block border px-6 py-3 font-semibold hover:bg-gray-100 transition"
      >
        Coba Buat Caption Sekarang
      </Link>
    </div>
  );
}
