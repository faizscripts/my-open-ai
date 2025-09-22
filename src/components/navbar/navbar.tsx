import { Menu } from 'lucide-react';
import styles from './navbar.module.scss';

export default function Navbar({ sidebarToggle }: {sidebarToggle: () => void}): React.JSX.Element {
    return (
        <nav className={ styles.navContainer }>
            <Menu className={ styles.mobileMenu } onClick={ sidebarToggle } />
            <img src="/logo.webp" alt="logo" className={ styles.logo } />
            <span className={ styles.heading }>My Open AI</span>
        </nav>
    );
}
