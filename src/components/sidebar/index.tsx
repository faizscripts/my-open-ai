import { MoveLeft, MoveRight, Plus } from 'lucide-react';
import styles from './sidebar.module.scss';
import { useBootstrapTooltip } from '../../hooks/useBootstrapTooltip.ts';

export default function Sidebar({isSidebarOpen, handleToggle}: {isSidebarOpen: boolean, handleToggle: () => void}): React.JSX.Element {

    useBootstrapTooltip([isSidebarOpen]);

    const ToggleIcon = isSidebarOpen ? MoveLeft : MoveRight;

    const newChatButton = (): React.JSX.Element => {
        if (isSidebarOpen) {
            return (
                <div className={styles.newChat}>
                    <Plus />
                    <span>New chat</span>
                </div>
            )
        }

        return (
            <div className={`${styles.newChat} ${styles.iconOnly}`}>
                <Plus  data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="New chat" />
            </div>
        )

    }

    return (
        <>
            {isSidebarOpen && <div className={styles.backdrop} onClick={handleToggle}></div>}

            <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
                <ToggleIcon
                    className={styles.toggleButton}
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-title={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                    aria-label="sidebar toggle"
                    onClick={handleToggle}/>

                {newChatButton()}

                {isSidebarOpen &&
                <>
                    <h5 className="text-muted">Chats</h5>
                    <ul className={styles.chatList}>
                        <li className={styles.chatItem}>Chat 1</li>
                        <li className={styles.chatItem}>Chat 2</li>
                        <li className={styles.chatItem}>Chat 3</li>
                        <li className={styles.chatItem}>Chat 4</li>
                        <li className={styles.chatItem}>Chat 5</li>
                        <li className={styles.chatItem}>Chat 6</li>
                        <li className={styles.chatItem}>Chat 7</li>
                        <li className={styles.chatItem}>Chat 8</li>
                        <li className={styles.chatItem}>Chat 9</li>
                        <li className={styles.chatItem}>Chat 10</li>
                        <li className={styles.chatItem}>Chat 11</li>
                        <li className={styles.chatItem}>Chat 12</li>
                        <li className={styles.chatItem}>Chat 13</li>
                        <li className={styles.chatItem}>Chat 14</li>
                        <li className={styles.chatItem}>Chat 15</li>
                        <li className={styles.chatItem}>Chat 16</li>
                        <li className={styles.chatItem}>Chat 17</li>
                        <li className={styles.chatItem}>Chat 18</li>
                        <li className={styles.chatItem}>Chat 19</li>
                        <li className={styles.chatItem}>Chat 20</li>
                    </ul>
                </>}
            </div>
        </>
    )
}
