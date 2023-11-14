import school from "../src/assets/C2B76D92-5F75-4756-9C94-8843C17C602F.jpeg"
import one from "../src/assets/5643B128-8334-49DC-98B9-9904C1338F1C_1_105_c.jpeg"
import two from "../src/assets/A41B5B2C-0D47-41E6-B74B-C2CC2EFD330A_1_105_c.jpeg"
import three  from "../src/assets/3667C612-DCAC-4D61-9AEE-20C51423A0F0_1_105_c.jpeg"
import visit from "../src/assets/93081D0F-C738-47DC-817B-931B4E6A23F1_1_105_c.jpeg"
import Footer from "./components/Footer"



export default function School(){
    return (
        <>
            <header style={{backgroundImage : `url(${school})`,backgroundSize: 'cover',
            backgroundPositionY: '25%'} }></header>
             <main className="school-page">
        <section className="school-intro">
            <h1 className="school-heading">Welcome to Faith Mobile Schools!</h1>
            <p>Faith, Work, & Discipline</p>
        </section>
        <section className="about-school">
            <p>At Faith Model Schools, we believe in the power of nurturing young minds while cultivating a strong foundation of faith. We offer more than just education; we provide an environment where students are encouraged to grow academically, spiritually, and emotionally.
            </p>
        </section>
        <section className="school-info">
            <div className="school-card">
                <img className="circle" src={one} alt=""/>
                <p>Accredited programs from age 3 to primary 6</p>
            </div>
            <div className="school-card">
                <img className="circle" src={two} alt=""/>
                <p>State of the art facilities including a computer lab, library, and sick bay</p>
            </div>
            <div className="school-card">
                <img className="circle" src={three} alt=""/>
                <p>Education centered on Biblical values</p>
            </div>
        </section>
        <section className="about-school">
            <p>Our dedicated team of educators is committed to providing a high-quality, Christ-centered education that prepares students for a purposeful life. We integrate Christian values into every aspect of our curriculum, fostering a love for learning and a deep understanding of God&apos;s love and grace.</p>
        </section>
       
        <section className="school-visit">
                <h2>Plan A Visit</h2>
                <div className="visit-container">
                <img className="about-img" src={visit} alt=""/>
                <div className="location">
                    <p># 9 Furo Avenue, Off Emma Estate Junction</p>
                    <p>Azuabie Town</p>
                    <p>Port Harcourt</p>
                    <p>Rivers State</p>
                </div>
            </div>
        </section>
        
        <section className="quotation">
            <blockquote>Train up a child in the way he should go: and when he is old, he will not depart from it.</blockquote>
            <cite> - Proverbs 22:6</cite>
        </section>

        
    </main>
    <Footer/>
        </>
    )
   

}