import styles from './message-bubble.module.scss';
import type { MessageBubbleProps } from '../../types/chat.ts';

export default function MessageBubble({ role, children }: MessageBubbleProps): React.JSX.Element {
    return (
        <div className={ `${styles.message} ${styles[role]}` }>
            { children }
        </div>
    );
}
