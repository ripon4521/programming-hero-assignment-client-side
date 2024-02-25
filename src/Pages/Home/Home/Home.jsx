import Banner from "../Banner/Banner";
import FrontCover from "../FrontCover/FrontCover";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <FrontCover></FrontCover>
           <Navbar></Navbar>
           <Banner></Banner>
        </div>
    );
};

export default Home;