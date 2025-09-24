import styles from './hero.module.scss';
// import EmptyChat from '../empty-chat';
import ChatPage from '../chat-page';
import Navbar from '../navbar';

export default function Hero ({ sidebarToggle }: {sidebarToggle: () => void}): React.JSX.Element {
    return(
        <div className={ styles.wrapper }>
            <Navbar sidebarToggle={ sidebarToggle } />
            <div className={ styles.main }>
                { /*<EmptyChat />*/ }
                <ChatPage />
            </div>
        </div>
    );
}
