// import Banner from "../Banner/Banner";

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
    </div>
  );
};

export default Home;
