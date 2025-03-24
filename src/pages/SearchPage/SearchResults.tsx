import Header from '../../components/Header/Header';
import SearchBanner from './SearchBanner';

// import FlightCard from '../../components/shared/FlightCard';
import Footer from '../../components/Footer/Footer';
import { useDestinations } from '../../utils/useDestinations';
import FlightCard from '../../components/shared/FlightCard';

function SearchResults() {
    const destinations = useDestinations(true);
    return (
        <>
            <div className="flex items-center flex-col justify-center">
                <div>
                    <Header />
                </div>
                <SearchBanner />
                <div className="mt-13 w-[80%] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <h1 className="font-bold tracking-widest col-span-full">
                            {destinations.length} trips available
                        </h1>
                        {destinations.map((destination, index) => (
                            <div
                                key={index}
                                className="flex justify-center relative h-[55vh]"
                            >
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

export default SearchResults;
