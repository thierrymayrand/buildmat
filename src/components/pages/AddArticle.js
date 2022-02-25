import { useState } from "react"
import { projectFirestore, projectStorage } from "../store/firebase"

function AddArticle() {

    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredSubHeadline, setEnteredSubHeadline] = useState("");
    const [enteredText, setEnteredText] = useState("")
    const [image, setImage] = useState()

    const imageInputChangeHandler = (event) => {
        setImage(event.target.files[0])
    }
    const subHeadlineInputChangeHandler = (event) => {
        setEnteredSubHeadline(event.target.value)
    }
    const textInputChangeHandler = (event) => {
        setEnteredText(event.target.value)
    }

    const titleInputChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const doc = { enteredTitle, enteredSubHeadline, enteredText }

    const newArticleHandler = async (event) => {
        event.preventDefault()


        try {
            await projectFirestore.collection("articles").add(doc)
                .then(function (docRef) {
                    projectStorage.ref(docRef.id).put(image)
                        .then((snapshot) => {
                            snapshot.ref.getDownloadURL().then((imageUrl) => {
                                projectFirestore.collection("articles").doc(docRef.id).update({ "imgUrl": imageUrl })
                            })
                        });
                })

        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div>
            <div>
                <h3>New Article</h3>
            </div>
            <div>
                <form onSubmit={newArticleHandler}>
                    <label>Title</label>
                    <input type="text" onChange={titleInputChangeHandler}></input><br></br>
                    <label>Sub-Headline</label>
                    <input type="text" onChange={subHeadlineInputChangeHandler}></input><br></br>
                    <label>Text</label>
                    <input type="text" onChange={textInputChangeHandler}></input><br></br>
                    <label>Text</label>
                    <input type="file" onChange={imageInputChangeHandler}></input><br></br>
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddArticle;