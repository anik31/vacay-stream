import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, Videos, LikedVideos, WatchLater, History, Playlist, 
  SinglePlaylist, Page404, Login, Signup, SingleVideo } from "./pages";
import { Navbar, RequireAuth, RestrictAuth, WithSidebar } from "./components";
import { useEffect } from "react";
import { useVideo, useLike, useHistory, usePlaylist, useWatchLater, useAuth } from "./context";
import {useScrollToTop} from "./hooks/useScrollToTop";
import { Toaster } from 'react-hot-toast';

function App() {
  const {getVideos, getCategories} = useVideo();
  const {getLikedVideos} = useLike();
  const {getWatchLaterVideos} = useWatchLater();
  const {getWatchHistory} = useHistory();
  const {getPlaylists} = usePlaylist();
  const {token, verifyUser} = useAuth();
  const encodedToken = localStorage.getItem("encodedToken");

  useScrollToTop();

  useEffect(()=>{
    getVideos();
    getCategories();
    if(encodedToken){
      verifyUser(encodedToken);
    }
  },[])

  useEffect(()=>{
    if(token){
      getLikedVideos();
      getWatchLaterVideos();
      getWatchHistory();
      getPlaylists();
    }
  },[token])

  return (
    <div className="App">
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<WithSidebar/>}>
          <Route path="/videos" element={<Videos/>} />
          <Route path="/videos/:videoId" element={<SingleVideo/>} />
          <Route element={<RequireAuth/>}>
            <Route path="/playlists" element={<Playlist/>} />
            <Route path="/playlists/:playlistId" element={<SinglePlaylist/>} />
            <Route path="/liked" element={<LikedVideos/>} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="/history" element={<History />} />
          </Route>
        </Route>
        <Route element={<RestrictAuth/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<Page404/>} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
