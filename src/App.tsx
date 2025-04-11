import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import PlanTrip from './components/PlanTrip/PlanTrip';
import IconicTravelSpots from './components/IconicTravelSpots/IconicTravelSpots';
import TopDestinations from './components/TopDestinations/TopDestinations';
import DiscoverSection from './components/DiscoverSection/DiscoverSection';
import OurPartners from './components/OurPartners/OurPartners';
import Customers from './components/Customers/Customers';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Footer from './components/Footer/Footer';
import Articles from './components/Articles/Articles';

export default function App() {
    return (
        <>
            <header>
                <Header />
            </header>
            <div className=" gap-24 flex-center flex-col  ">
                <Banner />
                <TopDestinations />
                <PlanTrip />
            </div>
            <div className="flex-center mt-24 flex-col w-full">
                <IconicTravelSpots />
                <DiscoverSection />
                <OurPartners />
            </div>
            <div className="flex-center flex-col w-full gap-24">
                <Customers />
                <ChooseUs />
                <Articles />
                <Footer />
            </div>
        </>
    );
}
