import BottomPage from "./BottomPage.js";
import FrontImage from "./FrontImage.js";
import Navbar from "./Navbar.js"

const Home = () => {
    return ( 
        <div className="home">
            <Navbar />
            <FrontImage />
            <BottomPage />
        </div>
     );
}
 
export default Home;