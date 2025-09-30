import { getModel, handlerWrapper } from './gemini-client.js';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const model = getModel('gemini-2.5-flash-lite');

const SYSTEM_INSTRUCTION = 'You are a chat title generator. Analyze the text and return a short, single-line, descriptive title for the conversation. Do not include any extra text or quotation marks, only the title.';

async function titleHandler(req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
    const userMessage = req.body.message as string;
    if (!userMessage) {
        return res.status(400).json({ status: 'error', error: 'Missing "message".' });
    }

    const result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: `Generate a title for the following request: "${userMessage}"` }] }],
        systemInstruction: SYSTEM_INSTRUCTION,
        generationConfig: {
            maxOutputTokens: 20
        }
    });

    return res.status(200).json({ status: 'success', title: result.response.text() });
}

export default handlerWrapper('POST', titleHandler);
