import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import {logo} from "../../assets";
import { useAuth, useHistory, useLike, usePlaylist, useVideo, useWatchLater } from "../../context";
import { debounce } from "../../utils";
import {useState} from "react";

const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : ""
});

export function Navbar(){
    const {isLoggedIn, logoutUser} = useAuth();
    const {historyDispatch} = useHistory();
    const {likeDispatch} = useLike();
    const {playlistDispatch} = usePlaylist();
    const {watchLaterDispatch} = useWatchLater();
    const {videoDispatch} = useVideo();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [searchData, setSearchData] = useState("");

    const setSearch = () => {
        videoDispatch({ type: "SET_SEARCH", payload: searchData });
    };

    const getSearchResults = debounce(setSearch, 300);

    const searchHandler = () => {
        pathname!=="/videos" && navigate("/videos");
        getSearchResults();
    };

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
                <li>{!isLoggedIn
                    ? <Link to="/login" className="btn btn-primary small-screen-login">Login</Link>
                    : <button className="btn btn-primary small-screen-login" onClick={logoutHandler}>Logout</button>}</li>
            </ul>
        </nav>
        <div className="search-box">
            <i className="fas fa-search"></i>
        
            <input type="text" placeholder="Search" onChange={({target})=>setSearchData(target.value)} 
            onKeyUp={searchHandler}/>
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