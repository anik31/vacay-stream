import {useVideos} from "../../context/video-context";
import { CreatePlaylistModal } from "../../components";
import { PlaylistCard } from "./PlaylistCard";
import "./playlist.css";

export function Playlist(){
    const {state, isCreateModalVisible, setIsCreateModalVisible} = useVideos();

    return (
        <>
        <div className="videos-card-wrapper">
            <h2>All Playlists</h2>
            <button className="btn btn-primary" onClick={()=>setIsCreateModalVisible(true)}>Create New Playlist</button>
            <div className="playlist-cards-container">
            {state.playlists.map(item=><PlaylistCard key={item._id} value={item} />)}
            </div>
        </div>
        {isCreateModalVisible && <CreatePlaylistModal/>}
        </>
    );
}