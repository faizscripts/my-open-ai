import { PanelRight, Plus } from 'lucide-react';
import './sidebar.scss';

export default function Sidebar({ className }: { className?: string}) {
    return (
        <div className={`${className} sidebar-container`}>
            <div className="d-flex justify-content-between align-items-center">
                <img src="/favicon.ico" alt="logo" />
                <PanelRight className="sidebar-button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="close sidebar" />
            </div>
            <button className="btn btn-secondary new-chat-button">
                <Plus /> New chat
            </button>
            <h5>Chats</h5>
            <ul className="list-unstyled">
                <li>Chat 1</li>
                <li>Chat 2</li>
                <li>Chat 3</li>
                <li>Chat 4</li>
                <li>Chat 5</li>
                <li>Chat 6</li>
            </ul>
        </div>
    )
}
