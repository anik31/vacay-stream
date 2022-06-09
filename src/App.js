import "./styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, Videos, LikedVideos, WatchLater, History, Playlist, 
  SinglePlaylist, Page404, Login, Signup, SingleVideo } from "./pages";
import { Navbar, Sidebar, RequireAuth } from "./components";
import { useEffect } from "react";
import { useVideo, useLike, useHistory, usePlaylist, useWatchLater, useAuth } from "./context";
import {useScrollToTop} from "./hooks/useScrollToTop";

function App() {
  const {getVideos, getCategories} = useVideo();
  const {getLikedVideos} = useLike();
  const {getWatchLaterVideos} = useWatchLater();
  const {getWatchHistory} = useHistory();
  const {getPlaylists} = usePlaylist();
  const location = useLocation();
  const {token} = useAuth();

  useScrollToTop();

  useEffect(()=>{
    getVideos();
    getCategories();
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

      <div className={(location.pathname!=="/" && location.pathname!=="/login" 
      && location.pathname!=="/signup" && "sidebar-container") || ""}>
        {location.pathname!=="/" && location.pathname!=="/login" 
        && location.pathname!=="/signup" && <Sidebar/>}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/videos/:videoId" element={<SingleVideo/>} />
          <Route path="/playlists" element={<RequireAuth> <Playlist/> </RequireAuth>} />
          <Route path="/playlists/:playlistId" element={<RequireAuth> <SinglePlaylist/> </RequireAuth>} />
          <Route path="/liked" element={<RequireAuth> <LikedVideos/> </RequireAuth>} />
          <Route path="/watchlater" element={<RequireAuth> <WatchLater /> </RequireAuth>} />
          <Route path="/history" element={<RequireAuth> <History /> </RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Page404/>} />
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
