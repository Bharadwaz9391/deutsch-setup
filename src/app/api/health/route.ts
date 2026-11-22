// Backend health check. All AI calls (speech, teacher, voices) will live under /api
// so API keys stay on the server and never reach the phone.

export function GET() {
  return Response.json({
    status: "ok",
    app: "deutsch-setu",
    version: "0.1.0",
    aiConfigured: Boolean(process.env.GEMINI_API_KEY),
  });
}
