import { NextResponse } from "next/server";
import { listLlmModels } from "@/lib/llm";

export async function GET() {
  try {
    const models = await listLlmModels();
    return NextResponse.json(models);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch models" }, { status: 500 });
  }
}
