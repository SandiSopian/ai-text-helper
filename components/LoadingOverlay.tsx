"use client";
import React from "react";

type Props = {
  isLoading: boolean;
};

const LoadingOverlay = ({ isLoading }: Props) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-4">
        <img src="/Dual-Ring.gif" alt="Loading..." className="w-20 h-20" />
        <p className="text-gray-700 font-medium">
          AI sedang memproses teks kamu...
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
