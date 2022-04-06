import { Link } from "react-router-dom";
import {emptyVideoPage} from "../../assets";

export function EmptyHistory(){
    return (
        <main className="container-error-page">
            <img src={emptyVideoPage} alt="empty video page illustration" />
            <h3>Your history is empty!</h3>
            <p className="text-sm">Start watching videos.</p>
            <Link to="/videos" className="btn btn-primary">Explore now</Link>
        </main>
    );
};