import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className='LogoContainer'>
                <img src="assets/LogoWolf.png" alt="LogoWolf" />
                <img src="assets/LogoBrand.png" alt="LogoBrand" />
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
        </header>
    )
}