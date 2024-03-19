// import Banner from "../Banner/Banner";

import CaruselBanner from "../Banner/CaruselBanner/CaruselBanner";
import FrontCover from "../FrontCover/FrontCover";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <FrontCover></FrontCover>
           <Navbar></Navbar>
       <CaruselBanner></CaruselBanner>
           <Services></Services>
        </div>
    );
};

export default Home;