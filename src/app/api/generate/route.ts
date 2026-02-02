import { NextResponse } from "next/server";
import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { text, mode, style } = await req.json();

    let prompt = "";

    if (mode === "caption") {
      prompt = `Buat caption ${style} dan menarik dari teks berikut:\n${text}`;
    } else if (mode === "ringkas") {
      prompt = `Ringkas teks berikut menjadi 5 poin dengan gaya ${style}:\n${text}`;
    } else {
      prompt = `Ubah teks berikut menjadi gaya ${style}:\n${text}`;
    }

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
