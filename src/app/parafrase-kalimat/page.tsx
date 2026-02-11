export const metadata = {
  title: "Parafrase Kalimat Otomatis dengan AI Gratis",
  description:
    "Ubah kalimat menjadi versi berbeda tanpa mengubah makna dengan AI. Parafrase otomatis, cepat, dan gratis.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">
        Parafrase Kalimat Otomatis dengan AI
      </h1>

      <p className="mb-4">
        Ingin mengubah kalimat tanpa mengubah maknanya? Gunakan AI untuk
        parafrase otomatis dengan hasil natural.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contoh Parafrase</h2>
      <p className="mb-2">
        <strong>Asli:</strong> Produk ini sangat membantu pekerjaan saya.
      </p>
      <p>
        <strong>Parafrase:</strong> Produk ini mempermudah aktivitas kerja saya.
      </p>

      <a
        href="/"
        className="inline-block mt-10 border px-6 py-3 font-semibold hover:bg-gray-100"
      >
        Parafrase Kalimat Sekarang →
      </a>
    </div>
  );
}
