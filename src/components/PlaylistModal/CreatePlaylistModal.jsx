import "./PlaylistModal.css";
import { useState } from "react";
import {usePlaylist} from "../../context";
import toast from "react-hot-toast";

export function CreatePlaylistModal(){
    const [playlistTitle, setPlaylistTitle] = useState("");
    const {setIsCreateModalVisible, addNewPlaylist} = usePlaylist();

    const createPlaylistHandler = () => {
        if(playlistTitle !== ""){
            addNewPlaylist(playlistTitle);
            setIsCreateModalVisible(false);
        }else{
            toast.error("Enter playlist title");
        }
    };

    return (
        <div className="modal-wrapper">
            <output className="modal">
                <button onClick={()=>setIsCreateModalVisible(false)}><i className="btn-icon fas fa-times"></i></button>
                <h2>Create New Playlist</h2>
                <input type="text" placeholder="Playlist title" value={playlistTitle} onChange={e=>setPlaylistTitle(e.target.value.trim())} />
                <button className="btn btn-primary" onClick={createPlaylistHandler}>Create Playlist</button>
            </output>
        </div>
    );
}