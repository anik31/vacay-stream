import "./card.css"
import {useAuth, useHistory, useLike, usePlaylist, useWatchLater} from "../../context";
import { useLocation, useNavigate } from "react-router-dom";
import { throttle } from "../../utils";

export function VideoCard({value}){
    const {_id, title, creator, views, uploaded, thumbnail} = value;
    const {watchLaterState, addToWatchLaterVideos, removeFromWatchLaterVideos} = useWatchLater();
    const {likeState, addToLikedVideos, removeFromLikedVideos} = useLike();
    const {addToWatchHistory} = useHistory();
    const {setModalData, setIsPlaylistModalVisible} = usePlaylist();
    const {isLoggedIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const addToWatchLater = () => {
        isLoggedIn
        ? addToWatchLaterVideos(value)
        : navigate("/login", {replace: true, state: {from: location}});
    }
    
    const removeFromWatchLater = () => {
        removeFromWatchLaterVideos(_id);
    }

    const watchLaterHandler = throttle(addToWatchLater,400);

    const removeWatchLaterHandler = throttle(removeFromWatchLater,400);

    const likeVideo = () => {
        isLoggedIn
        ? addToLikedVideos(value)
        : navigate("/login", {replace: true, state: {from: location}});
    }

    const unlikeVideo = () => {
        removeFromLikedVideos(_id);
    }

    const likeVideoHandler = throttle(likeVideo,400);

    const unlikeVideoHandler = throttle(unlikeVideo,400);

    const watchNowHandler = () => {
        navigate(`/videos/${_id}`);
        if(isLoggedIn){
            addToWatchHistory(value);
        }
    }

    return (
        <>
        <div className="card card-vertical">
            
            {watchLaterState.find(item=>item._id===_id)
            
            ? <i className="fas fa-heart" title="Remove from watch later" 
            onClick={()=>removeWatchLaterHandler()} ></i>
            
            : <i className="far fa-heart" title="Add to watch later" 
            onClick={()=>watchLaterHandler()}></i>}
            
            <img src={thumbnail.src} className="img-responsive" alt={thumbnail.alt} />
            <div className="card-content">
                <h6 className="card-title">{title}</h6>
                <span className="text-gray text-sm">{creator}</span>
                <div className="video-metrics">
                    <span className="text-gray text-sm">{views} views</span>
                    <span className="dot-separator text-gray"> • </span>
                    <span className="text-gray text-sm">{uploaded} ago</span>
                    <div className="btn-like-dislike-wrapper">
                        <button>
                        {likeState.find(item=>item._id===_id)
                        
                        ? <i className="fas fa-thumbs-up" title="Remove from liked videos" 
                        onClick={()=>unlikeVideoHandler()} ></i>
                        
                        : <i className="far fa-thumbs-up" title="Add to liked videos" 
                        onClick={()=>likeVideoHandler()}></i>}
                        </button>
                        <button onClick={()=>{
                            if(isLoggedIn){
                                setModalData(value)
                                setIsPlaylistModalVisible(true)
                            }else{
                                navigate("/login", {replace: true, state: {from: location}})
                            }
                            }}><i className="far fa-bookmark" title="Save to playlist"></i></button>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" onClick={()=>watchNowHandler()}>Watch Now</button>
        </div>
        </>
    );
}