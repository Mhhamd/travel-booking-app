import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/swiper-bundle.css';

function IconicTravelSpots() {
    return (
        <>
            <div className="flex-center gap-4 flex-col">
                <p className="text-lg text-[#ff6b6b] font-semibold">
                    Not sure where to go next?
                </p>
                <h1 className="text-3xl font-bold text-gray-800">
                    Explore Iconic Travel Spots
                </h1>
            </div>

            {/* Swiper Section */}
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                centeredSlides={true}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                spaceBetween={20}
                className="w-full max-w-5xl px-4"
            >
                <SwiperSlide>
                    <div className="relative w-80 h-52 rounded-lg overflow-hidden shadow-lg">
                        <img
                            className="w-full h-full object-cover"
                            src="/assets/singapore.jpg"
                            alt="Singapore"
                        />
                        <p className="absolute top-3 left-3 bg-[#42afc4] text-white text-sm font-medium tracking-widest py-1 px-3 rounded-md">
                            Featured
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-80 h-52 rounded-lg overflow-hidden shadow-lg">
                        <img
                            className="w-full h-full object-cover"
                            src="/assets/singapore.jpg"
                            alt="Singapore"
                        />
                        <p className="absolute top-3 left-3 bg-[#42afc4] text-white text-sm font-medium tracking-widest py-1 px-3 rounded-md">
                            Featured
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-80 h-52 rounded-lg overflow-hidden shadow-lg">
                        <img
                            className="w-full h-full object-cover"
                            src="/assets/singapore.jpg"
                            alt="Singapore"
                        />
                        <p className="absolute top-3 left-3 bg-[#42afc4] text-white text-sm font-medium tracking-widest py-1 px-3 rounded-md">
                            Featured
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Additional Info Section */}
            <div className="flex justify-center mt-8">
                <div className="w-80 border rounded-xl overflow-hidden shadow-md">
                    <img src="/assets/singapore.jpg" alt="Singapore" />
                    <div className="p-4 bg-white">
                        <img
                            className="w-24"
                            src="/assets/rating.png"
                            alt="Rating"
                        />
                        <p className="text-gray-700 mt-2">
                            Discover the best spots!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IconicTravelSpots;
