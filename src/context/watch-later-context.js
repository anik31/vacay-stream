import {createContext, useContext, useReducer} from "react";
import {watchLaterReducer} from "../reducer";
import axios from "axios";
import { useAuth } from "./auth-context";
import toast from 'react-hot-toast';

const WatchLaterContext = createContext(null);

const WatchLaterProvider = ({children}) => {
    const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, []);
    const {token: encodedToken} = useAuth();

    const getWatchLaterVideos = async() => {
        try{
            const {status, data} = await axios({
                method: "get",
                url: "/api/user/watchlater",
                headers: {authorization: encodedToken}
            });
            if(status===200){
                watchLaterDispatch({type:"SET_WATCH_LATER_VIDEOS", payload: data.watchlater})
            }
        }catch(error){
          toast.error(error.response.data.errors[0]);
        }
    }
      
    const addToWatchLaterVideos = async(postData) => {
        try{
            const {status, data} = await axios({
              method: "post",
              url: "/api/user/watchlater",
              data: {video: postData},
              headers: {authorization: encodedToken}
            });
            if(status===201){
              watchLaterDispatch({type:"SET_WATCH_LATER_VIDEOS", payload: data.watchlater})
            }
        }catch(error){
            toast.error(error.response.data.errors[0]);
        }
    }
      
    const removeFromWatchLaterVideos = async(id) => {
        try{
            const {status, data} = await axios({
              method: "delete",
              url: `/api/user/watchlater/${id}`,
              headers: {authorization: encodedToken}
            });
            if(status===200){
              watchLaterDispatch({type:"SET_WATCH_LATER_VIDEOS", payload: data.watchlater})
            }
        }catch(error){
            toast.error(error.response.data.errors[0]);
        }
    }
      
    return (
        <WatchLaterContext.Provider value={{watchLaterState, watchLaterDispatch, 
        getWatchLaterVideos, addToWatchLaterVideos, removeFromWatchLaterVideos}}>
            {children}
        </WatchLaterContext.Provider>
    );
}

const useWatchLater = () => useContext(WatchLaterContext);

export {useWatchLater, WatchLaterProvider};