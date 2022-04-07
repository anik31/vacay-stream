import {createContext, useContext, useReducer} from "react";
import {historyReducer} from "../reducer";
import axios from "axios";
import { useAuth } from "./auth-context";

const HistoryContext = createContext(null);

const HistoryProvider = ({children}) => {
    const [historyState, historyDispatch] = useReducer(historyReducer, []);
    const {token: encodedToken} = useAuth();
    
    const getWatchHistory = async() => {
        try{
            const {status, data} = await axios({
                method: "get",
                url: "/api/user/history",
                headers: {authorization: encodedToken}
            });
            if(status===200){
                historyDispatch({type:"SET_HISTORY", payload: data.history})
            }
        }catch(err){
            console.error(err);
        }
    }
      
    const addToWatchHistory = async(postData) => {
        try{
            const {status, data} = await axios({
              method: "post",
              url: "/api/user/history",
              data: {video: postData},
              headers: {authorization: encodedToken}
            });
            if(status===201){
              historyDispatch({type:"SET_HISTORY", payload: data.history})
            }
        }catch(err){
            console.error(err);
        }
    }
      
    const removeFromWatchHistory = async(id) => {
        try{
            const {status, data} = await axios({
              method: "delete",
              url: `/api/user/history/${id}`,
              headers: {authorization: encodedToken}
            });
            if(status===200){
              historyDispatch({type:"SET_HISTORY", payload: data.history})
            }
        }catch(err){
            console.error(err);
        }
    }
      
    const removeAllWatchHistory = async() => {
        try{
            const {status, data} = await axios({
              method: "delete",
              url: `/api/user/history/all`,
              headers: {authorization: encodedToken}
            });
            if(status===200){
              historyDispatch({type:"SET_HISTORY", payload: data.history})
            }
        }catch(err){
            console.error(err);
        }
    }
      
    return (
        <HistoryContext.Provider value={{historyState, historyDispatch, 
        getWatchHistory, addToWatchHistory, removeFromWatchHistory, removeAllWatchHistory}}>
            {children}
        </HistoryContext.Provider>
    );
}

const useHistory = () => useContext(HistoryContext);

export {useHistory, HistoryProvider};