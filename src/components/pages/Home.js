import "./Home.css";
import image from '../images/Strongman2.png';
import Articles from '../data/Articles_Data';

import Newsletter from "../Newsletter";
import { Link } from "react-router-dom";
import HomeArticle from "../HomeArticle";


function Home() {


    return (
        <div className="home_container">
            <div className="home__top"></div>
            <div className="home-hero__bottom">
                <img src={image} className='image' />


            </div>

            <div className="home__bottom-hero">
                <p className="home__bottom-hero-sub-title">Mat's Garage</p>
                <h1 className="home__bottom-hero-title" >Donnez un sens a l'entrainement</h1>
                <p className="home__bottom-hero-sub-title">Avec Mathieu Dubreucq</p>
                <div className="home__bottom-button-container">
                    <Link to="/ebook"><button className="home__bottom-button" >Ebook</button></Link>
                    <Link to="articles">
                        <button className="home__bottom-button" >Articles</button>
                    </Link>

                </div>
            </div>

            <HomeArticle />

        </div >

    )
}

export default Home;