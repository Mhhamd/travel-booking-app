import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SearchBanner from './SearchBanner';
import { dataTypes } from '../../types/flightType';
import mockData from '../../data/MOCK_DATA.json?raw';
import { fetchImages } from '../../utils/fetchImages';
import FlightCard from '../../components/shared/FlightCard';
import Footer from '../../components/Footer/Footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
interface UnsplashImage {
    urls: {
        full: string;
        small: string;
    };
}
interface Destination {
    arrivalCity: string;
    departureCity: string;
    arrivalCountry: string;
    departureCountry: string;
    duration: number;
    seatsAvailable: number;
    image: UnsplashImage | null;
}
function SearchResults() {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const data: dataTypes[] = JSON.parse(mockData);
    const goingTo = useSelector((state: RootState) => state.search.goingTo);
    const filteredData = data.filter((item) => {
        return item.arrival_city === goingTo;
    });
    console.log(filteredData);
    useEffect(() => {
        async function fetchAndSetImages() {
            const results: Destination[] = await Promise.all(
                filteredData.map(async (item: dataTypes) => {
                    const image = await fetchImages(item.arrival_city);
                    return {
                        arrivalCity: item.arrival_city,
                        arrivalCountry: item.arrival_country,
                        departureCity: item.departure_city,
                        departureCountry: item.departure_country,
                        duration: item.duration,
                        seatsAvailable: item.seats_available,
                        image,
                    };
                })
            );
            setDestinations(results);
        }
        fetchAndSetImages();
    }, []);
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
                            150 trips available
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
