import {createContext, useContext, useReducer} from "react";
import {historyReducer} from "../reducer";
import axios from "axios";
import { useAuth } from "./auth-context";
import toast from 'react-hot-toast';

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
        }catch(error){
            toast.error(error.response.data.errors[0]);
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
        }catch(error){
            console.error(error.response.data.errors[0]);
        }
    }
      
    const removeFromWatchHistory = async(id) => {
        try{
            const {status, data} = await axios({
              method: "delete",
              url: `/api/user/history/${id}`,
              headers: {authorization: encodedToken}
            });
            toast.success('Removed from history');
            if(status===200){
              historyDispatch({type:"SET_HISTORY", payload: data.history})
            }
        }catch(error){
            toast.error(error.response.data.errors[0]);
        }
    }
      
    const removeAllWatchHistory = async() => {
        try{
            const {status, data} = await axios({
              method: "delete",
              url: `/api/user/history/all`,
              headers: {authorization: encodedToken}
            });
            toast.success('History cleared');
            if(status===200){
              historyDispatch({type:"SET_HISTORY", payload: data.history})
            }
        }catch(error){
            toast.error(error.response.data.errors[0]);
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