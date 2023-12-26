import header from "../src/assets/header.png"
import Footer from "./components/Footer"
import brick from "../src/assets/oneBricksh.png"
import road from "../src/assets/IMG_3507.png"

export default function OneBrick(){
    return (
        <>
        <header style={{backgroundImage : `url(${brick})`,backgroundSize: 'cover', backgroundPosition: 'center center'}}>
            {/* <div className="header-content">
            <span>Giving</span>
            </div> */}
            </header>
            <main>
            <h1>One Brick Initiative</h1>
            <section className="content">
            <img className="about-img" src={road} alt=""></img> 
            <div className="text-content">
                <p>Dear members, our church wall, a testament to our shared faith, was unjustly destroyed. Let us unite in rebuilding. Your contribution matters. Donate the cost of one brick today to reconstruct the walls of our sacred space. </p>
                <p>
                    Every brick symbolizes our resilience and commitment to our community. Stand with us, rebuild with us, and let the strength of our unity prevail. Act now and be a cornerstone in the reconstruction of our cherished church.
                    </p>
            </div>
            </section>
            </main>
            <Footer/>
            
           
        </>
    )
}