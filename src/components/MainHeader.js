import { Link } from "react-router-dom";
import './MainHeader.css';
import image from './images/logo.png';

function MainHeader() {
    return (
        <div className="nav_div">
            <img src={image} className='logo' />
            <ul className="header">
                <li>
                    <Link to='/home' className="nav_item">Home</Link>
                </li>
                <li>
                    <Link to='/store' className="nav_item">Store</Link>
                </li>
                <li>
                    <Link to='/bio' className="nav_item">Bio</Link>
                </li>
                <li><Link to='/podcasts' className="nav_item">Podcasts</Link></li>
                <li><Link to='/articles' className="nav_item">Articles</Link></li>
                <li><Link to='/english' className="nav_item">English</Link></li>
            </ul>
        </div>
    );
}

export default MainHeader;