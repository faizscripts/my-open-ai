import { createContext, type ReactNode, useContext, useState } from 'react';
import { sendMessage } from '../services/chat-service.ts';
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

        if (!threadId) {
            const newThread = createThread('New Chat');
            threadId = newThread.id;
            setActiveThreadId(threadId);
        }

        addMessage(threadId, 'user', userText);

        const reply = await sendMessage(userText);

        addMessage(threadId, 'assistant', reply);
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
