import "./ScreenTop.css";
import { Link } from "react-router-dom";
import { useContext } from "react"
import userContext from "./store/user-context";

function ScreenTop(props) {

    const userCtx = useContext(userContext)

    if (userCtx.admin) {
        return (
            <div className="screen-top__container">
                <div></div>
                <div className="screen-top__item-container" >
                    <div className="screen-top__item-add-container" >
                        <Link to="/addarticle"><p>Add Article</p></Link>
                        <Link to="/addebook"><p>Add Ebook</p></Link>
                    </div>
                    <Link to="/authenticate"><p>Sign In</p></Link></div>
            </div>
        )

    }
    return (
        <div className="screen-top__container">
            <div></div>
            <div className="screen-top__item-container" >
                <Link to="/authenticate">
                    {userCtx.signedIn ? <p>Account</p> : <p>Sign-In</p>}


                </Link></div>
        </div>
    )
}

export default ScreenTop;