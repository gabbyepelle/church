import header from "../src/assets/header.png"
import Footer from "./components/Footer"
import leaders from "../src/assets/F1992084-83D4-41C3-851D-0C782E0DBF81.jpeg"



export default function Leadership(){
    return (
        <>
            <header style={{backgroundImage : `url(${header})`,backgroundSize: 'cover'}}>
         <div className="header-content">
        <span>About Us</span>
        </div>
        </header>
        <main className="leadership-page">
        <h1>Our Leadership</h1>
            <img className="about-img" src={leaders} alt=""/>

                <ul className="leadership">
                    <li>Bishop Dr. C.T. Epelle</li>
                    <li>General Overseer</li>
                    <li>Rev. A. C. Osika</li>
                    <li>Host of Our Father&apos;s Cathedral</li>
                    <li>Rev. O. P. Onyeulo</li>
                    <li>Host Minister, Umahia Township</li>
                    <li>Rev. Nduka Obasi</li>
                    <li>Host Minister, Aba Station</li>
                    <li>Rev. John Anyanwu</li>
                    <li>Host Minister, Mbawsi, Station</li>
                </ul>  
    </main>
    <Footer/>
        </>
    )
   

}