import { useEffect, useRef } from 'react';
import Input from '../input';
import styles from './chat-page.module.scss';
import { useAppContext } from '../../context/AppContext.tsx';
import MessageBubble from '../message-bubble';
import type { Message } from '../../types';

export default function ChatPage (): React.JSX.Element {
    
    const { activeThread } = useAppContext();

    const lastMessageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const lastMessageIndex = (activeThread?.messages.length || 0) - 1;

        if (lastMessageIndex >= 0 && lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [activeThread?.messages.length]);

    return (
        <div className={ styles.wrapper }>
            <div className={ styles.chats }>
                <div className={ styles.messagesWrapper }>
                    { activeThread?.messages.map((message: Message, index: number) => {
                        const isLastMessage = index === (activeThread.messages.length - 1);

                        return (
                            <MessageBubble
                                key={ index }
                                message={ message }
                                ref={ isLastMessage ? lastMessageRef : null }
                            />
                        );
                    }) }
                    { activeThread?.loading && <div className={ styles.thinking }> Thinking... </div> }
                </div>
            </div>
            <div className={ styles.inputWrapper }>
                <Input />
            </div>
        </div>
    );
}
