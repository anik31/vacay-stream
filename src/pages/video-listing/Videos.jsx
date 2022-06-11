import {usePlaylist, useVideo} from "../../context";
import {VideoCard, PlaylistModal} from "../../components";
import "./videos.css";
import {getFilteredVideos, getSearchedVideos} from "../../utils";
import { CategoryChips } from "./CategoryChips";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 10rem auto;
  border-color: var(--primary-color);
`;

export function Videos(){
    const {videoState} = useVideo();
    const {isPlaylistModalVisible} = usePlaylist();
    const filteredVideos = getFilteredVideos(videoState.videos, videoState.categoryFilter);
    const searchedVideos = getSearchedVideos(filteredVideos, videoState.searchTerm);

    return (
        <div className="video-page-container">
            <main>
                {videoState.isVideosLoading
                ? <MoonLoader color={`var(--primary-color)`} css={override} size={60}/>
                : <>
                <CategoryChips/>
                {searchedVideos.length>0
                ? <div className="video-cards-container">
                    {searchedVideos.map(item=><VideoCard key={item._id} value={item} />)}
                </div>
                : <p className="empty-state">No Videos Found</p>
                }
                </>
                }
            </main>
            {isPlaylistModalVisible && <PlaylistModal/>}
        </div>        
    );
}