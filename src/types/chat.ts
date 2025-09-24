export const Role = {
    User: 'user',
    Assistant: 'assistant',
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export interface MessageBubbleProps {
    role: Role;
    children: React.ReactNode;
}
