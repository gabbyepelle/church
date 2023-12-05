import header from "../src/assets/header.png"
import Footer from "./components/Footer"
import worship from "../src/assets/AFFC3D2F-97E4-4A0F-B4DC-1411B87467AD_1_105_c.jpeg"
import {Link} from "react-router-dom";


export default function Worship(){
    return (
            <>
            <header style={{backgroundImage : `url(${header})`,backgroundSize: 'cover'}}>
            <div className="header-content">
            <span>Worship With Us</span>
        </div>
            </header>
            <main>
        <h1>Worship With Us</h1>
        <section className="content">
            <img className="about-img" src={worship} alt=""/>
            <div className="text-content">
            <h2>Sunday Worship</h2>
            <p>Join us every Sunday morning at 10:00 am for a soul-stirring worship service. Our talented choir and musicians lead us in heartfelt praise and worship, and powerful sermons that resonate with the challenges and triumphs of our daily lives. Come as you are and experience the love of God in a warm and welcoming environment.</p>
            <h2>Zoom Bible Study</h2>
            <p>Need an extra spiritual boost? Join us on Wednesday and Sunday evenings at 8:00 for our interactive Bible study.</p>
            <h2>Special Events and Celebrations</h2>
            <p>Throughout the year, we host special events and celebrations to deepen our connection as a church family. From holiday celebrations to night vigils, there’s always something happening at The Tabernacle of the Most High God. Keep an eye on our events calendar to stay updated on upcoming special services, workshops, and social gatherings.</p>
            <h2>Get Involved</h2>
            <p>We encourage everyone to get involved and be an active part of our church community. Whether you have a passion for music, a heart for service, or a desire to grow in your faith, there are plenty of opportunities to volunteer and contribute. Reach out to our ministry leaders to find out how you can use your talents to serve others and glorify God.</p>
            <h2>Prayer</h2>
            <p>Prayer is an essential part of our ministry. Have a prayer request? Submit it here. All prayer requests are confidential. </p>
            <Link to="/Prayer" className="prayer">Let Us Pray For You</Link>
            </div>
            
        </section>
    </main>
            <Footer/>
            </>
       
    )
   

}