"use client";
import Input from "../../components/sections/Input";
import Result from "../../components/sections/Output";
import LoadingOverlay from "../../components/LoadingOverlay";
import { useState } from "react";
import WhySection from "../../components/sections/WhySection";
import FeaturesSection from "../../components/sections/FeaturesSection";
import HowItWorksSection from "../../components/sections/HowItWorksSection";
import FAQSection from "../../components/sections/FAQSection";
import Image from "next/image";

export default function Home() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="w-full mx-auto">
      <div className="p-8 bg-gradient-to-b from-red-200 to-white">
        <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold md:mb-8">
          <span>
            <Image
              src="/logo-website.png"
              alt="AI Text Helper Logo"
              width={60}
              height={60}
              className="inline-block mr-1"
            />
          </span>
          AI Text Helper
        </h1>

        <Input setResult={setResult} setIsLoading={setIsLoading} />

        <LoadingOverlay isLoading={isLoading} />
        {/* {isLoading && <p className="mt-6">AI sedang memproses...</p>} */}

        <h2 className="font-semibold text-lg mt-10">Hasil AI </h2>

        <div className="border p-6 rounded-lg min-h-[200px]">
          <Result result={result} />
        </div>
      </div>

      <div className="p-8">
        <WhySection />
      </div>

      <div className="p-8 bg-gradient-to-t from-red-50 to-white">
        <FeaturesSection />
      </div>

      <div className="p-8 bg-gradient-to-b from-red-50 to-white">
        <HowItWorksSection />
      </div>

      <div className="p-8">
        <FAQSection />
      </div>
    </main>
  );
}
