import { MoveLeft, MoveRight, Plus } from 'lucide-react';
import styles from './sidebar.module.scss';
import { useAppContext } from '../../context/AppContext.tsx';
import { useBootstrapTooltip } from '../../hooks/useBootstrapTooltip.ts';
import type { SidebarProps, Thread } from '../../interfaces';

export default function Sidebar({ isSidebarOpen, sidebarToggle }: SidebarProps): React.JSX.Element {
    
    const { threads, activeThreadId, setActiveThreadId } = useAppContext();

    useBootstrapTooltip([isSidebarOpen]);

    const ToggleIcon = isSidebarOpen ? MoveLeft : MoveRight;

    const newChatButton = (): React.JSX.Element => {
        if (isSidebarOpen) {
            return (
                <div className={ styles.newChat } onClick={ addNewChat }>
                    <Plus /> New chat
                </div>
            );
        }

        return (
            <div className={ `${styles.newChat} ${styles.iconOnly}` } onClick={ addNewChat }>
                <Plus  data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="New chat" />
            </div>
        );

    };

    const addNewChat = (): void => {
        setActiveThreadId(null);
    };

    const onChatSelect = (id: string): void => {
        setActiveThreadId(id);
    };

    return (
        <>
            { isSidebarOpen && <div className={ styles.backdrop } onClick={ sidebarToggle }></div> }

            <div className={ `${styles.wrapper} ${isSidebarOpen ? styles.open : styles.closed}` }>
                <ToggleIcon
                    className={ styles.toggleButton }
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-title={ isSidebarOpen ? 'Close sidebar' : 'Open sidebar' }
                    aria-label="sidebar toggle"
                    onClick={ sidebarToggle } />

                { newChatButton() }

                { isSidebarOpen && threads.length > 0 &&
                <>
                    <h5>Chats</h5>
                    <ul className={ styles.chatList }>
                        { threads.map((thread: Thread, index: number) => (
                            <li
                                key={ index }
                                className={ `${styles.chatItem} ${activeThreadId === thread.id && styles.active}` }
                                onClick={ () => onChatSelect(thread.id) }>
                                { thread.title }
                            </li>
                        )) }
                    </ul>
                </> }
            </div>
        </>
    );
}
