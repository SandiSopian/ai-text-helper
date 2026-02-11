export const metadata = {
  title: "AI Pembuat Caption Promosi WA Otomatis Gratis",
  description:
    "Buat caption promosi WhatsApp jualan online otomatis dengan AI. Gratis tanpa login, cepat, dan siap copy untuk status WA.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">
        Contoh & Generator Caption Promosi WA Otomatis
      </h1>

      <p className="mb-4">
        Bingung menulis caption promosi WhatsApp untuk jualan? Gunakan AI untuk
        membuat caption promosi WA otomatis, cepat, dan gratis.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Contoh Caption Promosi WA
      </h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Promo spesial hari ini! Diskon hingga 50% hanya sampai malam.</li>
        <li>Butuh [produk]? Kami siap kirim cepat ke seluruh Indonesia.</li>
        <li>Stok terbatas! Chat sekarang sebelum kehabisan.</li>
      </ul>

      <a
        href="/"
        className="inline-block mt-10 border px-6 py-3 font-semibold hover:bg-gray-100"
      >
        Buat Caption Promosi WA Sekarang →
      </a>
    </div>
  );
}
