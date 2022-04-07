import { NavLink } from "react-router-dom";
import "./sidebar.css";

const sidebarData = [
    { linkTo: "/", linkFor: "Home", icon: "fas fa-home" },
    { linkTo: "/videos", linkFor: "Videos", icon: "fas fa-photo-video" },
    { linkTo: "/playlists", linkFor: "Playlists", icon: "fas fa-bookmark" },
    { linkTo: "/liked", linkFor: "Liked", icon: "fas fa-thumbs-up" },
    { linkTo: "/watchlater", linkFor: "Watch Later", icon: "fas fa-heart" },
    { linkTo: "/history", linkFor: "History", icon: "fas fa-history" },
];

const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : ""
});

export function Sidebar(){
    return (
        <nav className="sidebar box-shadow">
            <ul>
            {sidebarData.map(item=>
                <li key={item.linkTo}>
                    <NavLink style={getActiveStyle} to={item.linkTo} className="nav-item">
                        <i className={item.icon}></i>
                        <span>{item.linkFor}</span>
                    </NavLink>
                </li>
            )}
            </ul>
        </nav>
    );
}

