import header from "../src/assets/header.png"
import Footer from "./components/Footer"
import beliefs from "../src/assets/PHOTO-2023-09-16-16-43-08.png"


export default function Beliefs(){
    return (
        <>
           <header style={{backgroundImage : `url(${header})`,backgroundSize: 'cover'}}>
        <div className="header-content">
        <span>About Us</span>
        </div>
        </header>
        <main>
        <h1>Our Beliefs</h1>
        <div className="content">
            <img className="about-img" src={beliefs} alt=""/>
            <div className="text-content">
                <p>At The Tabernacle of The Most High God, we hold firm to a set of core beliefs that guide our faith, community, and actions. These beliefs serve as the foundation of our church family and shape our approach to worship, service, and relationships. We invite you to explore our fundamental convictions:</p>
                <h2>Faith in God</h2>
                <p>We believe in one God, the Creator of the universe, who exists in three persons: Father, Son, and Holy Spirit. We trust in God&apos;s infinite wisdom, power, and love, acknowledging Him as the source of all life and the ultimate authority in our lives.</p>
                <h2>Authority of Scripture</h2>
                <p>We affirm the Bible as the inspired and authoritative Word of God. It is the guide for our faith and practice, providing wisdom, insight, and direction for every aspect of our lives. We are committed to studying, understanding, and living out the teachings of the Holy Scriptures.</p>
                <h2>Salvation through Jesus Christ</h2>
                <p>We believe in the redemptive work of Jesus Christ, His death on the cross, and His resurrection, which provide the only way for humanity to be reconciled with God. Through faith in Jesus, we receive forgiveness of sins, eternal life, and a restored relationship with our Creator.</p>
                <h2>The Holy Spirit</h2>
                <p>We embrace the ministry of the Holy Spirit in the lives of believers. The Holy Spirit empowers, guides, and equips us for spiritual growth, service, and witness. We seek to live in daily communion with the Holy Spirit, allowing His transformative work in us.</p>
                <h2>The Church</h2>
                <p>We recognize the Church as the body of Christ, composed of all believers, and we are committed to nurturing a loving and supportive Christian community. We value worship, fellowship, discipleship, and outreach, striving to demonstrate God&apos;s love to one another and to the world.</p>
                <h2>Hope in the Future</h2>
                <p>We have hope in the future return of Jesus Christ, when He will establish His kingdom in its fullness. This hope motivates us to live with purpose, integrity, and anticipation, eagerly awaiting the fulfillment of God&apos;s promises.</p>
                <br/>
                <p>At The Tabernacle of The Most High God, these beliefs unite us in our journey of faith. We welcome you to join us as we grow in our relationship with God, support one another, and serve our community with love and compassion.</p>
            </div>
        </div>
    </main>
    <Footer/>
        </>
    )
   

}