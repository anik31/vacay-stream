import { Link } from "react-router-dom";
import {emptyVideoPage} from "../../assets";

export function EmptyWatchLater(){
    return (
        <main className="container-error-page">
            <img src={emptyVideoPage} alt="empty video page illustration" />
            <h3>Your watch later videos list is empty!</h3>
            <p className="text-sm">Start adding videos to it.</p>
            <Link to="/videos" className="btn btn-primary">Explore now</Link>
        </main>
    );
};