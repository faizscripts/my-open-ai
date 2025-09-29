import axios, { type AxiosError } from 'axios';

export async function sendMessage(message: string): Promise<string> {
    try {
        const response = await axios.post(
            '/api/chat',
            { message },
        );

        const data = response.data as { status: string; response: string; error?: string };

        if (data.status === 'success') {
            return data.response!;
        }

        return `API Error: ${data.error || 'Unknown server response'}`;
    } catch (err: unknown) {
        const error = err as AxiosError;

        if (error.response) {
            const errorData = error.response.data as { error?: string };
            const status = error.response.status;

            if (status === 429) {
                return 'You have reached the API usage limit. Please try again later.';
            }

            return `API Error (${status}): ${errorData.error || 'The server returned an error.'}`;

        } else if (error.request) {
            return 'Network error: Unable to reach the AI service.';
        } else {
            return `Unexpected client error: ${error.message}`;
        }
    }
}
