import type { Message } from '../types';

export interface AppContextInterface {
    messages: Message[];
    loading: boolean;
    onSubmitMessage: (userText: string) => Promise<void>;
}

export interface SidebarProps {
    isSidebarOpen: boolean;
    sidebarToggle: () => void;
}
