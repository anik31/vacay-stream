import "./styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, Videos, LikedVideos, WatchLater, History, Playlist, SinglePlaylist, Page404 } from "./pages";
import { useLogin } from "./hooks";
import { Navbar, Sidebar } from "./components";
import { useEffect } from "react";
import { useVideo, useLike, useHistory, usePlaylist, useWatchLater } from "./context";

function App() {
  const {getVideos, getCategories} = useVideo();
  const {getLikedVideos} = useLike();
  const {getWatchLaterVideos} = useWatchLater();
  const {getWatchHistory} = useHistory();
  const {getPlaylists} = usePlaylist();
  const location = useLocation();

  useLogin();

  useEffect(()=>{
    getVideos();
    getCategories();
    getLikedVideos();
    getWatchLaterVideos();
    getWatchHistory();
    getPlaylists();
  },[])

  return (
    <div className="App">
      <Navbar/>

      <div className={(location.pathname!=="/" && location.pathname!=="login" 
      && location.pathname!=="signup" && "sidebar-container") || ""}>
        {location.pathname!=="/" && location.pathname!=="login" 
        && location.pathname!=="signup" && <Sidebar/>}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/playlists" element={<Playlist/>} />
          <Route path="/playlists/:playlistId" element={<SinglePlaylist/>} />
          <Route path="/liked" element={<LikedVideos/>} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<Page404/>} />
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
