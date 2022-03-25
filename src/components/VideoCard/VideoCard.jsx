import "./video-card.css"

export function VideoCard({value}){
    const {title, creator, views, uploaded, thumbnail} = value;
    
    return (
        <div className="card card-vertical">
            <i className="far fa-heart"></i>
            <img src={thumbnail.src} className="img-responsive" alt={thumbnail.alt} />
            <div className="card-content">
                <h6 className="card-title">{title}</h6>
                <span className="text-gray text-sm">{creator}</span>
                <div className="video-metrics">
                    <span className="text-gray text-sm">{views} views</span>
                    <span className="dot-separator text-gray"> • </span>
                    <span className="text-gray text-sm">{uploaded} ago</span>
                    <div className="btn-like-dislike-wrapper">
                        <button><i className="far fa-thumbs-up"></i></button>
                        <button><i className="far fa-thumbs-down"></i></button>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary">Watch Now</button>
        </div>
    );
}