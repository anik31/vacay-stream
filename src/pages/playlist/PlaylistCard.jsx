import { useNavigate } from "react-router-dom";
import "./playlist.css";

export function PlaylistCard({value}){
    const navigate = useNavigate();

    return (
        <div 
        className="playlist-card" 
        onClick={()=>{navigate(`/playlists/${value._id}`)}}>
            <span>{value.title}</span>
        </div>
    );
}