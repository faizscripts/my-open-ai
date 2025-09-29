import styles from './home.module.scss';
import { useAppContext } from '../../context/AppContext.tsx';
import ChatPage from '../chat-page';
import EmptyChat from '../empty-chat';
import Navbar from '../navbar';

export default function Home ({ sidebarToggle }: {sidebarToggle: () => void}): React.JSX.Element {
    
    const { activeThread } = useAppContext();

    return(
        <div className={ styles.wrapper }>
            <Navbar sidebarToggle={ sidebarToggle } />
            <div className={ styles.main }>
                { !activeThread || activeThread.messages.length === 0 ? (
                    <EmptyChat />
                ) : (
                    <ChatPage />
                ) }
            </div>
        </div>
    );
}
