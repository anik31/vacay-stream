import {usePlaylist} from "../../context";
import { CreatePlaylistModal } from "../../components";
import { PlaylistCard } from "./PlaylistCard";
import "./playlist.css";

export function Playlist(){
    const {playlistState, isCreateModalVisible, setIsCreateModalVisible} = usePlaylist();

    return (
        <>
        <div className="videos-card-wrapper">
            <h2>All Playlists</h2>
            <button className="btn btn-primary" onClick={()=>setIsCreateModalVisible(true)}>Create New Playlist</button>
            <div className="playlist-cards-container">
            {playlistState.map(item=><PlaylistCard key={item._id} value={item} />)}
            </div>
        </div>
        {isCreateModalVisible && <CreatePlaylistModal/>}
        </>
    );
}