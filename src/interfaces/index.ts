import type { Message } from '../types';

export interface AppContextInterface {
    threads: Thread[];
    activeThread: Thread | null;
    activeThreadId: string | null;
    setActiveThreadId: (id: string | null) => void;
    onSubmitMessage: (userText: string) => Promise<void>;
}

export interface SidebarProps {
    isSidebarOpen: boolean;
    sidebarToggle: () => void;
}

export interface Thread {
    id: string;
    title: string;
    messages: Message[];
    loading: boolean;
}
