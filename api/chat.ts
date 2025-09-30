import { getModel, handlerWrapper } from './gemini-client.js';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const model = getModel('gemini-2.5-flash-lite');

async function chatHandler(req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
    const userMessage = req.body.message as string;
    if (!userMessage) {
        return res.status(400).json({ status: 'error', error: 'Missing "message".' });
    }

    const result = await model.generateContent(userMessage);

    return res.status(200).json({ status: 'success', response: result.response.text() });
}

export default handlerWrapper('POST', chatHandler);
