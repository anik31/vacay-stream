import "./PlaylistModal.css";
import {usePlaylist} from "../../context";
import {useState} from "react";
import toast from "react-hot-toast";

export function PlaylistModal(){
    const [playlistTitle, setPlaylistTitle] = useState("");
    const {modalData: value, playlistState, setIsPlaylistModalVisible, addNewPlaylist, 
        addVideoToPlaylist, removeVideoFromPlaylist} = usePlaylist();
    
    const createPlaylistHandler = () => {
        if(playlistTitle.trim() !== ""){
            addNewPlaylist(playlistTitle.trim());
            setPlaylistTitle("");
        }else{
            toast.error("Enter playlist title");
        }
    }
    
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
                <div className="input-btn-wrapper">
                    <input type="text" value={playlistTitle} placeholder="Playlist title" 
                    onChange={(e)=>setPlaylistTitle(e.target.value)} />    
                    <button className="btn btn-primary" onClick={createPlaylistHandler}>Create</button>
                </div>
            </output>
        </div>
    );
}