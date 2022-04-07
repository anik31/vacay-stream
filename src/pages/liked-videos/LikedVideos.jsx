import { EmptyVideoPage, PageVideoCard } from "../../components";
import {useLike} from "../../context";

export function LikedVideos(){
    const {likeState} = useLike();

    return (
        <div className="videos-card-wrapper">
            <h2>Liked Videos</h2>
            {likeState.length>0
            ? <div className="video-cards-container">
                {likeState.map(item=><PageVideoCard key={item._id} value={item} />)}
            </div>
            : <EmptyVideoPage/>}
        </div>
    );
}