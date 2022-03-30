import "./video-card.css"
import {useVideos} from "../../context/video-context";
import { 
    addToLikedVideos, removeFromLikedVideos, 
    addToWatchLaterVideos, removeFromWatchLaterVideos,
    addToWatchHistory
} from "../../utils";

export function VideoCard({value}){
    const {_id, title, creator, views, uploaded, thumbnail} = value;
    const {state, dispatch} = useVideos();

    return (
        <div className="card card-vertical">
            <i className="far fa-heart"></i>
            {state.watchLaterVideos.find(item=>item._id===_id)
            ? <i className="fas fa-heart" onClick={()=>removeFromWatchLaterVideos(_id, dispatch)} ></i>
            : <i className="far fa-heart" onClick={()=>addToWatchLaterVideos(value, dispatch)}></i>}
            <img src={thumbnail.src} className="img-responsive" alt={thumbnail.alt} />
            <div className="card-content">
                <h6 className="card-title">{title}</h6>
                <span className="text-gray text-sm">{creator}</span>
                <div className="video-metrics">
                    <span className="text-gray text-sm">{views} views</span>
                    <span className="dot-separator text-gray"> • </span>
                    <span className="text-gray text-sm">{uploaded} ago</span>
                    <div className="btn-like-dislike-wrapper">
                        <button>
                        {state.likedVideos.find(item=>item._id===_id)
                        ? <i className="fas fa-thumbs-up" onClick={()=>removeFromLikedVideos(_id, dispatch)} ></i>
                        : <i className="far fa-thumbs-up" onClick={()=>addToLikedVideos(value, dispatch)}></i>}
                        </button>
                        <button><i className="far fa-thumbs-down"></i></button>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" onClick={()=>addToWatchHistory(value, dispatch)}>Watch Now</button>
        </div>
    );
}