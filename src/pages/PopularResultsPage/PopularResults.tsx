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
                <div className="mt-13 w-[80%] mx-auto">
                    {' '}
                    {/* Add mx-auto to center the container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <h1 className="font-bold tracking-widest col-span-full">
                            {destinations.length} trips available
                        </h1>
                        {destinations.map((destination) => (
                            <div className="flex-center mb-50">
                                <FlightCard
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
