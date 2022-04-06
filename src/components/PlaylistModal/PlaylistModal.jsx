import "./PlaylistModal.css";
import {usePlaylist} from "../../context";
import { useNavigate } from "react-router-dom";

export function PlaylistModal(){
    const navigate = useNavigate();
    const {modalData: value, playlistState,
        setIsCreateModalVisible, setIsPlaylistModalVisible, 
        addVideoToPlaylist, removeVideoFromPlaylist} = usePlaylist();
    
    return (
        <div className="modal-wrapper">
            <output className="playlist-modal">
                <button onClick={()=>setIsPlaylistModalVisible(false)}><i className="btn-icon fas fa-times"></i></button>
                <h3>Save to playlist</h3>
                <ul>
                    {playlistState.length>0 && playlistState.map(item=><li key={item._id}><label><input 
                        type="checkbox"
                        checked={item.videos.find(element=>element._id===value._id)?true:false}
                        onChange={()=>item.videos.find(element=>element._id===value._id)?removeVideoFromPlaylist(item._id, value._id):addVideoToPlaylist(item._id, value)}
                    />{item.title}</label></li>)}
                </ul>
                {playlistState.length===0 && <button className="btn btn-primary" onClick={()=>{
                    navigate("/playlists");
                    setIsCreateModalVisible(true);
                }}>Create playlist</button>}
            </output>
        </div>
    );
}