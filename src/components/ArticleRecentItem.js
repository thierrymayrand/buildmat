import imageSrc from "./images/newarticle.png"
import { Link } from "react-router-dom"
import "./ArticleRecentItem.css";

function ArticleRecentItem(props) {

    return (
        <Link className="article__item-container" to={`/articles/${props.id}`}>
            <div >
                <div className="article__item-detail-container">
                    <img src={props.image} className="article__image" />
                    <div className="article__item-text-container">
                        <p className="article__subtitle">{props.subTitle}</p>
                        <p className="article__title">{props.title}</p>

                    </div>

                </div>

            </div>
        </Link>

    )
}

export default ArticleRecentItem;