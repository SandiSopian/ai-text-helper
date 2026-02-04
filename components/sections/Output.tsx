"use client";
import React from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";

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
    <div className="p-2">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handleCopy}
          className="text-sm border border-gray-400 px-3 py-1 rounded hover:bg-gray-200 hover:cursor-pointer transition"
        >
          <ClipboardIcon className="w-4 h-4 inline-block mr-1" />
          Copy
        </button>
      </div>

      <div className="bg-white border-2 border-gray-300 rounded-md p-4 min-h-[180px] whitespace-pre-wrap leading-relaxed">
        {result}
      </div>
    </div>
  );
};

export default Result;
