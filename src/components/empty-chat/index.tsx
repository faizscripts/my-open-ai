import styles from './empty-chat.module.scss';
import Input from '../input';

export default function EmptyChat(): React.JSX.Element {
    return (
        <div className={ styles.wrapper }>
            <p className={ styles.heading }>Hello, what can I help with?</p>
            <Input />
        </div>
    );
}
