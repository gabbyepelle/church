import toggle from '../assets/dropdown-svgrepo-com.svg'
import '../Navbar.css'
import {Link} from "react-router-dom";


export default function Navbar(){
    return (
        <nav className="desktop-nav">
            <p> <Link to="/">TOTMHG</Link></p>
            <ul className='nav-links'>
                <div className="dropdown">
                    <li>ABOUT<img src={toggle} alt=""/></li>
                    <div className="dropdown-content">
                        <ul>
                            <li>
                            <Link to="/Beliefs">Beliefs</Link>
                            </li>
                            <li>
                            <Link to="/History">History</Link>
                            </li>
                            <li>
                            <Link to="/Leadership">Leadership</Link>
                            </li>
                        </ul>      
                    </div>
                </div>
                <li>
                <Link to="/Worship">WORSHIP</Link>
                </li>
                {/* <li>
                <Link to="/Events">EVENTS</Link>
                </li> */}
                <li>
                <Link to="/Contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    )
}