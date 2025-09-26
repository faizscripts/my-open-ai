import Input from '../input';
import styles from './chat-page.module.scss';
import MessageBubble from '../message-bubble';
import type { ChatPageProps } from '../../interfaces';
import type { Message } from '../../types';

export default function ChatPage ({ onSend, loading, messages }: ChatPageProps): React.JSX.Element {
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
                <Input onSend={ onSend } loading={ loading } />
            </div>
        </div>
    );
}
