import { createContext, type ReactNode, useContext, useState } from 'react';
import { sendMessage } from '../services/chat-service.ts';
import type { AppContextInterface } from '../interfaces';
import type { Message } from '../types';

const AppContext = createContext<AppContextInterface | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);

    async function onSubmitMessage(userText: string): Promise<void> {
        setMessages((prev: Message[]) => [...prev, { role: 'user', text: userText }]);
        setLoading(true);

        const reply = await sendMessage(userText);

        setMessages((prev: Message[]) => [...prev, { role: 'assistant', text: reply }]);
        setLoading(false);
    }

    return (
        <AppContext.Provider value={ { loading, messages, onSubmitMessage } }>
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
