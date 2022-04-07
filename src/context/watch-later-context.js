import {createContext, useContext, useReducer} from "react";
import {watchLaterReducer} from "../reducer";
import axios from "axios";

const WatchLaterContext = createContext(null);

const encodedToken = localStorage.getItem("encodedToken");

const WatchLaterProvider = ({children}) => {
    const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, []);

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
        }catch(err){
          console.error(err);
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
        }catch(err){
            console.error(err);
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
        }catch(err){
            console.error(err);
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