import image from "../images/Oreo.png"
import "./SingleArticle.css"
import { projectFirestore } from "../store/firebase"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function SingleArticle() {
    const [article, setArticle] = useState({})

    useEffect(() => {
        projectFirestore.collection("articles").doc("9StX3z3aEHFT1FX3Qh9l").get().then((snapshot) => {
            setArticle({ id: snapshot.id, ...snapshot.data() })

        })

    }, [])

    return (
        <Link to={`articles/${article.id}`}>
            <div className="signle-article__container">
                <img className="single-article__image" src={article.imgUrl}></img>
                <div className="single-article__text-container">
                    <h2>{article.enteredTitle}</h2>
                    <p>{article.enteredSubHeadline}</p>
                </div>

            </div>
        </Link>

    )
}

export default SingleArticle;