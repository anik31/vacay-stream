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

export const getWatchLaterVideos = async(dispatch) => {
  try{
    const {status, data} = await axios({
      method: "get",
      url: "/api/user/watchlater",
      headers: {authorization: localStorage.getItem("encodedToken")}
    });
    if(status===200){
      dispatch({type:"SET_WATCH_LATER_VIDEOS", payload: data.watchlater})
    }
  }catch(err){
    console.log(err);
  }
}

export const addToWatchLaterVideos = async(postData, dispatch) => {
  try{
      const {status, data} = await axios({
        method: "post",
        url: "/api/user/watchlater",
        data: {video: postData},
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      if(status===201){
        dispatch({type:"SET_WATCH_LATER_VIDEOS", payload: data.watchlater})
      }
  }catch(err){
      console.log(err);
  }
}

export const removeFromWatchLaterVideos = async(id, dispatch) => {
  try{
      const {status, data} = await axios({
        method: "delete",
        url: `/api/user/watchlater/${id}`,
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      if(status===200){
        dispatch({type:"SET_WATCH_LATER_VIDEOS", payload: data.watchlater})
      }
  }catch(err){
      console.log(err);
  }
}

export const getWatchHistory = async(dispatch) => {
  try{
    const {status, data} = await axios({
      method: "get",
      url: "/api/user/history",
      headers: {authorization: localStorage.getItem("encodedToken")}
    });
    if(status===200){
      dispatch({type:"SET_HISTORY", payload: data.history})
    }
  }catch(err){
    console.log(err);
  }
}

export const addToWatchHistory = async(postData, dispatch) => {
  try{
      const {status, data} = await axios({
        method: "post",
        url: "/api/user/history",
        data: {video: postData},
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      if(status===201){
        dispatch({type:"SET_HISTORY", payload: data.history})
      }
  }catch(err){
      console.log(err);
  }
}

export const removeFromWatchHistory = async(id, dispatch) => {
  try{
      const {status, data} = await axios({
        method: "delete",
        url: `/api/user/history/${id}`,
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      if(status===200){
        dispatch({type:"SET_HISTORY", payload: data.history})
      }
  }catch(err){
      console.log(err);
  }
}

export const removeAllWatchHistory = async(dispatch) => {
  try{
      const {status, data} = await axios({
        method: "delete",
        url: `/api/user/history/all`,
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      if(status===200){
        dispatch({type:"SET_HISTORY", payload: data.history})
      }
  }catch(err){
      console.log(err);
  }
}

export const addNewPlaylist = async(playlistTitle, dispatch) => {
  try{
      const {status, data} = await axios({
        method: "post",
        url: "/api/user/playlists",
        data: {playlist: {title:playlistTitle, description:""}},
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      if(status===201){
        dispatch({type:"SET_PLAYLIST", payload: data.playlists});
      }
  }catch(err){
      console.log(err);
  }
}

export const removePlaylist = async(playlistId, dispatch) => {
  try{
      const {status, data} = await axios({
        method: "delete",
        url: `/api/user/playlists/${playlistId}`,
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      if(status===200){
        dispatch({type:"SET_PLAYLIST", payload: data.playlists});
      }
  }catch(err){
      console.log(err);
  }
}

export const addVideoToPlaylist = async(playlistId, postData, dispatch) => {
  try{
      const {status, data} = await axios({
        method: "post",
        url: `/api/user/playlists/${playlistId}`,
        data: {video: postData},
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      if(status===201){
        dispatch({type:"SET_SINGLE_PLAYLIST", payload: data.playlist});
      }
  }catch(err){
      console.log(err);
  }
}

export const removeVideoFromPlaylist = async(playlistId, videoId, dispatch) => {
  try{
      const {status, data} = await axios({
        method: "delete",
        url: `/api/user/playlists/${playlistId}/${videoId}`,
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      if(status===200){
        dispatch({type:"SET_SINGLE_PLAYLIST", payload: data.playlist});
      }
  }catch(err){
      console.log(err);
  }
}
