import { Link } from "react-router-dom";
import '../css/navbar.css'

function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="brand">Movie App</Link>
            </div>
            <div className="navbar-menu">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar