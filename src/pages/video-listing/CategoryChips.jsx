import { useVideos } from "../../context/video-context";

export function CategoryChips(){
    const {state, dispatch} = useVideos();
    return (
        <div className="category-chips">
            <button 
            onClick={()=>dispatch({type:"FILTER_BY_CATEGORIES", payload:"All"})} 
            className={`btn ${state.categoryFilter==="All"?"btn-primary":"btn-primary-outline"}`}
            >All</button>
            
            {state.categories.map(item=>
            <button 
            key={item._id} 
            onClick={()=>dispatch({type:"FILTER_BY_CATEGORIES", payload:item.categoryName})} 
            className={`btn ${state.categoryFilter===item.categoryName?"btn-primary":"btn-primary-outline"}`}
            >{item.categoryName}</button> )}
        </div>
    );
}