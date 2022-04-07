import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import {logo} from "../../assets";

const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : ""
});

export function Navbar(){
    return (
        <header className="header">
        <div className="logo-wrapper">
            <Link to="/"><img src={logo} alt="vacay-stream-logo" className="logo" /></Link>
        </div>
        <nav className="navigation">
            <ul>
                {[{linkTo:"/", linkFor:"Home"},
                {linkTo:"/videos", linkFor:"Explore"}].map(({linkTo, linkFor}) => 
                <li key={linkTo}><NavLink style={getActiveStyle} to={linkTo} className="btn btn-secondary-link">{linkFor}</NavLink></li>)}
                <li><Link to="/login" className="btn btn-primary small-screen-login">Login</Link></li>
            </ul>
        </nav>
        <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search" />
        </div>
        <nav className="navigation nav-hide-login">
            <ul>
                <li><Link to="/login" className="btn btn-primary">Login</Link></li>
            </ul>
        </nav>
    </header>
    );
}