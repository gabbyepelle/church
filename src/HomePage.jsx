import {Link} from "react-router-dom";
import Footer from "./components/Footer"
import home from "../src/assets/7BE11762-A3B8-4102-A33E-84A7717713E5_1_201_a.jpeg"
import visit from "../src/assets/82753C9A-DB14-4568-9B3D-08D1B9194793.jpeg"
// import series from "../src/assets/1F1ECB4B-697F-4EF3-9DC3-9E448FBD541A.png"
import school from "../src/assets/189B8CD4-4D9A-4306-BFAB-C9A26B686BE0.png"
import brick from "../src/assets/oneBricksh.png"
import series from "../src/assets/john-towner-3Kv48NS4WUU-unsplash.jpg"



export default function HomePage(){
    return (
        <div>
            <header style={{backgroundImage : `url(${home})`,backgroundSize: 'cover',
            backgroundPositionY: '26%'} }></header>
            <main>
    <section className="welcome">
        <h1>Welcome!</h1>
        <p>At The Tabernacle of the Most High God, we believe in the transformative power of faith, love, and community. Whether you are a longtime believer, a seeker, or someone just curious about exploring faith, you are welcome here.</p>
       </section>
       <section 
       style={{background: `linear-gradient(rgba(16, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${visit})`, backgroundSize: 'cover'}} className="visit picture-section">
        <div className="info">
        <p className="title">Worship with us on Sundays at 10:00 AM</p>
        <Link to="/Worship" className="section-link">Learn More</Link>
    </div>
       </section>
<section
style={{backgroundImage : `url(${series})`,backgroundSize: 'cover',
backgroundPositionY: '70%'}} className="series picture-section">
    <div className="info">
        <p>New Zoom Lecture Series</p>
        <p className="title">The Road to Redemption</p>
        <Link to="/Zoom" className="section-link">Learn More</Link>
    </div>
</section>
<section style={{backgroundImage : `url(${brick})`,backgroundSize: 'cover', backgroundPositionY: '40%', backgroundPositionX: '40%'}}
className="school picture-section">
    <div className="info">
        <p className="title">One Brick Initiative</p>
        <Link to="/OneBrick" className="section-link">Learn More</Link>
    </div>
</section>

<section style={{backgroundImage : `url(${school})`,backgroundSize: 'cover'}}
className="school picture-section">
    <div className="info">
        <p className="title">Faith Model Schools</p>
        <Link to="/School" className="section-link">Learn More</Link>
    </div>
</section>
</main>
            <Footer/>
        </div>
    )
   

}