import "./PlaylistModal.css";
import { useState } from "react";
import {useVideos} from "../../context/video-context";
import { addNewPlaylist } from "../../utils";

export function PlaylistModal({setIsModalVisible}){
    const [playlistTitle, setPlaylistTitle] = useState("");
    const {dispatch} = useVideos();

    return (
        <div className="modal-wrapper">
            <output className="modal">
                <button onClick={()=>setIsModalVisible(false)}><i className="btn-icon fas fa-times"></i></button>
                <h2>Create New Playlist</h2>
                <input type="text" placeholder="Playlist title" onChange={e=>setPlaylistTitle(e.target.value)} />
                <button className="btn btn-primary" onClick={()=>{
                    addNewPlaylist(playlistTitle, dispatch)
                    setIsModalVisible(false)
                    }}>Create Playlist</button>
            </output>
        </div>
    );
}