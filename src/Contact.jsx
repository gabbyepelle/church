import contact from "../src/assets/4402E650-0DA5-47A0-8BC6-2BC43F768AD1_1_105_c.jpeg"
import header from "../src/assets/header.png"
import Footer from "./components/Footer"




export default function Contact(){
    return (
        <>
        <header style={{backgroundImage : `url(${header})`,backgroundSize: 'cover'}}>
        <div className="header-content">
        <span>Connect</span>
        </div>
        </header>
        <main>
        <h1>Contact Us</h1>
        <div className="content">
        <img className="about-img" src={contact} alt=""/>
        <div className="text-content">
        <h2>Service Times</h2>
        <p>Sundays at 10 AM</p>
        <p>Bible Study on Wednesdays and Saturdays at 8:00 PM</p>
        <h2>Location</h2>
        <p>Our Father&apos;s Cathedral</p>
        <p>9 Bro. Ibifuro Avenue, Off Slaughter/Okuru Road, Azuabie Town, Trans-Amadi, Port Harcourt</p>
        </div>
        </div>

        </main>
        
        <Footer/>

        </>
            
    )
   

}