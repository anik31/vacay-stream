import { useNavigate } from "react-router-dom";
import { useVideos } from "../../context/video-context";

export function CategoryCard({value}){
    const {categoryName,image} = value;
    const navigate = useNavigate();
    const {dispatch} = useVideos();

    return (
        <div 
        className="category-card" 
        onClick={()=>{
            dispatch({type: "FILTER_BY_CATEGORIES", payload: categoryName})
            navigate("/videos")}}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span>{categoryName}</span>
        </div>
    );
}