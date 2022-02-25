import { useContext, useEffect, useState } from "react";
import userContext from "./user-context"
import { projectAuth } from "./firebase"


function UserProvider(props) {

    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState(false)
    const [signedIn, setSignedIn] = useState(false)

    const signOut = () => {
        projectAuth.signOut().then(() => {

        }).catch((error) => {
            console.log(error.message)
        })
    }

    const signUpHandler = (email, password) => {
        console.log("hi")
        projectAuth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
            setUser(userCredential.user)

        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        })
    }

    const signIn = (email, password) => {

        projectAuth.signInWithEmailAndPassword(email, password).then((userCredential) => {
            setUser(userCredential.user)


        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        })
    }

    const value = {
        user: user,
        signUp: signUpHandler,
        signIn: signIn,
        signOut: signOut,
        admin: admin,
        signedIn: signedIn,


    }

    useEffect(() => {
        projectAuth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user)
                setSignedIn(true)
            } else {
                setUser({})
                setSignedIn(false)
            }
            if (user.uid === user.uid) {
                setAdmin(true)
            } else {
                setAdmin(false)
            }
        })
    }, [])

    return (
        <userContext.Provider value={value}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserProvider;