import { EmptyVideoPage, PageVideoCard } from "../../components";
import {useHistory} from "../../context";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 10rem auto;
  border-color: var(--primary-color);
`;

export function History(){
    const {historyState, removeAllWatchHistory, isHistoryLoading} = useHistory();
    
    return (
        <div className="videos-card-wrapper">
            <h2>Watch History</h2>
            {isHistoryLoading
            ? <MoonLoader color={`var(--primary-color)`} css={override} size={60}/>
            : <>
            {historyState.length>0 && <button className="btn btn-primary-outline btn-right" onClick={()=>removeAllWatchHistory()}>Clear Full History</button>}
            {historyState.length>0 
            ? <div className="video-cards-container">
                {historyState.map(item=><PageVideoCard key={item._id} value={item} />)}
            </div>
            : <EmptyVideoPage/>}
            </>
            }
        </div>
    );
}