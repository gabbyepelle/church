
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Beliefs from "./Beliefs"
import Contact from "./Contact"
import History from "./History"
// import SampleEvent from "./SampleEvent"
import School from "./School"
import Worship from "./Worship"
import Zoom from "./Zoom"
import HomePage from "./HomePage"
import Events from "./Events"
import Leadership from "./Leadership"
import NotFound from "./NotFound"
import Prayer from "./Prayer"

function App() {
  

  return (
    
    <Router>
      <MobileNav/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Beliefs" element={<Beliefs/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/History" element={<History/>} />
        {/* <Route path="/SampleEvent" element={<SampleEvent/>} /> */}
        <Route path="/School" element={<School/>} />
        <Route path="/Worship" element={<Worship/>} />
        <Route path="/Zoom" element={<Zoom/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/Leadership" element={<Leadership/>} />
        <Route path="/Prayer" element={<Prayer/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App
