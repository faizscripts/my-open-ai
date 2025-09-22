import { useOutletContext } from 'react-router-dom';
import Hero from '../components/hero';

type LayoutContext = {
    sidebarToggle: () => void
}

export default function Home(): React.JSX.Element {

    const outletContext = useOutletContext<LayoutContext>();
    const sidebarToggle: () => void = outletContext.sidebarToggle;

    return(
        <Hero sidebarToggle={ sidebarToggle } />
    );
}
