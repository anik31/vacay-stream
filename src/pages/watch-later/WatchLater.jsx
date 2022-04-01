import { WatchLaterCard } from "../../components";
import {useVideos} from "../../context/video-context";

export function WatchLater(){
    const {state} = useVideos();
    
    return (
        <div className="videos-card-wrapper">
            <h2>Watch Later Videos ({state.watchLaterVideos.length})</h2>
            <div className="video-cards-container">
            {state.watchLaterVideos.map(item=><WatchLaterCard key={item._id} value={item} />)}
            </div>
        </div>
    );
}