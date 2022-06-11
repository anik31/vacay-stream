import "./home.css";
import { Link } from "react-router-dom";
import { VideoCard } from "../../components";
import { useVideo } from "../../context";
import { CategoryCard } from "./CategoryCard";
import {hero} from "../../assets";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: var(--primary-color);
`;

export function Home(){
    const {videoState} = useVideo();

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
                {videoState.isVideosLoading
                ? <MoonLoader color={`var(--primary-color)`} css={override} size={60}/>
                : <div className="video-cards-container">
                    { videoState.videos.length !== 0 
                    && videoState.videos.filter(item=> item.mustWatch).map(item=><VideoCard key={item._id} value={item} />)}
                </div>
                }        
            </section>

            <section className="categories">
                <h3 className="page-title">Categories</h3>
                {videoState.isCategoriesLoading
                ? <MoonLoader color={`var(--primary-color)`} css={override} size={60}/>
                : <div className="categories-container">
                    { videoState.categories.length !== 0 
                    && videoState.categories.map(item=><CategoryCard key={item._id} value={item} />)}
                </div>
                }
            </section>
        </main>
    );
}