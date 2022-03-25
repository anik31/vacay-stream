import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar(){
    return (
        <header className="header">
        <div className="hamburger-logo-wrapper">
            <button><i className="fas fa-bars"></i></button>
            <Link to="/"><h2 className="logo">vacay</h2></Link>
        </div>
        <nav className="hamburger-menu">
            <ul>
                <li><button><i className="fas fa-times"></i></button></li>
                <li><Link to="/login" className="btn btn-secondary-link">Login</Link></li>
                <li><Link to="/wishlist" className="btn btn-secondary-link">Wishlist</Link></li>
                <li><Link to="/cart" className="btn btn-secondary-link">Cart</Link></li>
            </ul>
        </nav>
        <nav className="navigation">
            <ul>
                {[{linkTo:"/videos", linkFor:"Explore"},
                {linkTo:"/playlists", linkFor:"Playlists"},
                {linkTo:"/liked", linkFor:"Liked"},
                {linkTo:"/watch-later", linkFor:"Watch Later"}].map(({linkTo, linkFor}) => 
                <li key={linkTo}><Link to={linkTo} className="btn btn-secondary-link">{linkFor}</Link></li>)}
            </ul>
        </nav>
        <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search" />
        </div>
        <nav className="navigation nav-hide">
            <ul>
                <li><Link to="/login" className="btn btn-primary">Login</Link></li>
            </ul>
        </nav>
    </header>
    );
}