import Input from '../input';
import styles from './chat-page.module.scss';
import { useAppContext } from '../../context/AppContext.tsx';
import MessageBubble from '../message-bubble';
import type { Message } from '../../types';

export default function ChatPage (): React.JSX.Element {
    
    const { loading, messages } = useAppContext();
    
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.chats }>
                <div className={ styles.messagesWrapper }>
                    { messages.map((message: Message, i: number) => (
                        <MessageBubble key={ i } message={ message } />
                    )) }
                    { loading && <div className={ styles.thinking }> Thinking... </div> }
                </div>
            </div>
            <div className={ styles.inputWrapper }>
                <Input />
            </div>
        </div>
    );
}
