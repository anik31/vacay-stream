import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import {logo} from "../../assets";
import { useAuth, useHistory, useLike, usePlaylist, useWatchLater } from "../../context";

const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : ""
});

export function Navbar(){
    const {isLoggedIn, logoutUser} = useAuth();
    const {historyDispatch} = useHistory();
    const {likeDispatch} = useLike();
    const {playlistDispatch} = usePlaylist();
    const {watchLaterDispatch} = useWatchLater();
    const navigate = useNavigate();
    
    const logoutHandler = () => {
        logoutUser();
        historyDispatch({type:"SET_HISTORY", payload: []});
        likeDispatch({type:"SET_LIKED_VIDEOS", payload: []});
        playlistDispatch({type:"SET_PLAYLIST_VIDEOS", payload: []});
        watchLaterDispatch({type:"SET_WATCH_LATER_VIDEOS", payload: []});
        navigate("/");
    };

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
                <li>{!isLoggedIn
                    ? <Link to="/login" className="btn btn-primary">Login</Link>
                    : <button className="btn btn-primary" onClick={logoutHandler}>Logout</button>}</li>
            </ul>
        </nav>
    </header>
    );
}