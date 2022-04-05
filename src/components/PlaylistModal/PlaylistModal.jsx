import "./PlaylistModal.css";
import {useVideos} from "../../context/video-context";
import { addVideoToPlaylist, removeVideoFromPlaylist } from "../../utils";
import { useNavigate } from "react-router-dom";

export function PlaylistModal(){
    const {state, modalData:value, setIsPlaylistModalVisible, setIsCreateModalVisible, dispatch} = useVideos();
    const navigate = useNavigate();
    
    return (
        <div className="modal-wrapper">
            <output className="playlist-modal">
                <button onClick={()=>setIsPlaylistModalVisible(false)}><i className="btn-icon fas fa-times"></i></button>
                <h3>Save to playlist</h3>
                <ul>
                    {state.playlists.length>0 && state.playlists.map(item=><li key={item._id}><label><input 
                        type="checkbox"
                        checked={item.videos.find(element=>element._id===value._id)?true:false}
                        onChange={()=>item.videos.find(element=>element._id===value._id)?removeVideoFromPlaylist(item._id, value._id, dispatch):addVideoToPlaylist(item._id, value, dispatch)}
                    />{item.title}</label></li>)}
                </ul>
                {state.playlists.length===0 && <button className="btn btn-primary" onClick={()=>{
                    navigate("/playlists");
                    setIsCreateModalVisible(true);
                }}>Create playlist</button>}
            </output>
        </div>
    );
}