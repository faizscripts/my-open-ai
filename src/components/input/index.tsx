import { type ChangeEvent, useEffect, useRef, useState } from 'react';
import { SendHorizontal } from 'lucide-react';
import styles from './input.module.scss';
import type { BaseSendProps } from '../../interfaces';

export default function Input ({ onSend, loading }: BaseSendProps): React.JSX.Element {

    const [input, setInput] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [input]);

    useEffect(() => {
        if (!loading) {
            textareaRef.current?.focus();
        }
    }, [loading]);


    const handleSend = (): void => {
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setInput(e.target.value);
    };
    
    return (
        <div className={ styles.wrapper }>
            <textarea
                 ref={ textareaRef }
                 value={ input }
                 onChange={ handleChange }
                 onKeyDown={ handleKeyDown }
                 placeholder="Ask anything..."
                 rows={ 1 }
                 className={ styles.inputField }
                 disabled={ loading } />
            <button onClick={ handleSend } className={ styles.submitButton } disabled={ loading }>
                <SendHorizontal />
            </button>
        </div>
    );
}
