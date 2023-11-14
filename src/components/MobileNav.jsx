import {useState} from 'react'
import hamburger from '../assets/hamburger.svg'
import '../MobileNav.css'
import {Link} from "react-router-dom";


export default function MovileNav(){
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)
    return(
        <><nav className="mobile-nav">
            <ul>
                <li className="logo"><Link to="/">TOTMHG</Link></li>
                <li>
                    <button 
                    id="hamburger"
                    onClick={()=>setNavbarOpen((prev)=>!prev)}
                    >
                    <img src={hamburger}/>
                    </button>
                </li>
            </ul>
        </nav><nav className={`text-box ${navbarOpen ? '': 'hidden'}`}>
                <ul>
                    <li>
                        <button id="mobileAbout"
                        onClick={()=>setDrawerOpen((prev)=>!prev)}
                        >
                            ABOUT
                        </button>
                    </li>
                    <div className={`aboutDrawer ${drawerOpen ? '': 'hidden'}`}>
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
            </nav></>
    )
}










