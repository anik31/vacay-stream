import { EmptyVideoPage, PageVideoCard } from "../../components";
import {useLike} from "../../context";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 10rem auto;
  border-color: var(--primary-color);
`;

export function LikedVideos(){
    const {likeState, isLikeLoading} = useLike();

    return (
        <div className="videos-card-wrapper">
            <h2>Liked Videos</h2>
            {isLikeLoading
            ? <MoonLoader color={`var(--primary-color)`} css={override} size={60}/>
            : <>
            {likeState.length>0
            ? <div className="video-cards-container">
                {likeState.map(item=><PageVideoCard key={item._id} value={item} />)}
            </div>
            : <EmptyVideoPage/>}
            </>
            }
        </div>
    );
}