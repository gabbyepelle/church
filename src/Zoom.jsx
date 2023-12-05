import header from "../src/assets/header.png"
import Footer from "./components/Footer"
import series from "../src/assets/1F1ECB4B-697F-4EF3-9DC3-9E448FBD541A.png"

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
            <h1>Are We Living in the End Times? Part 10</h1>
            <img className="event-pg-img" src={series} alt=""></img> 
            <h2 className="event-details ">DETAILS</h2>
            <p>📆 Sunday, December 2, 2023</p>
            <p>⏰ 8:00 PM - 9:00 PM</p>
            <p>📍Online</p>
            <p className="event-pg-details">
                We delve into prophetic scripture and discuss current events that lead many to believe that we are living in the end times.</p>
            </div>
            </main>
            <Footer/>
        </>
    )
   

}