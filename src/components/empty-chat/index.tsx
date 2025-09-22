import styles from './empty-chat.module.scss';

export default function EmptyChat(): React.JSX.Element {
    return (
        <div className={ styles.wrapper }>
            <p className={ styles.heading }>Hello, what can I help with?</p>
            <input type="text" placeholder="Ask anything..." className={ `${styles.input} form-control` } />
        </div>
    );
}
