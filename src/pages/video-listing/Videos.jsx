import {useVideos} from "../../context/video-context";
import {VideoCard} from "../../components";
import "./videos.css";
import {getFilteredVideos} from "../../utils";
import { CategoryChips } from "./CategoryChips";

export function Videos(){
    const {state} = useVideos();
    const filteredVideos = getFilteredVideos(state.videos, state.categoryFilter);

    return (
        <div className="video-page-container">
            <main>
                <CategoryChips/>
                <div className="video-cards-container">
                {filteredVideos.map(item=><VideoCard key={item._id} value={item} />)}
                </div>
            </main>
        </div>        
    );
}