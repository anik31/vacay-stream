import {useVideos} from "../../context/video-context";
import { PlaylistVideoCard } from "../../components";
import "./playlist.css";
import { useParams, useNavigate } from "react-router-dom";
import { removePlaylist } from "../../utils";

export function SinglePlaylist(){
    const {state, isCreateModalVisible, dispatch} = useVideos();
    const {playlistId} = useParams();
    const navigate = useNavigate();
    const {title, videos} = state.playlists.find(item=>item._id===playlistId);

    return (
        <>
        <div className="videos-card-wrapper">
            <h2>{title}</h2>
            <button className="btn btn-primary" onClick={()=>{
                navigate("/playlists")
                removePlaylist(playlistId, dispatch)
            }}>Delete Playlist</button>
            <div className="video-cards-container">
            {videos.map(item=><PlaylistVideoCard key={item._id} value={item} playlistId={playlistId} />)}
            </div>
        </div>
        {isCreateModalVisible && <CreatePlaylistModal/>}
        </>
    );
}