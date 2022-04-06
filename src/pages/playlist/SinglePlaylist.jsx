import {usePlaylist} from "../../context";
import { PageVideoCard } from "../../components";
import "./playlist.css";
import { useParams, useNavigate } from "react-router-dom";

export function SinglePlaylist(){
    const {playlistId} = useParams();
    const navigate = useNavigate();
    const {playlistState, isCreateModalVisible, removePlaylist} = usePlaylist();
    const {title, videos} = playlistState.find(item=>item._id===playlistId);

    return (
        <>
        <div className="videos-card-wrapper">
            <h2>{title}</h2>
            <button className="btn btn-primary" onClick={()=>{
                navigate("/playlists")
                removePlaylist(playlistId)
            }}>Delete Playlist</button>
            <div className="video-cards-container">
            {videos.map(item=><PageVideoCard key={item._id} value={item} />)}
            </div>
        </div>
        {isCreateModalVisible && <CreatePlaylistModal/>}
        </>
    );
}