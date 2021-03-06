import Bottom from "./Bottom.js";
import BottomPage from "./BottomPage.js";
import Footer from "./Footer.js";
import FrontImage from "./FrontImage.js";
import Navbar from "./Navbar.js";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <FrontImage />
      <BottomPage />
      <Footer />
      <Bottom />
    </div>
  );
};

export default Home;
