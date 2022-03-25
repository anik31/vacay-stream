import axios from "axios";

export const getLikedVideos = async(dispatch) => {
    try{
      const {status, data} = await axios({
        method: "get",
        url: "/api/user/likes",
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      if(status===200){
        dispatch({type:"SET_LIKED_VIDEOS", payload: data.likes})
      }
    }catch(err){
      console.log(err);
    }
}
  
export const addToLikedVideos = async(postData, dispatch) => {
    try{
        const {status, data} = await axios({
          method: "post",
          url: "/api/user/likes",
          data: {video: postData},
          headers: {authorization: localStorage.getItem("encodedToken")}
        });
        if(status===201){
          dispatch({type:"SET_LIKED_VIDEOS", payload: data.likes})
        }
    }catch(err){
        console.log(err);
    }
}
  
export const removeFromLikedVideos = async(id, dispatch) => {
    try{
        const {status, data} = await axios({
          method: "delete",
          url: `/api/user/likes/${id}`,
          headers: {authorization: localStorage.getItem("encodedToken")}
        });
        if(status===200){
          dispatch({type:"SET_LIKED_VIDEOS", payload: data.likes})
        }
    }catch(err){
        console.log(err);
    }
}
