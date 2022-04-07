import {createContext, useContext, useReducer} from "react";
import {videoReducer} from "../reducer";
import axios from "axios";

const VideoContext = createContext(null);

const initialState = {
    videos: [],
    categories: [],
    categoryFilter: "All"
}

const VideoProvider = ({children}) => {
    const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
    
    const getVideos = async() => {
        try{
            const {status, data} = await axios({
                method: "get",
                url: "/api/videos"
            });
            if(status===200){
                videoDispatch({type:"SET_VIDEOS", payload: data.videos})
            }
        }catch(err){
            console.error(err);
        }
    }

    const getCategories = async() => {
        try{
            const {status, data} = await axios({
                method: "get",
                url: "/api/categories"
            });
            if(status===200){
                videoDispatch({type:"SET_CATEGORIES", payload: data.categories})
            }
        }catch(err){
            console.error(err);
        }
    }

    return (
        <VideoContext.Provider value={{
            videoState, videoDispatch,
            getVideos, getCategories
        }}>
            {children}
        </VideoContext.Provider>
    );
}

const useVideo = () => useContext(VideoContext);

export {useVideo, VideoProvider};