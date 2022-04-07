import {createContext, useContext, useReducer} from "react";
import {likeReducer} from "../reducer";
import axios from "axios";
import { useAuth } from "./auth-context";

const LikeContext = createContext(null);

const LikeProvider = ({children}) => {
    const [likeState, likeDispatch] = useReducer(likeReducer, []);
    const {token: encodedToken} = useAuth();

    const getLikedVideos = async() => {
        try{
            const {status, data} = await axios({
                method: "get",
                url: "/api/user/likes",
                headers: {authorization: encodedToken}
            });
            if(status===200){
                likeDispatch({type:"SET_LIKED_VIDEOS", payload: data.likes})
            }
        }catch(err){
            console.error(err);
        }
    }
      
    const addToLikedVideos = async(postData) => {
        try{
            const {status, data} = await axios({
              method: "post",
              url: "/api/user/likes",
              data: {video: postData},
              headers: {authorization: encodedToken}
            });
            if(status===201){
              likeDispatch({type:"SET_LIKED_VIDEOS", payload: data.likes})
            }
        }catch(err){
            console.error(err);
        }
    }
      
    const removeFromLikedVideos = async(id) => {
        try{
            const {status, data} = await axios({
              method: "delete",
              url: `/api/user/likes/${id}`,
              headers: {authorization: encodedToken}
            });
            if(status===200){
              likeDispatch({type:"SET_LIKED_VIDEOS", payload: data.likes})
            }
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <LikeContext.Provider value={{likeState, likeDispatch, 
        getLikedVideos, addToLikedVideos, removeFromLikedVideos}}>
            {children}
        </LikeContext.Provider>
    );
}

const useLike = () => useContext(LikeContext);

export {useLike, LikeProvider};