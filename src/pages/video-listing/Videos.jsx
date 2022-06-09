import {usePlaylist, useVideo} from "../../context";
import {VideoCard, PlaylistModal} from "../../components";
import "./videos.css";
import {getFilteredVideos, getSearchedVideos} from "../../utils";
import { CategoryChips } from "./CategoryChips";

export function Videos(){
    const {videoState} = useVideo();
    const {isPlaylistModalVisible} = usePlaylist();
    const filteredVideos = getFilteredVideos(videoState.videos, videoState.categoryFilter);
    const searchedVideos = getSearchedVideos(filteredVideos, videoState.searchTerm);

    return (
        <div className="video-page-container">
            <main>
                <CategoryChips/>
                <div className="video-cards-container">
                {searchedVideos.map(item=><VideoCard key={item._id} value={item} />)}
                </div>
            </main>
            {isPlaylistModalVisible && <PlaylistModal/>}
        </div>        
    );
}