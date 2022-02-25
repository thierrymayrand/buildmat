import { useState, useContext } from "react"
import cartContext from "../store/cart-context"
import { projectAuth } from "../store/firebase"
import userContext from "../store/user-context"
import "./SignUp.css"

function SignUp() {

    const userCtx = useContext(userContext)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const emailInputHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value)
    }




    const formSignUpHandler = (event) => {
        event.preventDefault()
        userCtx.signUp(email, password)
    }

    const formLoginHandler = (event) => {
        event.preventDefault()
        userCtx.signIn(email, password)
    }

    const clickHandler = () => {
        console.log(userCtx.admin)
    }
    const signOutHandler = () => {
        userCtx.signOut()
    }

    if (userCtx.signedIn) {
        return (
            <div>
                <h1>
                    You are signed in
                </h1>
                <button onClick={signOutHandler}>Sign-Out</button>
            </div>
        )
    }

    return (
        <div className="authenticate__container">
            <h1>{userCtx.user.uid}</h1>
            <button onClick={clickHandler}>Click</button>
            <div className="authenticate__form-container">
                <form onSubmit={formSignUpHandler}>
                    <label>email</label><br></br>
                    <input onChange={emailInputHandler} type="text" id="email" /><br></br>
                    <label>password</label><br></br>
                    <input onChange={passwordInputHandler} type="text" /><br></br>

                    <button >Sign Up</button>
                </form>
                <form onSubmit={formLoginHandler}>
                    <label>email</label><br></br>
                    <input onChange={emailInputHandler} type="text"></input><br></br>
                    <label>password</label><br></br>
                    <input onChange={passwordInputHandler} type="text"></input><br></br>
                    <button>Sign In</button>
                </form>

            </div>

        </div>
    )
}

export default SignUp;