import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar';

export default function Layout() {
    return(
        <div className="container-fluid">
            <div className="row">
                <Sidebar className="col-2" />
                <div className="col-10">
                    <main className="container py-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}
