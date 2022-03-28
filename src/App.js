import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, Videos, LikedVideos, WatchLater } from "./pages";
import { useAsyncFetch, useLogin } from "./hooks";
import { Navbar } from "./components";
import { useEffect } from "react";
import { getLikedVideos, getWatchLaterVideos } from "./utils";
import { useVideos } from "./context/video-context";

function App() {
  const {dispatch} = useVideos();
  
  useAsyncFetch({
    url: "/api/videos",
    dispatchType:"SET_VIDEOS",
    dispatchPayload:"videos"
  })
  
  useAsyncFetch({
    url: "/api/categories",
    dispatchType:"SET_CATEGORIES",
    dispatchPayload:"categories"
  })
  
  useLogin();

  useEffect(()=>{
    getLikedVideos(dispatch);
    getWatchLaterVideos(dispatch);
  },[])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/liked" element={<LikedVideos/>} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
