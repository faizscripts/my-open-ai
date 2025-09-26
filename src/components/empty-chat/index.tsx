import styles from './empty-chat.module.scss';
import Input from '../input';
import type { BaseSendProps } from '../../interfaces';

export default function EmptyChat({ onSend, loading }: BaseSendProps): React.JSX.Element {
    return (
        <div className={ styles.wrapper }>
            <p className={ styles.heading }>Hello, what can I help with?</p>
            <Input onSend={ onSend } loading={ loading } />
        </div>
    );
}
