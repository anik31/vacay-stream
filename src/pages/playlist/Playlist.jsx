import {useVideos} from "../../context/video-context";
import {useState} from "react";
import { PlaylistModal } from "../../components";
import { PlaylistCard } from "./PlaylistCard";
import "./playlist.css";

export function Playlist(){
    const {state} = useVideos();
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
        <div className="videos-card-wrapper">
            <h2>All Playlists</h2>
            <button className="btn btn-primary" onClick={()=>setIsModalVisible(true)}>Create New Playlist</button>
            <div className="playlist-cards-container">
            {state.playlists.map(item=><PlaylistCard key={item._id} value={item} />)}
            </div>
        </div>
        {isModalVisible && <PlaylistModal setIsModalVisible={setIsModalVisible} />}
        </>
    );
}