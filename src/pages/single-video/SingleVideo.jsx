import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./singleVideo.css";
import { useVideo, useLike, usePlaylist, useWatchLater, useAuth } from "../../context";
import { throttle } from "../../utils";
import {PlaylistModal} from "../../components";

export function SingleVideo(){
    const {videoId} = useParams();
    const {videoState} = useVideo();
    const {watchLaterState, addToWatchLaterVideos, removeFromWatchLaterVideos} = useWatchLater();
    const {likeState, addToLikedVideos, removeFromLikedVideos} = useLike();
    const {setModalData, setIsPlaylistModalVisible, isPlaylistModalVisible} = usePlaylist();
    const currentVideo = videoState.videos.filter(({_id})=>_id===videoId)[0];
    const navigate = useNavigate();
    const {isLoggedIn} = useAuth();
    const location = useLocation();

    const addToWatchLater = () => {
        isLoggedIn
        ? addToWatchLaterVideos(currentVideo)
        : navigate("/login", {replace: true, state: {from: location}});
    }
    
    const removeFromWatchLater = () => {
        removeFromWatchLaterVideos(videoId);
    }

    const watchLaterHandler = throttle(addToWatchLater,400);

    const removeWatchLaterHandler = throttle(removeFromWatchLater,400);

    const likeVideo = () => {
        isLoggedIn
        ? addToLikedVideos(currentVideo)
        : navigate("/login", {replace: true, state: {from: location}});
    }

    const unlikeVideo = () => {
        removeFromLikedVideos(videoId);
    }

    const likeVideoHandler = throttle(likeVideo,400);

    const unlikeVideoHandler = throttle(unlikeVideo,400);

    return (
        <div className="video-container">
        <iframe
              className="video-frame"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
        ></iframe>
        {currentVideo && <div>
            <h2>{currentVideo.title}</h2>
            <div className="btn-grp">           
                {likeState.find(item=>item._id===videoId)
                ?
                <button className="btn" onClick={()=>unlikeVideoHandler()}> 
                <i className="fas fa-thumbs-up" title="Remove from liked videos"></i>
                Unlike
                </button>
                : 
                <button className="btn" onClick={()=>likeVideoHandler()}>
                <i className="far fa-thumbs-up" title="Add to liked videos"></i>
                Like
                </button>
                }
                
                {watchLaterState.find(item=>item._id===videoId)
                ? 
                <button className="btn" onClick={()=>removeWatchLaterHandler()}>
                <i className="fas fa-heart" title="Remove from watch later"></i>
                Remove from watch later
                </button>
                : 
                <button className="btn" onClick={()=>watchLaterHandler()}>
                <i className="far fa-heart" title="Add to watch later"></i>
                Add to watch later
                </button>
                }
                
                <button
                className="btn" 
                onClick={()=>{
                    if(isLoggedIn){
                        setModalData(currentVideo)
                        setIsPlaylistModalVisible(true)
                    }else{
                        navigate("/login", {replace: true, state: {from: location}})
                    }}}
                >
                    <i className="far fa-bookmark" title="Save to playlist"></i>
                    Save to playlist
                </button>
            </div>
            <hr/>
            <h3>{currentVideo.creator}</h3>
            <p className="text-sm">{currentVideo.description}</p>

        </div>}
            {isPlaylistModalVisible && <PlaylistModal/>}
        </div>
    );
};
