import {createContext, useContext, useReducer} from "react";
import {videoReducer} from "../reducer";
import axios from "axios";
import toast from 'react-hot-toast';

const VideoContext = createContext(null);

const initialState = {
    videos: [],
    categories: [],
    categoryFilter: "All",
    searchTerm: ""
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
        }catch(error){
            toast.error(error.response.data.errors[0]);
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
        }catch(error){
            toast.error(error.response.data.errors[0]);
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