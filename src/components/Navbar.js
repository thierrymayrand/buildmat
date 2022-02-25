import { NavItems } from "./NavItems";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import cartImage from "./images/cart.svg";
import userImage from "./images/user.svg";

function Navbar() {

    return (
        <div className="navbar__container">
            <Link to="/home"><img className="navbar__logo" src={logo} /></Link>

            <div className="navbar__list" >{NavItems.map((item, index) => {
                return (

                    <Link className="navbar__item" to={item.href}>{item.title}</Link>


                )
            })}
            </div>
            <div className="navbar__buttons">
                <Link className="navbar__cart-container" to="/cart" >
                    <img className="navbar__cart" src={cartImage} />
                    <h4 className="navbar__cart-number">1</h4>
                </Link>
                <Link to="/account"> <img className="navbar__user" src={userImage} /></Link>

            </div>


        </div>

    )
}
export default Navbar;