"use client";
import Input from "../../components/sections/Input";
import Result from "../../components/sections/Output";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-8">AI Text Helper</h1>

      <Input setResult={setResult} setIsLoading={setIsLoading} />

      {isLoading && <p className="mt-6">AI sedang memproses...</p>}

      <Result result={result} />
    </main>
  );
}
