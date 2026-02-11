"use client";
import { useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Apa itu AI-Text-Helper?",
    answer:
      "AI-Text-Helper adalah alat berbasis AI yang membantu Anda mengolah teks dengan berbagai mode seperti membuat caption, meringkas, memperbaiki teks, parafrase, melanjutkan teks, hingga mengubah nada penulisan sesuai kebutuhan Anda.",
  },
  {
    question: "Apakah AI-Text-Helper gratis digunakan?",
    answer:
      "Ya. Anda dapat menggunakan AI-Text-Helper secara gratis tanpa perlu login atau registrasi.",
  },
  {
    question: "Apa perbedaan Parafrase dan Perbaiki Teks?",
    answer:
      "Parafrase menulis ulang teks Anda dengan susunan kalimat berbeda namun maknanya tetap sama. Perbaiki teks fokus merapikan tata bahasa, ejaan, dan struktur tanpa mengubah isi tulisan.",
  },
  {
    question: "Teks apa saja yang bisa diproses?",
    answer:
      "Anda dapat memasukkan paragraf, ide mentah, caption, deskripsi, atau teks panjang untuk diringkas dan diolah sesuai mode yang dipilih.",
  },
  {
    question: "Apa fungsi pilihan Gaya dan Character?",
    answer:
      "Gaya menentukan nada bahasa (santai, formal, profesional, dll), sedangkan Character menentukan cara penyampaian teks (storytelling, persuasif, to the point, deskriptif, edukatif).",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12">
        FAQs AI-Text-Helper
      </h2>

      <div className="flex flex-col gap-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border rounded-xl p-6 transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>
                <div className="transition-transform duration-300">
                  {isOpen ? (
                    <XMarkIcon className="w-6 h-6 rotate-90" />
                  ) : (
                    <PlusIcon className="w-6 h-6" />
                  )}
                </div>
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
