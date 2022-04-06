import { useVideo } from "../../context";

export function CategoryChips(){
    const {videoState, videoDispatch} = useVideo();

    return (
        <div className="category-chips">
            <button 
            onClick={()=>videoDispatch({type:"FILTER_BY_CATEGORIES", payload:"All"})} 
            className={`btn ${videoState.categoryFilter==="All"?"btn-primary":"btn-primary-outline"}`}
            >All</button>
            
            {videoState.categories.map(item=>
            <button 
            key={item._id} 
            onClick={()=>videoDispatch({type:"FILTER_BY_CATEGORIES", payload:item.categoryName})} 
            className={`btn ${videoState.categoryFilter===item.categoryName?"btn-primary":"btn-primary-outline"}`}
            >{item.categoryName}</button> )}
        </div>
    );
}