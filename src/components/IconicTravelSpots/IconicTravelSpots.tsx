/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper and modules styles
import 'swiper/swiper-bundle.css';
import mockData from '../../data/MOCK_DATA.json?raw';
import { dataTypes } from '../../types/flightType';
import { useEffect, useState } from 'react';
import FlightCard from '../shared/FlightCard';
import { fetchImages } from '../../utils/fetchImages';

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

function IconicTravelSpots() {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const data: dataTypes[] = JSON.parse(mockData);
    const randomSelection: dataTypes[] = data
        .sort(() => Math.random() - 0.15)
        .splice(0, 15);

    useEffect(() => {
        async function fetchAndSetImages() {
            const results: Destination[] = await Promise.all(
                randomSelection.map(async (item: dataTypes) => {
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
        <div className="flex-center w-full flex-col gap-12 p-12">
            <div className="flex-center gap-4 flex-col">
                <p className="text-lg text-[#ff6b6b] font-semibold">
                    Not sure where to go next?
                </p>
                <h1 className="text-3xl font-bold text-gray-700">
                    Explore Iconic Travel Spots
                </h1>
            </div>

            {/* Swiper Section */}
            {destinations.length > 0 && (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    pagination={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    speed={800}
                    className="w-full flex justify-center  relative h-[55vh]"
                >
                    {destinations.map((destination, index) => (
                        <SwiperSlide key={index}>
                            <FlightCard
                                image={destination.image?.urls.small}
                                arrivalCity={destination.arrivalCity}
                                arrivalCountry={destination.arrivalCountry}
                                departureCity={destination.departureCity}
                                departureCountry={destination.departureCountry}
                                duration={destination.duration}
                                seatsAvailable={destination.seatsAvailable}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}

export default IconicTravelSpots;
