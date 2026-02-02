"use client";
import React from "react";

type Props = {
  result: string;
};

const Result = ({ result }: Props) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    alert("Teks berhasil disalin!");
  };

  if (!result) return null;

  return (
    <div className="mt-10 border p-6">
      <h2 className="font-semibold mb-4">Hasil AI</h2>

      <div className="border p-4 min-h-[150px] whitespace-pre-wrap">
        {result}
      </div>

      <button
        onClick={handleCopy}
        className="mt-4 border px-4 py-2 hover:bg-gray-200 transition"
      >
        Copy
      </button>
    </div>
  );
};

export default Result;
