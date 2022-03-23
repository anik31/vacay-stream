import { Link } from "react-router-dom";
// import { useProducts } from "../../context/product-context";
import "./navbar.css";

export function Navbar(){
    // const {state} = useProducts();

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
                <li><Link to="/explore" className="btn btn-secondary-link">Explore</Link></li>
                <li><Link to="/playlists" className="btn btn-secondary-link">Playlists</Link></li>
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