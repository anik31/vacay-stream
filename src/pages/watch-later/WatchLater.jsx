import { PageVideoCard } from "../../components";
import {useWatchLater} from "../../context";
import { EmptyWatchLater } from "./EmptyWatchLater";

export function WatchLater(){
    const {watchLaterState} = useWatchLater();
    
    return (
        <div className="videos-card-wrapper">
            <h2>Watch Later</h2>
            {watchLaterState.length>0
            ? <div className="video-cards-container">
                {watchLaterState.map(item=><PageVideoCard key={item._id} value={item} />)}
            </div>
            : <EmptyWatchLater/>}
        </div>
    );
}