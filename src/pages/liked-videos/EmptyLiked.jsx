import { Link } from "react-router-dom";
import {emptyVideoPage} from "../../assets";

export function EmptyLiked(){
    return (
        <main className="container-error-page">
            <img src={emptyVideoPage} alt="empty video page illustration" />
            <h3>Your liked videos list is empty!</h3>
            <p className="text-sm">Start liking videos.</p>
            <Link to="/videos" className="btn btn-primary">Explore now</Link>
        </main>
    );
};