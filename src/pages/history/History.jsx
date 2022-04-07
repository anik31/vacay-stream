import { EmptyVideoPage, PageVideoCard } from "../../components";
import {useHistory} from "../../context";

export function History(){
    const {historyState, removeAllWatchHistory} = useHistory();
    
    return (
        <div className="videos-card-wrapper">
            <h2>Watch History</h2>
            {historyState.length>0 && <button className="btn btn-primary-outline btn-right" onClick={()=>removeAllWatchHistory()}>Clear Full History</button>}
            {historyState.length>0 
            ? <div className="video-cards-container">
                {historyState.map(item=><PageVideoCard key={item._id} value={item} />)}
            </div>
            : <EmptyVideoPage/>}
        </div>
    );
}