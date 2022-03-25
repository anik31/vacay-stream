import "./home.css";
import { Link } from "react-router-dom";
import { VideoCard } from "../../components";
import { useVideos } from "../../context/video-context";
import { CategoryCard } from "./CategoryCard";
import {hero} from "../../assets";

export function Home(){
    const {state} = useVideos();

    return (
        <main className="landing">
            <section className="hero">
                <div className="hero-content">
                    <h3>Discover India's top vacation & adventure destinations</h3>
                    <span>Vacay stream is the leading streaming platform to find & showcase creative vlogs and home to India's curious travellers.</span>
                    <Link to="/videos" className="btn btn-primary">Explore Now <i className="fas fa-long-arrow-alt-right"></i></Link>
                </div>
                <div className="img-wrapper">
                    <img className="img-responsive" src={hero} alt="hero" />
                </div>
            </section>

            <section>
                <h3 className="page-title">Must Watch Videos</h3>
                <div className="video-cards-container">
                    { state.videos.length !== 0 && state.videos.filter(item=> item.mustWatch).map(item=><VideoCard key={item._id} value={item} />)}
                </div>        
            </section>

            <section className="categories">
                <h3 className="page-title">Categories</h3>
                <div className="categories-container">
                    { state.categories.length !== 0 && state.categories.map(item=><CategoryCard key={item._id} value={item} />)}
                </div>
            </section>
        </main>
    );
}