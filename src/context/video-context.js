import {useState, createContext, useContext, useReducer} from "react";
import {videoReducer} from "../reducer/video-reducer";

const VideoContext = createContext(null);

const initialState = {
    videos: [],
    categories: [],
    categoryFilter: "All",
    likedVideos: [],
    watchLaterVideos: [],
    history: [],
    playlists: []
}

const VideoProvider = ({children}) => {
    const [state, dispatch] = useReducer(videoReducer, initialState);
    const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
    const [isPlaylistModalVisible, setIsPlaylistModalVisible] = useState(false);
    const [modalData, setModalData] = useState({});

    return (
        <VideoContext.Provider value={{state, dispatch, modalData, setModalData, isCreateModalVisible, setIsCreateModalVisible, isPlaylistModalVisible, setIsPlaylistModalVisible}}>
            {children}
        </VideoContext.Provider>
    );
}

const useVideos = () => useContext(VideoContext);

export {useVideos, VideoProvider};