import { Link } from "react-router-dom";
import logo from '../logo.png'
import './NavStyle.css'

const Navbar = () => {
    return (
    <nav className="navbar">
        <img src={logo} />
        <ul className="nav-links">
            <Link to="/" className="links"><li>Login</li></Link>
            <Link to="/home" className="links"><li>Home</li></Link>
            <Link to="/about" className="links"><li>About</li></Link>
            <Link to="/todo" className="links"><li>Todo</li></Link>
            <Link to="/cat" className="links"><li>Cat Fact</li></Link>
            <Link to="/cat2" className="links"><li>Cat Fact2</li></Link>
            <Link to="/form" className="links"><li>Form</li></Link>
        </ul>
        
    </nav>);
}

export default Navbar;