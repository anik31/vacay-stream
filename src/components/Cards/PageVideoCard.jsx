import "./card.css"
import {useVideos} from "../../context/video-context";
import { 
    removeFromWatchHistory, addToWatchHistory, 
    removeFromLikedVideos, removeFromWatchLaterVideos, 
    removeVideoFromPlaylist 
} from "../../utils";
import {useLocation, useParams} from "react-router-dom";

export function PageVideoCard({value}){
    const {_id, title, creator, views, uploaded, thumbnail} = value;
    const {dispatch} = useVideos();
    const {pathname} = useLocation();
    const {playlistId} = useParams();

    console.log(pathname, playlistId);

    const deleteBtnHandler = () => {
        if(pathname === "/history"){
            removeFromWatchHistory(_id, dispatch);
        }else if(pathname === "/liked"){
            removeFromLikedVideos(_id, dispatch);
        }else if(pathname === "/watchlater"){
            removeFromWatchLaterVideos(_id, dispatch);
        }else{
            removeVideoFromPlaylist(playlistId, _id, dispatch);
        }
    }

    return (
        <div className="card card-vertical">
            <i className="fas fa-trash" title="Remove" onClick={deleteBtnHandler} ></i>
            <img src={thumbnail.src} className="img-responsive" alt={thumbnail.alt} />
            <div className="card-content">
                <h6 className="card-title">{title}</h6>
                <span className="text-gray text-sm">{creator}</span>
                <div className="video-metrics">
                    <span className="text-gray text-sm">{views} views</span>
                    <span className="dot-separator text-gray"> • </span>
                    <span className="text-gray text-sm">{uploaded} ago</span>
                </div>
            </div>
            <button className="btn btn-primary" onClick={()=>addToWatchHistory(value, dispatch)}>Watch Now</button>
        </div>
    );
}