import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {Home, Videos, LikedVideos} from "./pages";
import { useAsyncFetch, useLogin } from "./hooks";
import { Navbar } from "./components";

function App() {
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

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/liked" element={<LikedVideos/>} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
