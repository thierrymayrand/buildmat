import "./Articles.css";
import { Link } from "react-router-dom";
import ArticleRecentItem from "../ArticleRecentItem";
import SingleArticle from "./SingleArticle";
import { useState, useContext, useEffect } from "react"
import { projectFirestore } from "../store/firebase"


function Articles() {
    const [articles, setArticles] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsPending(true)
        projectFirestore.collection("articles").get().then((snapshot) => {
            if (snapshot.empty) {
                setError('No Recipices')
                setIsPending(false)

            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data() })
                })
                setArticles(results)
                console.log(results)
            }
        }).catch(err => {
            setError(err.message)
            setIsPending(false)
        })

    }, []);


    return (
        <div className="articles__container">
            <SingleArticle />

            <div className="articles__sub-headline-container">
                <div className="articles__list-container">
                    {articles.map((article) => {
                        return (
                            <ArticleRecentItem title={article.enteredTitle} id={article.id} subTitle={article.enteredSubHeadline} image={article.imgUrl} />
                        )
                    })}
                </div>

            </div>



        </div>
    )
}

export default Articles;