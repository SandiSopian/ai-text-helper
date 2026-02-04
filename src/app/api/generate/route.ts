import { NextResponse } from "next/server";
import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { text, mode, style, character } = await req.json();

    // 🎯 MODE = tujuan output
    const modeInstruction: Record<string, string> = {
      caption:
        "Write a short and engaging social media caption (1-3 sentences).",
      ringkas: "Summarize the text into 5 clear key points.",
      lanjutkan_teks:
        "Continue the text naturally with coherent flow and same context.",
      perbaiki_teks:
        "Fix grammar, spelling, and sentence structure to make the text clearer and more readable without changing its meaning.",
      parafrase:
        "Rewrite the text using different wording without changing its meaning.",
      ubah_nada:
        "Rewrite the text into the requested tone without changing its meaning.",
    };

    // 🎨 STYLE = tone bahasa
    const styleInstruction = `Use a ${style} tone.`;

    // ✍️ CHARACTER = cara menulis
    const characterInstruction: Record<string, string> = {
      storytelling: "Write in a storytelling manner as if telling a story.",
      persuasif: "Write in a persuasive way that convinces the reader.",
      to_the_point: "Be concise, direct, and straight to the point.",
      deskriptif: "Use descriptive language that paints a clear picture.",
      edukatif: "Write in an educational and explanatory manner.",
    };

    const prompt = `
You must respond in the SAME language as the input text.

Task:
${modeInstruction[mode] || "Rewrite the text."}
${styleInstruction}
${characterInstruction[character] || ""}

Follow the instruction strictly based on the requested output format.
Do not add explanations outside the result.

Input text:
"${text}"
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
    });

    const output =
      completion.choices[0].message.content || "Gagal mengambil respon AI.";

    return NextResponse.json({ result: output });
  } catch (error) {
    console.error("GROQ ERROR:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada AI" },
      { status: 500 },
    );
  }
}
