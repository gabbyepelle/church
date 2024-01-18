import header from "../src/assets/header.png"
import Footer from "./components/Footer"
import series from "../src/assets/john-towner-3Kv48NS4WUU-unsplash.jpg"

export default function Zoom(){
    return (
        <>
            <header style={{backgroundImage : `url(${header})`,backgroundSize: 'cover'}}>
            <div className="header-content">
            <span>Upcoming</span>
            </div>
            </header>
            <main>
           
            <div className="details-container">
            <h1>The Road to Redemption</h1>
            <img className="event-pg-img" src={series} alt=""></img> 
            <h2 className="event-details ">DETAILS</h2>
            <p>📆 Sunday, January 21, 2024</p>
            <p>⏰ 8:00 PM - 9:00 PM</p>
            <p>📍Online</p>
            <p className="event-pg-details">
                2024 has been named the year of redemption. In this new series, we take an inventory of our weaknesses and learn how we can overcome them. </p>
            </div>
            </main>
            <Footer/>
        </>
    )
   

}