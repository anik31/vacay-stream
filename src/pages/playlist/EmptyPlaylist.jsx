import { Link } from "react-router-dom";
import {emptyPlaylist} from "../../assets";

export function EmptyPlaylist(){
    return (
        <main className="container-error-page">
            <img src={emptyPlaylist} alt="empty playlist illustration" />
            <h3>No playlists found!</h3>
            <p className="text-sm">Add playlists to it now.</p>
            <Link to="/videos" className="btn btn-primary">Explore now</Link>
        </main>
    );
};