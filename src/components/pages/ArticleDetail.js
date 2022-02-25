import { Articles_Data } from "../data/Articles_Data"
import { useParams } from "react-router-dom";
import image from "../images/Hercule.png";
import profileImage from "../images/newarticle.png";
import { useContext, useState, useEffect } from "react";
import { projectFirestore } from "../store/firebase";


import "./ArticleDetail.css"

function ArticleDetail(props) {


    const { articleId } = useParams();
    const [article, setArticle] = useState({})
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsPending(true)
        projectFirestore.collection("articles").doc(articleId).get().then((doc) => {
            console.log(doc)
            if (doc.exists) {
                setIsPending(false)
                setArticle(doc.data())

            } else {
                setIsPending(false)
                setError("Could not find that recipe")

            }

        })
    }, [articleId])


    return (
        <div className="article-detail__container">

            <div className="article-detail__headlines">
                <h3 className="article-detail__small">Nutrition</h3>
                <h1 className="article-detail__big">{article.enteredTitle}</h1>
            </div>


            <div>
                <img src={article.imgUrl} className="article-detail__image" />
            </div>
            <div className="article__detail-body">

                <p className="article-detail__subheadline">
                    {article.enteredSubHeadline}
                </p>
                <div className="article-detail__publisher">
                    <img className="article-detail__publisher-image" src={profileImage} />
                    <p className="article-detail__publisher-name">Mattieu Dubreucq</p>
                </div>
                <div>
                    <p className="article-detail__paragraph">Le CIQ recommande que les adolescents qui présentent un risque plus élevé de complications liées à la COVID-19 retroussent leur manche pour une troisième fois. Les jeunes vivant dans des milieux collectifs fermés « devraient également obtenir cette dose de rappel étant donné le risque particulièrement élevé de transmission », écrit le ministère de la Santé et des Services sociaux (MSSS).</p>
                </div>
            </div>

        </div>

    )
}

export default ArticleDetail;