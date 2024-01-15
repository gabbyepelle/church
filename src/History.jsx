import header from "../src/assets/header.png"
import Footer from "./components/Footer"
import Ohokogbe from "../src/assets/064D75CB-3EDC-4F1C-9479-B42CFBE43FCF.jpeg"
import father from "../src/assets/8x10_B2_Epelle010.png"



export default function History(){
    return (
        <>
            <header style={{backgroundImage : `url(${header})`,backgroundSize: 'cover'}}>
        <div className="header-content">
        <span>About Us</span>
        </div>
        </header>
        <main>
            <h1>Our History</h1>
            <div className="text-content">
            <p>The Tabernacle of The Most High God was founded by Pastor E. T. Epelle in 1906. </p>
            <p>After being struck by an ailment that was deemed incurable by doctors, he requested prayer from a church called Faith Tabernacle Gospel Church in Philadelphia. They prayed for him and he was healed. Pastor E. T. Epelle was so grateful that he founded a branch of Faith Tabernacle Gospel Church in Nigeria, headquartered in Ohokogbe, Umahia. </p>
            <div className="caption-container">
            <img className="history-img" src={Ohokogbe} alt="" />
            <span className="caption">The church at Ohokogbe</span>
            </div>
            <p>In need of assistance,  he contacted one of his relatives, Bailey M. A. S. Epelle an elementary school headmaster, to join him. He refused and was subsequently struck deaf resulting in the loss of his job. Seeing the hand of God in his predicament, he went to Pastor E. T. Epelle for prayer and was healed. </p>
            <p>Bailey M. A. S. Epelle, who became known as “Our Father” became Pastor E. T. Epelle&apos;s assistant. He was a tireless evangelist, establishing many branches in Eastern and Northern Nigeria, destroying many shrines in the process. He believed in miracles and the gospel of the Holy Spirit. </p>
            <div className="caption-container">
            <img className="history-img" src={father} alt="" />
            <span className="caption">Pastor Bailey M. A. S. Epelle,</span>
            </div>
            
            <p>Our Father had many disputes with Faith Tabernacle Gospel Church about some of their doctrines which he felt were not rooted in scripture. For example, members of Faith Tabernacle Gospel Church were forbidden from owning land. In a series of letters exchanged with Faith Tabernacle Gospel Church, it was obvious that a rift was forming between the two churches. The main point of contention was a belief by Our Father in the presence of the Holy Spirit. The church in Philadelphia discouraged teaching about the Holy Spirit. Pastor E. T. Epelle sided with Faith Tabernacle Gospel Church. In 1945, Our Father officially split from Pastor E.T. Epelle and Faith Tabernacle Gospol Church. He established True Faith Tabernacle Gospol Church in 1946. </p>
            <p>In December 1950,  members of the Okonkwo secret society burned down the church at Okokobe. The fact that nobody was killed or otherwise hurt despite being attacked with machetes was attributed to divine intervention. That night, Our Father travelled with a band of his followers to Eziama-Ossah, where he subsequently took residence. </p>
            <p>The church was formally spilt between Faith Tabernacle Gospel Church and the newly formed True Faith Tabernacle Gospel Church which is now called The Tabernacle Of The Most High God. </p>
            <p>The Tabernacle Of The Most High God has branches in Umahia, Okigwe, Abu, Port Harcourt, Okra, as well as some other rural areas like Olokoro, Nbewsie, etc. </p>
            </div>
        </main>
        <Footer/>
        </>
    )
   

}