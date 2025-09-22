import { useOutletContext } from 'react-router-dom';
import Navbar from '../components/navbar/navbar.tsx';

type LayoutContext = {
    sidebarToggle: () => void
}

export default function Home(): React.JSX.Element {

    const outletContext = useOutletContext<LayoutContext>();
    const sidebarToggle: () => void = outletContext.sidebarToggle;

    return(
        <>
            <Navbar sidebarToggle={ sidebarToggle } />
            Home page
        </>
    );
}
