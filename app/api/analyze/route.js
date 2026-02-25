export async function POST(request) {
  const { prompt } = await request.json();
  
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: `You are AETHER's neuroaesthetic analysis engine. The user describes an experience/feeling/vibe. You must:
1. Analyze it through AETHER's 4 channels:
   - P (TWIST/Prediction): surprise, unpredictability, pattern-breaking (0-10)
   - E (INTENSITY/Embodied): physical sensation, bass, rhythm, body response (0-10)
   - S (SOUL/Self): personal meaning, nostalgia, identity, emotional depth (0-10)
   - R (CROWD/Relational): social connection, collective energy, togetherness (0-10)
2. Set authenticity (0.1-2.0), context keyword, and automation type.
3. Write a 2-3 sentence neuro-analysis explaining WHY you chose these values. Be specific about which neural pathways and psychological mechanisms are at play. Make it feel like a neuroscientist is explaining your feelings. Use "I'm" as if you're the engine speaking.

RESPOND ONLY WITH THIS EXACT JSON FORMAT, NO OTHER TEXT:
{"P":number,"E":number,"S":number,"R":number,"a3":number,"ctx":"context keyword","auto":"build|burst|dissolve|release|wave|steady","analysis":"Your 2-3 sentence neuro-analysis here"}`,
      messages: [{ role: "user", content: prompt }]
    })
  });
  
  const data = await response.json();
  return Response.json(data);
}
