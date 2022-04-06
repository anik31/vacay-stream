import "./card.css"
import {useHistory, useLike, usePlaylist, useWatchLater} from "../../context";

export function VideoCard({value}){
    const {_id, title, creator, views, uploaded, thumbnail} = value;
    const {watchLaterState, addToWatchLaterVideos, removeFromWatchLaterVideos} = useWatchLater();
    const {likeState, addToLikedVideos, removeFromLikedVideos} = useLike();
    const {addToWatchHistory} = useHistory();
    const {setModalData, setIsPlaylistModalVisible} = usePlaylist();

    return (
        <>
        <div className="card card-vertical">
            {watchLaterState.find(item=>item._id===_id)
            ? <i className="fas fa-heart" title="Remove from watch later" onClick={()=>removeFromWatchLaterVideos(_id)} ></i>
            : <i className="far fa-heart" title="Add to watch later" onClick={()=>addToWatchLaterVideos(value)}></i>}
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
                        ? <i className="fas fa-thumbs-up" title="Remove from liked videos" onClick={()=>removeFromLikedVideos(_id)} ></i>
                        : <i className="far fa-thumbs-up" title="Add to liked videos" onClick={()=>addToLikedVideos(value)}></i>}
                        </button>
                        <button onClick={()=>{
                            setModalData(value)
                            setIsPlaylistModalVisible(true)
                            }}><i className="far fa-bookmark" title="Save to playlist"></i></button>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" onClick={()=>addToWatchHistory(value)}>Watch Now</button>
        </div>
        </>
    );
}