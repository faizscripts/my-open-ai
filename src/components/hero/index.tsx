import { useState } from 'react';
import styles from './hero.module.scss';
import { sendMessage } from '../../services/chat-service.ts';
import ChatPage from '../chat-page';
import EmptyChat from '../empty-chat';
import Navbar from '../navbar';
import type { Message } from '../../types';

export default function Hero ({ sidebarToggle }: {sidebarToggle: () => void}): React.JSX.Element {

    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    async function handleSend(userText: string): Promise<void> {
        setMessages((prev: Message[]) => [...prev, { role: 'user', text: userText }]);
        setLoading(true);

        const reply = await sendMessage(userText);

        setMessages((prev: Message[]) => [...prev, { role: 'assistant', text: reply }]);
        setLoading(false);
    }

    return(
        <div className={ styles.wrapper }>
            <Navbar sidebarToggle={ sidebarToggle } />
            <div className={ styles.main }>
                { messages.length === 0 ? (
                    <EmptyChat onSend={ handleSend } loading={ loading } />
                ) : (
                    <ChatPage onSend={ handleSend } loading={ loading } messages={ messages } />
                ) }
            </div>
        </div>
    );
}
