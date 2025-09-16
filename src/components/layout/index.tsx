import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar';

export default function Layout(): React.JSX.Element {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggle = (): void => setIsSidebarOpen((previousState: boolean): boolean => !previousState);

    return(
        <div className="container-fluid">
            <div className="row">
                <Sidebar isSidebarOpen={isSidebarOpen} handleToggle={handleToggle}/>
                <div className={`main-content ${isSidebarOpen ? 'col-md-10' : 'col-md-12'} col-12`}>
                    <main className="container py-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}
