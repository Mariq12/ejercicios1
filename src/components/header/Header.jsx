import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/home2">Home2</Link></li>
                    <li><Link to="/home3">Home3</Link></li>
                    <li><Link to="/home4">Home4</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
