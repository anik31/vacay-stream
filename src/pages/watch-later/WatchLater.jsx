import { PageVideoCard } from "../../components";
import {useWatchLater} from "../../context";

export function WatchLater(){
    const {watchLaterState} = useWatchLater();
    
    return (
        <div className="videos-card-wrapper">
            <h2>Watch Later Videos ({watchLaterState.length})</h2>
            <div className="video-cards-container">
            {watchLaterState.map(item=><PageVideoCard key={item._id} value={item} />)}
            </div>
        </div>
    );
}