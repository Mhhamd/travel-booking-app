import Header from '../../components/Header/Header';
import SearchBanner from './SearchBanner';

// import FlightCard from '../../components/shared/FlightCard';
import Footer from '../../components/Footer/Footer';
import { IoLocation } from 'react-icons/io5';
import { useDestinations } from '../../utils/useDestinations';

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
                    {' '}
                    {/* Add mx-auto to center the container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <h1 className="font-bold tracking-widest col-span-full">
                            {destinations.length} trips available
                        </h1>
                        {destinations.map((destination, index) => (
                            <div
                                key={index}
                                className="flex justify-center relative h-[55vh]"
                            >
                                <div className="bg-white rounded-2xl border-black/50 border">
                                    <div className="rounded-2xl overflow-hidden">
                                        <img
                                            src={destination.image?.urls.small}
                                            alt=""
                                        />
                                        <div className="bg-white p-2 flex-start flex-col gap-6  ">
                                            <div>
                                                <p className="text-gray-700 text-left font-bold tracking-wider">
                                                    Airline:{' '}
                                                    <span className="text-gray-700 font-light">
                                                        {destination.airLine}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="flex items-start justify-start gap-1">
                                                <IoLocation className="text-[#ff6b6b]" />
                                                <div className="flex-start flex-col">
                                                    <span className="text-gray-400 ">
                                                        Departure:{' '}
                                                        <span>
                                                            {
                                                                destination.departureCity
                                                            }
                                                        </span>
                                                    </span>
                                                    <span className="text-gray-400 ">
                                                        Arival:{' '}
                                                        {
                                                            destination.arrivalCity
                                                        }
                                                        ,{' '}
                                                        {
                                                            destination.departureCountry
                                                        }{' '}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <FlightCard
                                    image={destination.image?.urls.small}
                                    arrivalCity={destination.arrivalCity}
                                    arrivalCountry={destination.arrivalCountry}
                                    departureCity={destination.departureCity}
                                    departureCountry={
                                        destination.departureCountry
                                    }
                                    duration={destination.duration}
                                    seatsAvailable={destination.seatsAvailable}
                                /> */}
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
