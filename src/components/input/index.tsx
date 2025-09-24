import styles from './input.module.scss';

export default function Input (): React.JSX.Element {
    return (
        <input type="text" placeholder="Ask anything..." className={ `${styles.wrapper} form-control` } />
    );
}
