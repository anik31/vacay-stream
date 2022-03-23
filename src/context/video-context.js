import {createContext, useContext, useReducer} from "react";
import {videoReducer} from "../reducer/video-reducer";

const VideoContext = createContext(null);

const initialState = {
    videos: [],
    categories: []
}

const VideoProvider = ({children}) => {
    const [state, dispatch] = useReducer(videoReducer, initialState);

    return (
        <VideoContext.Provider value={{state, dispatch}}>
            {children}
        </VideoContext.Provider>
    );
}

const useVideos = () => useContext(VideoContext);

export {useVideos, VideoProvider};