import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';
import type { VercelRequest, VercelResponse } from '@vercel/node';

dotenv.config({ quiet: true });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
    if (req.method !== 'POST') {
        return res.status(405).json({ status: 'error', error: 'Method Not Allowed' });
    }

    const userMessage = req.body.message as string;
    if (!userMessage) {
        return res.status(400).json({ status: 'error', error: 'Missing "message".' });
    }

    try {
        const result = await model.generateContent(userMessage);
        const replyText = result.response.text();

        return res.status(200).json({ status: 'success', response: replyText });
    } catch (err: unknown) {
        console.error('Gemini API Error:', err);
        return res.status(500).json({ status: 'error', error: err });
    }
}
