import { type ForwardedRef, forwardRef } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './message-bubble.module.scss';
import type { Message } from '../../types';

const MessageBubble = forwardRef<HTMLDivElement, { message: Message }>(({ message }: { message: Message }, ref: ForwardedRef<HTMLDivElement>): React.JSX.Element => {

    return (
        <div ref={ ref } className={ `${styles.message} ${styles[message.role]}` }>
            <ReactMarkdown>
                { message.text }
            </ReactMarkdown>
        </div>
    );
});

export default MessageBubble;
