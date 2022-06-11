import { EmptyVideoPage, PageVideoCard } from "../../components";
import {useWatchLater} from "../../context";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 10rem auto;
  border-color: var(--primary-color);
`;

export function WatchLater(){
    const {watchLaterState, isWatchLaterLoading} = useWatchLater();
    
    return (
        <div className="videos-card-wrapper">
            <h2>Watch Later</h2>
            {isWatchLaterLoading
            ? <MoonLoader color={`var(--primary-color)`} css={override} size={60}/>
            : <>
            {watchLaterState.length>0
            ? <div className="video-cards-container">
                {watchLaterState.map(item=><PageVideoCard key={item._id} value={item} />)}
            </div>
            : <EmptyVideoPage/>}
            </>
            }
        </div>
    );
}