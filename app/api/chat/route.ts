import { OpenAI } from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    // 1. LEAD CAPTURE LOGIC
    const phoneRegex = /(\d{10,11})/;
    if (phoneRegex.test(lastMessage)) {
      const makeUrl = 'https://hook.eu2.make.com/3xyovacqohu9x7np8fpgsu'; 
      fetch(makeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          lead_info: lastMessage, 
          source: 'BearFusion Expert Bot'
        }),
      }).catch(err => console.error("Make Error:", err));
    }

    // 2. AI RESPONSE WITH KNOWLEDGE BASE
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        {
        
         role: 'system',
          content: `You are BearFusion PRO, a specialized Home Services Assistant for UK.
          
          YOUR PRICE LIST:
          - Emergency Leak: £120
          - Faucet/Tap Replacement: £85
          - Boiler Service: £110
          - Toilet Unclogging: £95
          
          YOUR GOAL:
          1. Quote prices from the list above.
          2. If the user mentions a problem, ask for their Name and Phone Number to book a technician.
          3. Be professional, polite, and helpful.`
        },
        ...messages,
      ],
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}
