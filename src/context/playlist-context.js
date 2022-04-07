import {useState, createContext, useContext, useReducer} from "react";
import {playlistReducer} from "../reducer";
import axios from "axios";
import { useAuth } from "./auth-context";

const PlaylistContext = createContext(null);

const PlaylistProvider = ({children}) => {
    const [playlistState, playlistDispatch] = useReducer(playlistReducer, []);
    const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
    const [isPlaylistModalVisible, setIsPlaylistModalVisible] = useState(false);
    const [modalData, setModalData] = useState({});
    const {token: encodedToken} = useAuth();

    const getPlaylists = async() => {
      try{
          const {status, data} = await axios({
              method: "get",
              url: "/api/user/playlists",
              headers: {authorization: encodedToken}
          });
          if(status===200){
              playlistDispatch({type:"SET_PLAYLIST", payload: data.playlists})
          }
      }catch(err){
          console.error(err);
      }
    }

    const addNewPlaylist = async(playlistTitle) => {
        try{
            const {status, data} = await axios({
              method: "post",
              url: "/api/user/playlists",
              data: {playlist: {title:playlistTitle, description:""}},
              headers: {authorization: encodedToken}
            });
            if(status===201){
              playlistDispatch({type:"SET_PLAYLIST", payload: data.playlists});
            }
        }catch(err){
            console.error(err);
        }
    }
      
    const removePlaylist = async(playlistId) => {
        try{
            const {status, data} = await axios({
              method: "delete",
              url: `/api/user/playlists/${playlistId}`,
              headers: {authorization: encodedToken}
            });
            if(status===200){
              playlistDispatch({type:"SET_PLAYLIST", payload: data.playlists});
            }
        }catch(err){
            console.error(err);
        }
    }
      
    const addVideoToPlaylist = async(playlistId, postData) => {
        try{
            const {status, data} = await axios({
              method: "post",
              url: `/api/user/playlists/${playlistId}`,
              data: {video: postData},
              headers: {authorization: encodedToken}
            });
            if(status===201){
              playlistDispatch({type:"SET_SINGLE_PLAYLIST", payload: data.playlist});
            }
        }catch(err){
            console.error(err);
        }
    }
      
    const removeVideoFromPlaylist = async(playlistId, videoId) => {
        try{
            const {status, data} = await axios({
              method: "delete",
              url: `/api/user/playlists/${playlistId}/${videoId}`,
              headers: {authorization: encodedToken}
            });
            if(status===200){
              playlistDispatch({type:"SET_SINGLE_PLAYLIST", payload: data.playlist});
            }
        }catch(err){
            console.error(err);
        }
    }      

    return (
        <PlaylistContext.Provider value={{
            playlistState, playlistDispatch, 
            modalData, setModalData, 
            isCreateModalVisible, setIsCreateModalVisible, 
            isPlaylistModalVisible, setIsPlaylistModalVisible,
            getPlaylists, addNewPlaylist, removePlaylist, addVideoToPlaylist, removeVideoFromPlaylist
        }}>
            {children}
        </PlaylistContext.Provider>
    );
}

const usePlaylist = () => useContext(PlaylistContext);

export {usePlaylist, PlaylistProvider};