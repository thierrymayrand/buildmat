import "./HomeArticle.css"
import image from "./images/stopwishing.png"
import { projectFirestore } from "./store/firebase"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function HomeArticle() {

    const [article, setArticle] = useState({})

    useEffect(() => {
        projectFirestore.collection("articles").doc("9StX3z3aEHFT1FX3Qh9l").get().then((snapshot) => {
            setArticle({ id: snapshot.id, ...snapshot.data() })

        })

    }, [])
    return (
        <div className="home-article__container">
            <img src={article.imgUrl} className="home-article__image" />
            <div className="home-article__text-container">
                <h4 className="home-article__headline">
                    {article.enteredTitle}
                </h4>
                <p>{article.enteredSubHeadline} </p>
                <Link to={`/articles/${article.id}`}>
                    <p className="home-article__link">Lire d'avantage</p>
                </Link>

            </div>
        </div>
    )
}

export default HomeArticle;