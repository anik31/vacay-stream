import { LikeCard } from "../../components";
import {useVideos} from "../../context/video-context";

export function LikedVideos(){
    const {state} = useVideos();
    
    return (
        <div className="videos-card-wrapper">
            <h2>Liked Videos ({state.likedVideos.length})</h2>
            <div className="video-cards-container">
            {state.likedVideos.map(item=><LikeCard key={item._id} value={item} />)}
            </div>
        </div>
    );
}