import { PageVideoCard } from "../../components";
import {useLike} from "../../context";

export function LikedVideos(){
    const {likeState} = useLike();

    return (
        <div className="videos-card-wrapper">
            <h2>Liked Videos ({likeState.length})</h2>
            <div className="video-cards-container">
            {likeState.map(item=><PageVideoCard key={item._id} value={item} />)}
            </div>
        </div>
    );
}