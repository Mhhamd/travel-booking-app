import Header from '../../components/Header/Header';
import SearchBanner from '../SearchPage/SearchBanner';

import Footer from '../../components/Footer/Footer';
import { useDestinations } from '../../utils/useDestinations';
import FlightCard from '../../components/shared/FlightCard';

function PopularResults() {
    const destinations = useDestinations();

    return (
        <>
            <div className="flex items-center flex-col justify-center">
                <div>
                    <Header />
                </div>
                <SearchBanner />
                {/* <SearchBar showSelcetedTypes={false} /> */}
                <div className="mt-13 w-[90%] mx-auto">
                    {' '}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                        <h1 className="font-bold tracking-widest col-span-full">
                            {destinations.length} trips available
                        </h1>
                        {destinations.map((destination, index) => (
                            <div key={index} className="flex-center mb-50">
                                <FlightCard
                                    airLine={destination.airLine}
                                    class={destination.class}
                                    id={index}
                                    image={destination.image?.urls.small}
                                    arrivalCity={destination.arrivalCity}
                                    arrivalCountry={destination.arrivalCountry}
                                    departureCity={destination.departureCity}
                                    departureCountry={
                                        destination.departureCountry
                                    }
                                    duration={destination.duration}
                                    seatsAvailable={destination.seatsAvailable}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PopularResults;
