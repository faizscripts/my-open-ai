import { createContext, type ReactNode, useContext, useState } from 'react';
import { generateChatTitle, sendMessage } from '../services/chat-service.ts';
import type { AppContextInterface, Thread } from '../interfaces';
import type { Role } from '../types';

const AppContext = createContext<AppContextInterface | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
    const [threads, setThreads] = useState<Thread[]>([]);
    const [activeThreadId, setActiveThreadId] = useState<string | null>(null);

    const activeThread = threads.find((thread: Thread) => thread.id === activeThreadId) || null;

    const createThread = (title: string): Thread => {
        const id = crypto.randomUUID();
        const newThread: Thread = {
            id,
            title,
            messages: [],
            loading: false,
        };
        setThreads((previous: Thread[]) => [...previous, newThread]);
        setActiveThreadId(id);

        return newThread;
    };

    const updateThreadTitle = (threadId: string, title: string): void => {
        setThreads((previous: Thread[]) =>
            previous.map((thread: Thread) =>
                thread.id === threadId
                    ? { ...thread, title }
                    : thread
            )
        );
    };

    const addMessage = (threadId: string, role: Role, text: string): void => {
        setThreads((previous: Thread[]) =>
            previous.map((thread: Thread) =>
                thread.id === threadId
                    ? {
                        ...thread,
                        loading: role === 'user',
                        messages: [...thread.messages, { role, text }]
                      }
                    : thread
            )
        );
    };

    const onSubmitMessage = async (userText: string): Promise<void> => {
        let threadId = activeThreadId;
        let titlePromise: Promise<string> | null = null;

        if (!threadId) {
            const newThread = createThread('Loading title...');
            threadId = newThread.id;
            titlePromise = generateChatTitle(userText);
        }

        addMessage(threadId, 'user', userText);

        const reply = await sendMessage(userText);

        addMessage(threadId, 'assistant', reply);

        if (titlePromise) {
            try {
                const threadTitle = await titlePromise;
                updateThreadTitle(threadId, threadTitle);
            } catch (error) {
                console.error('Failed to generate title, keeping default.', error);
                updateThreadTitle(threadId, 'New Chat');
            }
        }
    };

    return (
        <AppContext.Provider value={ {
            threads,
            activeThread,
            activeThreadId,
            setActiveThreadId,
            onSubmitMessage,
        } }>
            { children }
        </AppContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = (): AppContextInterface => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
