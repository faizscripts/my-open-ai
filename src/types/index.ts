export type Role = 'user' | 'assistant';

export type Message = {
    role: Role;
    text: string
};

export type OnSend = (text: string) => void;
