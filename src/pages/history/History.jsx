import { PageVideoCard } from "../../components";
import {useHistory} from "../../context";
import "./history.css";

export function History(){
    const {historyState, removeAllWatchHistory} = useHistory();
    
    return (
        <div className="videos-card-wrapper">
            <h2>Watch History</h2>
            <button className="btn btn-primary-outline" onClick={()=>removeAllWatchHistory()}>Clear Full History</button>
            <div className="video-cards-container">
            {historyState.map(item=><PageVideoCard key={item._id} value={item} />)}
            </div>
        </div>
    );
}