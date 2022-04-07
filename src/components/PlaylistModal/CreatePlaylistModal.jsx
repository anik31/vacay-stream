import "./PlaylistModal.css";
import { useState } from "react";
import {usePlaylist} from "../../context";

export function CreatePlaylistModal(){
    const [playlistTitle, setPlaylistTitle] = useState("");
    const {setIsCreateModalVisible, addNewPlaylist} = usePlaylist();

    const createPlaylistHandler = () => {
        if(playlistTitle !== ""){
            addNewPlaylist(playlistTitle);
            setIsCreateModalVisible(false);
        }
    };

    return (
        <div className="modal-wrapper">
            <output className="modal">
                <button onClick={()=>setIsCreateModalVisible(false)}><i className="btn-icon fas fa-times"></i></button>
                <h2>Create New Playlist</h2>
                <input type="text" placeholder="Playlist title" onChange={e=>setPlaylistTitle(e.target.value)} />
                <button className="btn btn-primary" onClick={createPlaylistHandler}>Create Playlist</button>
            </output>
        </div>
    );
}