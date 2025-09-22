import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import styles from './layout.module.scss';

export default function Layout(): React.JSX.Element {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const sidebarToggle = (): void => setIsSidebarOpen((previousState: boolean): boolean => !previousState);

    return(
        <div className={ `${styles.wrapper} ${isSidebarOpen ? styles.open : styles.closed}` }>
            <Sidebar isSidebarOpen={ isSidebarOpen } sidebarToggle={ sidebarToggle } />
            <div  className={ styles.mainContent }>
                <main>
                    <Outlet context={ { sidebarToggle: sidebarToggle } } />
                </main>
            </div>
        </div>
    );
}
