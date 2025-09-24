import Input from '../input';
import styles from './chat-page.module.scss';
import { Role } from '../../types/chat.ts';
import MessageBubble from '../message-bubble';

export default function ChatPage (): React.JSX.Element {
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.chats }>
                <MessageBubble role={ Role.User }>
                    How can I improve my CSS layout so the last element scrolls without affecting the whole page?
                </MessageBubble>

                <MessageBubble role={ Role.Assistant }>
                    <p>
                        To make only the last element scrollable, you need to ensure that all
                        of its parent containers can shrink properly.
                    </p>
                    <p>
                        Once that is in place, you can give the target element{ ' ' }
                        <code>flex: 1</code> and <code>overflow-y: auto</code>.
                    </p> 
                </MessageBubble>

                <MessageBubble role={ Role.User }>
                    Thank you, that answered my question.
                </MessageBubble>

                <MessageBubble role={ Role.Assistant }>
                    You're welcome!, is there anything else I can help you with?
                </MessageBubble>
            </div>
            <div className={ styles.inputWrapper }>
                <Input />
            </div>
        </div>
    );
}
