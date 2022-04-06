import { useNavigate } from "react-router-dom";
import { useVideo } from "../../context";

export function CategoryCard({value}){
    const {categoryName, image} = value;
    const navigate = useNavigate();
    const {videoDispatch} = useVideo();

    return (
        <div 
        className="category-card" 
        onClick={()=>{
            videoDispatch({type: "FILTER_BY_CATEGORIES", payload: categoryName})
            navigate("/videos")}}
        >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span>{categoryName}</span>
        </div>
    );
}