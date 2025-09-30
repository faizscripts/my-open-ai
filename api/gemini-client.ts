import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import * as dotenv from 'dotenv';
import type { VercelRequest, VercelResponse } from '@vercel/node';

dotenv.config({ quiet: true });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is not set.');
}
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export function getModel(modelName: string = 'gemini-2.5-flash-lite'): GenerativeModel {
    return genAI.getGenerativeModel({ model: modelName });
}

export function handlerWrapper(
    allowedMethod: 'POST' | 'GET',
    handler: (req: VercelRequest, res: VercelResponse) => Promise<VercelResponse>
) {
    return async function (req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
        if (req.method !== allowedMethod) {
            return res.status(405).json({ status: 'error', error: 'Method Not Allowed' });
        }

        try {
            return await handler(req, res);
        } catch (err: unknown) {
            console.error('API Handler Error:', err);
            const errorMessage = (err as Error)?.message || 'An unknown internal server error occurred.';
            return res.status(500).json({
                status: 'error',
                error: errorMessage
            });
        }
    };
}
