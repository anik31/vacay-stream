import {usePlaylist} from "../../context";
import { CreatePlaylistModal } from "../../components";
import { PlaylistCard } from "./PlaylistCard";
import "./playlist.css";
import { EmptyPlaylist } from "./EmptyPlaylist";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 10rem auto;
  border-color: var(--primary-color);
`;

export function Playlist(){
    const {playlistState, isCreateModalVisible, setIsCreateModalVisible, isPlaylistLoading} = usePlaylist();

    return (
        <>
        <div className="videos-card-wrapper">
            <h2>All Playlists</h2>
            <button className="btn btn-primary btn-right" onClick={()=>setIsCreateModalVisible(true)}>Create New Playlist</button>
            {isPlaylistLoading
            ? <MoonLoader color={`var(--primary-color)`} css={override} size={60}/>
            : <>
            {playlistState.length>0
            ? <div className="playlist-cards-container">
                {playlistState.map(item=><PlaylistCard key={item._id} value={item} />)}
            </div>
            : <EmptyPlaylist/>}
            </>
            }
        </div>
        {isCreateModalVisible && <CreatePlaylistModal/>}
        </>
    );
}