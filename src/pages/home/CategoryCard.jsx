import { useNavigate } from "react-router-dom";

export function CategoryCard({value}){
    const {categoryName,image} = value;
    const navigate = useNavigate();

    return (
        <div 
        className="category-card" 
        onClick={()=>navigate("/explore")}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span>{categoryName}</span>
        </div>
    );
}