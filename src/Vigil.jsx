import header from "../src/assets/header.png"
import Footer from "./components/Footer"
import vigil from "../src/assets/mike-ralph-0yIzvpbRFw8-unsplash.jpg"

export default function Vigil(){
    return (
        <>
            <header style={{backgroundImage : `url(${header})`,backgroundSize: 'cover'}}>
            <div className="header-content">
            <span>Upcoming</span>
            </div>
            </header>
            <main>
           
            <div className="details-container">
            <h1>The Road to Redemption: Faith, Mind & Prayer</h1>
            <img className="event-pg-img" src={vigil} alt=""></img> 
            <h2 className="event-details ">DETAILS</h2>
            <p>📆 Friday, February 2, 2024</p>
            <p>⏰ 9:00 PM</p>
            <p>📍CEW Gardens</p>
            <p className="event-pg-details">
                Join us as we pray for grace  and for God to fight all evils, nonsense, and disturbances in the world, especially in Rivers State and Abia State   </p>
            </div>
            </main>
            <Footer/>
        </>
    )
   

}