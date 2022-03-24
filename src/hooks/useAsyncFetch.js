import { useVideos } from "../context/video-context";
import {useEffect} from "react";
import axios from "axios";

export function useAsyncFetch({url, dispatchType, dispatchPayload}){
    const {dispatch}  = useVideos();

    useEffect(()=>{
        (async function asyncFetch(){
            try{
                const {data} = await axios.get(url);
                dispatch({type:dispatchType, payload: data[dispatchPayload]});
            }catch(err){
                console.log(err);
            }
        })();
    },[]);
}