import { Link, useLocation } from "react-router-dom";
import {emptyVideoPage} from "../assets";

export function EmptyVideoPage(){
    const {pathname} = useLocation();
    let errMsg = "", errDesc = "";

    if(pathname === "/history"){
        errMsg = "Your history is empty!";
        errDesc = "Start watching videos.";
    }else if(pathname === "/liked"){
        errMsg = "Your liked videos list is empty!";
        errDesc = "Start liking videos.";
    }else if(pathname === "/watchlater"){
        errMsg = "Your watch later videos list is empty!";
        errDesc = "Start adding videos to it.";
    }else{
        errMsg = "Your playlist has no videos!";
        errDesc = "Start adding videos to it."; 
    }

    return (
        <main className="container-error-page">
            <img src={emptyVideoPage} alt="empty video page illustration" />
            <h3>{errMsg}</h3>
            <p className="text-sm">{errDesc}</p>
            <Link to="/videos" className="btn btn-primary">Explore now</Link>
        </main>
    );
};