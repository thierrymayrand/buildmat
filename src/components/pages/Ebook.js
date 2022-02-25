import { FirebaseError } from "firebase/app";
import { EbookData } from "../data/EbookData";
import "./Ebook.css";
import EbookItem from "./EbookItem";
import { useEffect, useState } from "react";
import { projectFirestore } from "../store/firebase"




function Ebook() {

    const [ebooks, setEbooks] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {

        projectFirestore.collection("ebook").get().then((snapshot) => {
            if (snapshot.empty) {
                setError("No Recipies")
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data() })
                })
                setEbooks(results)
                setIsPending(false)
            }
        }).catch(err => {
            setError(err.message)
            setIsPending(false)
        }

        )

    }, [])


    return (
        <div className="ebook__container">
            {ebooks.map((ebook) => {
                return (<EbookItem title={ebook.enteredTitle} id={ebook.id} price={ebook.enteredPrice} image={ebook.imgUrl} />)
            })}
        </div>
    )
}

export default Ebook;