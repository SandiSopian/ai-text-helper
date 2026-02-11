import Link from "next/link";

export const metadata = {
  title: "AI Ringkas Teks Otomatis Online Gratis",
  description:
    "Ringkas teks panjang menjadi poin-poin penting secara otomatis dengan AI. Gratis, cepat, dan tanpa login.",
};

export default function RingkasTeksOtomatisPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">
        AI Ringkas Teks Otomatis Online Gratis
      </h1>

      <p className="mb-4">
        Punya teks panjang, artikel, atau paragraf yang terlalu panjang untuk
        dibaca? Gunakan AI kami untuk meringkas teks secara otomatis menjadi
        poin-poin penting hanya dalam hitungan detik.
      </p>

      <p className="mb-4">
        Tool ini sangat cocok untuk pelajar, mahasiswa, penulis, dan siapa saja
        yang ingin memahami inti dari sebuah teks tanpa harus membaca semuanya.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Cara Meringkas Teks dengan AI
      </h2>

      <ol className="list-decimal pl-6 space-y-2">
        <li>Masukkan teks panjang yang ingin diringkas.</li>
        <li>
          Pilih mode <b>Ringkas Teks</b>.
        </li>
        <li>Pilih gaya ringkasan yang diinginkan.</li>
        <li>Klik tombol Generate.</li>
      </ol>

      <div className="mt-10 p-6 border rounded-lg bg-gray-50">
        <h3 className="font-semibold mb-2">Coba Sekarang</h3>
        <p className="mb-4">
          Langsung gunakan AI Ringkas Teks di halaman utama.
        </p>
        <Link
          href="/"
          className="inline-block border px-6 py-3 hover:bg-black hover:text-white transition"
        >
          Buka AI Ringkas Teks
        </Link>
      </div>

      <h2 className="text-xl font-semibold mt-10 mb-3">Kelebihan Tool Ini</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Gratis digunakan tanpa login</li>
        <li>Hasil ringkasan cepat dan jelas</li>
        <li>Bisa digunakan untuk artikel, berita, jurnal, dll</li>
        <li>Mendukung berbagai gaya bahasa</li>
      </ul>
    </div>
  );
}
