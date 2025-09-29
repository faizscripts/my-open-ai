import Input from '../input';
import styles from './chat-page.module.scss';
import { useAppContext } from '../../context/AppContext.tsx';
import MessageBubble from '../message-bubble';
import type { Message } from '../../types';

export default function ChatPage (): React.JSX.Element {
    
    const { activeThread } = useAppContext();
    
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.chats }>
                <div className={ styles.messagesWrapper }>
                    { activeThread?.messages.map((message: Message, index: number) => (
                        <MessageBubble key={ index } message={ message } />
                    )) }
                    { activeThread?.loading && <div className={ styles.thinking }> Thinking... </div> }
                </div>
            </div>
            <div className={ styles.inputWrapper }>
                <Input />
            </div>
        </div>
    );
}
