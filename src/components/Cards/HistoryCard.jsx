import "./video-card.css"
import {useVideos} from "../../context/video-context";
import { removeFromWatchHistory } from "../../utils";

export function HistoryCard({value}){
    const {_id, title, creator, views, uploaded, thumbnail} = value;
    const {state, dispatch} = useVideos();

    return (
        <div className="card card-vertical">
            <i className="fas fa-trash" onClick={()=>removeFromWatchHistory(_id, dispatch)} ></i>
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
            <button className="btn btn-primary">Watch Now</button>
        </div>
    );
}