/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper and modules styles
import 'swiper/swiper-bundle.css';
import { IoLocation } from 'react-icons/io5';
import { CiClock1 } from 'react-icons/ci';
import { MdGroup } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
import mockData from '../../data/MOCK_DATA.json?raw';
import { dataTypes } from '../../types/flightType';
import { useEffect, useState } from 'react';

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
    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const data: dataTypes[] = JSON.parse(mockData);
    const randomSelection: dataTypes[] = data
        .sort(() => Math.random() - 0.15)
        .splice(0, 15);
    async function fetchImages(query: string) {
        try {
            const response = await fetch(
                `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&client_id=${accessKey}&per_page=11`
            );
            const data = await response.json();
            return data?.results?.[0] || null;
        } catch (error) {
            console.error('error fetching related images ', error);
        }
    }
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
    const randomPrice = (min = 100, max = 300) => {
        return (Math.random() * (max - min) + min).toFixed(2);
    };

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
                            <div className="w-[100%] rounded-xl h-62 shadow-xl hover:shadow-[rgba(53,53,56,0.5)] transition-all  duration-500 relative  ">
                                <img
                                    src={destination.image?.urls.small}
                                    alt={destination.arrivalCity}
                                    className="object-cover rounded-xl"
                                />
                                <div>
                                    <p className="absolute top-3 left-3 bg-[#42afc4] text-white tracking-wider py-1 rounded-md px-4">
                                        Featured
                                    </p>
                                </div>
                                <div className=" w-full flex-start gap-6">
                                    <div className="p-4 bg-white border border-black/20 rounded-md left-0 absolute max-h-[30vh] -bottom-41 w-[100%] shadow-lg">
                                        <p className="text-gray-700 text-left font-bold tracking-wider">
                                            {destination.arrivalCity} (
                                            {destination.arrivalCountry})
                                        </p>
                                        <div className="flex items-start justify-start gap-1 mt-4">
                                            <p className="text-[#ff6b6b] ">
                                                <IoLocation />
                                            </p>
                                            <div className="flex-start flex-col">
                                                <span className="text-gray-400 ">
                                                    Departure:{' '}
                                                    {destination.departureCity},{' '}
                                                    {
                                                        destination.departureCountry
                                                    }{' '}
                                                </span>
                                                <span className="text-gray-400 ">
                                                    Arrival:{' '}
                                                    {destination.arrivalCity},{' '}
                                                    {destination.arrivalCountry}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 mt-2 tracking-wider">
                                            From{' '}
                                            <span className="text-[#ff6b6b]">
                                                ${randomPrice()}
                                            </span>
                                        </p>
                                        <div className="bg-gray-200 mt-4 p-2 flex-between">
                                            <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                                                <CiClock1 />{' '}
                                                <span className="text-gray-700 font-medium">
                                                    {destination.duration}h
                                                </span>
                                            </p>
                                            <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                                                <MdGroup />{' '}
                                                <span className="text-gray-700 font-medium">
                                                    {destination.seatsAvailable}{' '}
                                                    Seats Left
                                                </span>
                                            </p>
                                            <p className="flex-center font-bold gap-2 text-sm btn-hover cursor-pointer transition-all duration-500 text-[#ff6b6b]">
                                                explore <FaArrowRightLong />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}

export default IconicTravelSpots;
