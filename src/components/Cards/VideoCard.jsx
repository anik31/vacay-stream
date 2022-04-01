import "./card.css"
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
            {state.watchLaterVideos.find(item=>item._id===_id)
            ? <i className="fas fa-heart" title="Remove from watch later" onClick={()=>removeFromWatchLaterVideos(_id, dispatch)} ></i>
            : <i className="far fa-heart" title="Add to watch later" onClick={()=>addToWatchLaterVideos(value, dispatch)}></i>}
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
                        ? <i className="fas fa-thumbs-up" title="Remove from liked videos" onClick={()=>removeFromLikedVideos(_id, dispatch)} ></i>
                        : <i className="far fa-thumbs-up" title="Add to liked videos" onClick={()=>addToLikedVideos(value, dispatch)}></i>}
                        </button>
                        <button><i class="far fa-bookmark" title="Save to playlist"></i></button>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" onClick={()=>addToWatchHistory(value, dispatch)}>Watch Now</button>
        </div>
    );
}