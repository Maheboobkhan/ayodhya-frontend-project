import NavbarWithBanner from "../components/NavbarWithBanner/NavbarWithBanner";
import Map from "../components/Map/Map.jsx";
import ConnectWithOurAgent from "../components/ConnectWithOurAgent/ConnectWithOurAgent.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Event from "../components/Event/Event.jsx";
import NewsSection from "../components/NewsSection/NewsSection.jsx";
import TimeAndPlaces from "../components/TimeAndPlaces/TimeAndPlaces.jsx";
import HowToReach from "../components/HowToReach/HowToReach.jsx";

const Home = () => {
    return (
        <div>
            <NavbarWithBanner />
            <Event />
            <NewsSection />
            <TimeAndPlaces />
            <HowToReach />
            <Map />
            <ConnectWithOurAgent />
            <Footer />
        </div>
    )
}

export default Home;