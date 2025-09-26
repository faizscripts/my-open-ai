import styles from './home.module.scss';
import { useAppContext } from '../../context/AppContext.tsx';
import ChatPage from '../chat-page';
import EmptyChat from '../empty-chat';
import Navbar from '../navbar';

export default function Home ({ sidebarToggle }: {sidebarToggle: () => void}): React.JSX.Element {
    
    const { messages } = useAppContext();

    return(
        <div className={ styles.wrapper }>
            <Navbar sidebarToggle={ sidebarToggle } />
            <div className={ styles.main }>
                { messages.length === 0 ? (
                    <EmptyChat />
                ) : (
                    <ChatPage />
                ) }
            </div>
        </div>
    );
}
