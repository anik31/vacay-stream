import { PageVideoCard } from "../../components";
import {useVideos} from "../../context/video-context";
import { removeAllWatchHistory } from "../../utils";
import "./history.css";

export function History(){
    const {state, dispatch} = useVideos();
    
    return (
        <div className="videos-card-wrapper">
            <h2>Watch History</h2>
            <button className="btn btn-primary-outline" onClick={()=>removeAllWatchHistory(dispatch)}>Clear Full History</button>
            <div className="video-cards-container">
            {state.history.map(item=><PageVideoCard key={item._id} value={item} />)}
            </div>
        </div>
    );
}