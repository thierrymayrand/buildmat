import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { EbookData } from "../data/EbookData";
import { projectFirestore } from "../store/firebase";
import image from "../images/book.png"
import "./EbookDetail.css"

function EbookDetail(props) {
    const { ebookId } = useParams();
    const [ebook, setEbook] = useState({})
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    const clickHandler = () => {

    }

    useEffect(() => {
        setIsPending(true)
        projectFirestore.collection("ebook").doc(ebookId).get().then((doc) => {
            console.log(doc)
            if (doc.exists) {
                setIsPending(false)
                setEbook(doc.data())

            } else {
                setIsPending(false)
                setError("Could not find that recipe")

            }

        })
    }, [ebookId])

    return (
        <div className="ebook-detail__body">
            <div className="ebook-detail__main">
                <div className="ebook-detail__first-component">
                    <img className="ebook-detail__image" src={ebook.imgUrl} />
                    <div>
                        <p>#1 in Nutrition</p>
                        <p>#1 in Fitness</p>
                        <p>#1 in Lift</p>
                    </div>
                </div>
                <div className="ebook-detail__middle-component">
                    <div className="ebook-detail__header">
                        <h2 className="ebook-detail__title">{ebook.enteredTitle}</h2>
                        <div className="ebook-detail__authors">
                            <p>by Mattieu Dubreucq</p>
                        </div>
                    </div>
                    <div className="ebook-detail__resume">
                        <p className="ebook-detail__resume-title">Resume</p>
                        <p className="ebook-detail__resume-sub-title">Sequel to the #1 New York Times bestseller!
                            Sarah J. Maas's sexy, groundbreaking CRESCENT CITY series continues with the
                            second installment.</p>
                        <p className="ebook-detail__resume-text">{ebook.enteredDescription}</p>
                    </div>
                    <div className="ebook-detail__about">
                        <h4>About this book</h4>
                        <div className="ebook-detail__about-items">
                            <div className="ebook-detail__about-item">
                                <img />
                                <p className="ebook-detail__page-nmb">875</p>
                                <p>Pages</p>
                            </div>
                            <div>
                                <img />
                                <p className="ebook-detail__page-nmb">19 - 21</p>
                                <p>Hours To Read</p>
                            </div>
                            <div>
                                <img />
                                <p className="ebook-detail__page-nmb">238k</p>
                                <p>Total Words</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ebook-detail__last-component" >
                    <div className="ebook-detail__last-component-body">
                        <h3>Buy the eBook</h3>
                        <div>
                            <div className="ebook-detail__price-container">
                                <p>List Price</p>
                                <p>$20</p>
                            </div>
                            <div className="ebook-detail__buttons">

                                <Link to={`/checkout/${ebookId}`} className="ebook-detail__buynow">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default EbookDetail;