import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper and modules styles
import 'swiper/swiper-bundle.css';
import { IoLocation } from 'react-icons/io5';

function IconicTravelSpots() {
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
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                navigation={false}
                pagination={false}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                speed={800}
                className="w-full flex justify-center relative h-[50vh]"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="w-[100%] rounded-xl h-52 shadow-md relative">
                        <img
                            src="/assets/singapore.jpg"
                            alt="Singapore "
                            className="object-cover rounded-xl"
                        />
                        <div className="border w-full flex-start gap-6">
                            <div className="p-4 pt-0 bg-white border border-gray-700 rounded-md absolute -bottom-41 w-[100%] shadow-lg">
                                <div className="flex items-center justify-start">
                                    <img
                                        className="w-24"
                                        src="/assets/rating.png"
                                        alt="Rating"
                                    />
                                    <p className="text-gray-400">4.6</p>
                                </div>
                                <p className="text-gray-700 text-center font-bold tracking-wider">
                                    Singapore and Tokyo Tour
                                </p>
                                <p className="text-[#ff6b6b] flex-start mt-4 gap-1 flex items-center justify-center">
                                    <IoLocation />
                                    <span className="text-gray-400">
                                        Central Park West NY, USA
                                    </span>
                                </p>
                                <p className="text-gray-400 mt-2 tracking-wider">
                                    From{' '}
                                    <span className="text-[#ff6b6b]">
                                        $59.00
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default IconicTravelSpots;
