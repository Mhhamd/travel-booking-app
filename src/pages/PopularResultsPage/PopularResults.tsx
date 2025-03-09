import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SearchBanner from '../SearchPage/SearchBanner';
import { useParams } from 'react-router-dom';
import { dataTypes } from '../../types/flightType';
import mockData from '../../data/MOCK_DATA.json?raw';
import { fetchImages } from '../../utils/fetchImages';
import { IoLocation } from 'react-icons/io5';
import Footer from '../../components/Footer/Footer';

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
    airLine: string;
    image: UnsplashImage | null;
}

function PopularResults() {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const data: dataTypes[] = JSON.parse(mockData);
    const params = useParams();

    const filteredData = data.filter((item) => {
        return item.arrival_city === params.to;
    });
    useEffect(() => {
        async function fetchAndSetImages() {
            const results: Destination[] = await Promise.all(
                filteredData.map(async (item: dataTypes) => {
                    const image = await fetchImages(params.to ?? 'airplane');
                    return {
                        arrivalCity: item.arrival_city,
                        arrivalCountry: item.arrival_country,
                        departureCity: item.departure_city,
                        departureCountry: item.departure_country,
                        duration: item.duration,
                        seatsAvailable: item.seats_available,
                        airLine: item.airline,
                        image,
                    };
                })
            );
            setDestinations(results);
        }
        fetchAndSetImages();
    }, [params]);

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

export default PopularResults;
