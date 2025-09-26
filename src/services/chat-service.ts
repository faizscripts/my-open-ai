import axios from 'axios';

export async function sendMessage(message: string): Promise<string> {
    try {
        const res = await axios.post(
            'https://apifreellm.com/api/chat',
            { message },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const data = res.data as { status: string; response: string; error?: string };

        if (data.status === 'success') {
            return data.response!;
        }

        if (data.error?.toLowerCase().includes('limit')) {
            return 'You have reached the API usage limit. Please try again later.';
        }

        console.error('API responded with non-success status:', data.status, data.error);
        return `Error: ${data.error || 'Unknown error'}`;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                return `API Error: ${err.response.status} ${err.response.statusText}`;
            } else if (err.request) {
                return 'Network error: Unable to reach the AI service.';
            }
        }
        return `Unexpected error: ${(err as Error).message}`;
    }
}
