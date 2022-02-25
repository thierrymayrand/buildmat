import { useState } from "react"
import { projectFirestore, projectStorage } from "../store/firebase"

function AddEbook() {
    const [enteredImage, setEnteredImage] = useState()
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredPrice, setEnteredPrice] = useState("")
    const [enteredDescription, setEnteredDescription] = useState("")

    const priceInputChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    }

    const descriptionInputChangeHandler = (event) => {
        setEnteredDescription(event.target.value)
    }
    const titleInputChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const imageInputChangeHandler = (event) => {
        setEnteredImage(event.target.files[0])
    }
    const doc = { enteredTitle, enteredDescription, enteredPrice }

    const newArticleHandler = async (event) => {
        event.preventDefault()
        console.log(enteredTitle)

        try {
            await projectFirestore.collection("ebook").add(doc)
                .then((docRef) => {
                    projectStorage.ref(docRef.id).put(enteredImage)
                        .then((snapshot) => {
                            snapshot.ref.getDownloadURL().then((imageUrl) => {
                                projectFirestore.collection("ebook").doc(docRef.id).update({ "imgUrl": imageUrl })
                            })
                        })
                })
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div>
            <div>
                <h3>New Ebook</h3>
            </div>
            <div>
                <form onSubmit={newArticleHandler}>
                    <label>Title</label>
                    <input type="text" onChange={titleInputChangeHandler}></input><br></br>
                    <label>Description</label>
                    <input type="text" onChange={descriptionInputChangeHandler}></input><br></br>
                    <label>Price</label>
                    <input type="text" onChange={priceInputChangeHandler}></input><br></br>
                    <label>Text</label>
                    <input type="file" onChange={imageInputChangeHandler}></input><br></br>
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddEbook;