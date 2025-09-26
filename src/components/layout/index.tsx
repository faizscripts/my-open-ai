import { useState } from 'react';
import Sidebar from '../sidebar';
import styles from './layout.module.scss';
import Home from '../home';

export default function Layout(): React.JSX.Element {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const sidebarToggle = (): void => setIsSidebarOpen((previousState: boolean): boolean => !previousState);

    return(
        <div className={ `${styles.wrapper} ${isSidebarOpen ? styles.open : styles.closed}` }>
            <Sidebar isSidebarOpen={ isSidebarOpen } sidebarToggle={ sidebarToggle } />
            <div  className={ styles.mainContent }>
                <Home sidebarToggle={ sidebarToggle } />
            </div>
        </div>
    );
}
