// import Banner from "../Banner/Banner";

import Footer from "../../Footer/Footer";
import CaruselBanner from "../Banner/CaruselBanner/CaruselBanner";
import FrontCover from "../FrontCover/FrontCover";
import MobileAppBanner from "../MobileAppBanner/MobileAppBanner";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <FrontCover></FrontCover>
      <Navbar></Navbar>
      <CaruselBanner></CaruselBanner>
      <Services></Services>
      <MobileAppBanner/>
      <Footer/>
    </div>
  );
};

export default Home;
