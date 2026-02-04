"use client";
import React, { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";

type Props = {
  setResult: (value: string) => void;
  setIsLoading: (value: boolean) => void;
};

const Input = ({ setResult, setIsLoading }: Props) => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("caption");
  const [style, setStyle] = useState("santai");
  const [character, setCharacter] = useState("storytelling");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setIsLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, mode, style }),
      });

      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      setResult("Terjadi kesalahan saat memanggil AI.");
    } finally {
      setLoading(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex gap-12">
      {/* INPUT TEXT */}
      <div className="flex flex-col gap-2 w-2/3">
        <h2 className="font-semibold">Input Teks Anda</h2>
        <textarea
          placeholder="Masukkan teks di sini..."
          className="border p-4 h-60 resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* OPTIONS */}
      <div className="flex flex-col w-1/3">
        <div className="flex flex-col gap-4 mt-6 mb-8">
          {/* MODE */}
          <div className="flex items-center">
            <label className="mr-4">Mode:</label>
            <select
              className="border p-2"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="caption">Penulis Caption</option>
              <option value="ringkas">Ringkas Teks</option>
              <option value="lanjutkan_teks">Lanjutkan Teks</option>
              <option value="perbaiki_teks">Perbaiki Teks</option>
              <option value="parafrase">Parafrase</option>
              <option value="ubah_nada">Ubah Nada</option>
            </select>
          </div>

          {/* STYLE */}
          <div className="flex items-center">
            <label className="mr-4">Gaya:</label>
            <select
              className="border p-2"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option value="santai">Santai</option>
              <option value="formal">Formal</option>
              <option value="semi-formal">Semi-Formal</option>
              <option value="friendly">Friendly</option>
              <option value="profesional">Profesional</option>
            </select>
          </div>

          {/* CHARACTER */}
          <div className="flex items-center">
            <label className="mr-4">Character:</label>
            <select
              className="border p-2"
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
            >
              <option value="storytelling">Storytelling</option>
              <option value="persuasif">Persuasif</option>
              <option value="to_the_point">To The Point</option>
              <option value="deskriptif">Deskriptif</option>
              <option value="edukatif">Edukatif</option>
            </select>
          </div>
        </div>

        {/* BUTTON */}

        <button
          onClick={handleGenerate}
          className="border bg-[#fe718d] text-white border-black text-xl font-bold p-2 hover:cursor-pointer hover:bg-[#ff5c75] transition disabled:opacity-50"
          disabled={!text || loading}
        >
          {loading ? (
            "Loading..."
          ) : (
            <>
              <div className="flex items-center justify-center">
                <SparklesIcon className="w-6 h-6 group-hover:rotate-12 transition mr-1" />
                GENERATE
              </div>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Input;
