import type { Message, OnSend } from '../types';

export interface BaseSendProps {
    onSend: OnSend;
    loading: boolean;
}

export interface ChatPageProps extends BaseSendProps {
    messages: Message[];
}
