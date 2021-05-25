import "../styles/Home.css";
import splash from "../assets/splash.png"
import { Link } from "react-router-dom";

interface Props{

}

const Home:React.FC<Props> = ()=> {
  return (
    <div>
        <img src={splash} alt="background wallpaper" className="splash-image"></img>
        <ul className="navigation">
            <li className="nav-list-item"><Link className="nav-link" to="/shop">SHOP</Link></li>
            <li className="nav-list-item"><Link className="nav-link" to="/shop/item/2">ABOUT</Link></li>
            <li className="nav-list-item"><Link className="nav-link" to="/shop/item/2">CONTACT</Link></li>
        </ul>
    </div>
  );
}

export default Home;
