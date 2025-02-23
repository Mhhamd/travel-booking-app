import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import PlanTrip from './components/PlanTrip/PlanTrip';
import IconicTravelSpots from './components/IconicTravelSpots/IconicTravelSpots';
import TopDestinations from './components/TopDestinations/TopDestinations';
import DiscoverSection from './components/DiscoverSection/DiscoverSection';
import OurPartners from './components/OurPartners/OurPartners';
import Customers from './components/Customers/Customers';

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
                <div className="flex-center flex-col w-full">
                    <IconicTravelSpots />
                    <DiscoverSection />
                    <OurPartners />
                </div>
                <Customers />
            </div>
        </>
    );
}
