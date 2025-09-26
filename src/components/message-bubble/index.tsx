import ReactMarkdown from 'react-markdown';
import styles from './message-bubble.module.scss';
import type { Message } from '../../types';

export default function MessageBubble({ message } : { message: Message }): React.JSX.Element {

    const formatAIResponse = (text: string): string => {
        if (!text) return '';

        let formatted = text;
        formatted = formatted.replace(/(\d+)\.\s+/g, '\n$1. ');
        formatted = formatted.replace(/(^|\n)[-*]\s+/g, '\n- ');
        formatted = formatted.replace(/`{1}([^`\n]+)`{1}/g, '```\n$1\n```');
        formatted = formatted.replace(/(^|\n)(#{1,6})\s+/g, '\n$2 ');
        formatted = formatted.trim();
        return formatted;
    };

    return (
        <div className={ `${styles.message} ${styles[message.role]}` }>
            <ReactMarkdown>
                { formatAIResponse(message.text) }
            </ReactMarkdown>
        </div>
    );
}
