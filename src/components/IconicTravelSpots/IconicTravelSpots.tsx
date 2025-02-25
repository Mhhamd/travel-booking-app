import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper and modules styles
import 'swiper/swiper-bundle.css';
import { IoLocation } from 'react-icons/io5';
import { CiClock1 } from 'react-icons/ci';
import { MdGroup } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
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
                <SwiperSlide>
                    <div className="w-[100%] rounded-xl h-62 shadow-xl hover:shadow-[rgba(53,53,56,0.5)] transition-all  duration-500 relative  ">
                        <img
                            src="/assets/singapore.jpg"
                            alt="Singapore "
                            className="object-cover rounded-xl"
                        />
                        <div>
                            <p className="absolute top-3 left-3 bg-[#42afc4] text-white tracking-wider py-1 rounded-md px-4">
                                Featured
                            </p>
                        </div>
                        <div className="border w-full flex-start gap-6">
                            <div className="p-4 pt-0 bg-white border border-black/20 rounded-md left-0 absolute -bottom-41 w-[100%] shadow-lg">
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
                                <div className="bg-gray-200 mt-4 p-2 flex-between">
                                    <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                                        <CiClock1 />{' '}
                                        <span className="text-gray-700 font-medium">
                                            10 days
                                        </span>
                                    </p>
                                    <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                                        <MdGroup />{' '}
                                        <span className="text-gray-700 font-medium">
                                            50
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
                <SwiperSlide>
                    <div className="w-[100%] rounded-xl h-62 shadow-xl hover:shadow-[rgba(53,53,56,0.5)] transition-all  duration-500 relative  ">
                        <img
                            src="/assets/singapore.jpg"
                            alt="Singapore "
                            className="object-cover rounded-xl"
                        />
                        <div>
                            <p className="absolute top-3 left-3 bg-[#42afc4] text-white tracking-wider py-1 rounded-md px-4">
                                Featured
                            </p>
                        </div>
                        <div className="border w-full flex-start gap-6">
                            <div className="p-4 pt-0 bg-white border border-black/20 rounded-md left-0 absolute -bottom-41 w-[100%] shadow-lg">
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
                                <div className="bg-gray-200 mt-4 p-2 flex-between">
                                    <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                                        <CiClock1 />{' '}
                                        <span className="text-gray-700 font-medium">
                                            10 days
                                        </span>
                                    </p>
                                    <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                                        <MdGroup />{' '}
                                        <span className="text-gray-700 font-medium">
                                            50
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
                <SwiperSlide>
                    <div className="w-[100%] rounded-xl h-62 shadow-xl hover:shadow-[rgba(53,53,56,0.5)] transition-all  duration-500 relative  ">
                        <img
                            src="/assets/singapore.jpg"
                            alt="Singapore "
                            className="object-cover rounded-xl"
                        />
                        <div>
                            <p className="absolute top-3 left-3 bg-[#42afc4] text-white tracking-wider py-1 rounded-md px-4">
                                Featured
                            </p>
                        </div>
                        <div className="border w-full flex-start gap-6">
                            <div className="p-4 pt-0 bg-white border border-black/20 rounded-md left-0 absolute -bottom-41 w-[100%] shadow-lg">
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
                                <div className="bg-gray-200 mt-4 p-2 flex-between">
                                    <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                                        <CiClock1 />{' '}
                                        <span className="text-gray-700 font-medium">
                                            10 days
                                        </span>
                                    </p>
                                    <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                                        <MdGroup />{' '}
                                        <span className="text-gray-700 font-medium">
                                            50
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
                <SwiperSlide>
                    <div className="w-[100%] rounded-xl h-62 shadow-xl hover:shadow-[rgba(53,53,56,0.5)] transition-all  duration-500 relative  ">
                        <img
                            src="/assets/singapore.jpg"
                            alt="Singapore "
                            className="object-cover rounded-xl"
                        />
                        <div>
                            <p className="absolute top-3 left-3 bg-[#42afc4] text-white tracking-wider py-1 rounded-md px-4">
                                Featured
                            </p>
                        </div>
                        <div className="border w-full flex-start gap-6">
                            <div className="p-4 pt-0 bg-white border border-black/20 rounded-md left-0 absolute -bottom-41 w-[100%] shadow-lg">
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
                                <div className="bg-gray-200 mt-4 p-2 flex-between">
                                    <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                                        <CiClock1 />{' '}
                                        <span className="text-gray-700 font-medium">
                                            10 days
                                        </span>
                                    </p>
                                    <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                                        <MdGroup />{' '}
                                        <span className="text-gray-700 font-medium">
                                            50
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
                <SwiperSlide>
                    <div className="w-[100%] rounded-xl h-62 shadow-xl hover:shadow-[rgba(53,53,56,0.5)] transition-all  duration-500 relative  ">
                        <img
                            src="/assets/singapore.jpg"
                            alt="Singapore "
                            className="object-cover rounded-xl"
                        />
                        <div>
                            <p className="absolute top-3 left-3 bg-[#42afc4] text-white tracking-wider py-1 rounded-md px-4">
                                Featured
                            </p>
                        </div>
                        <div className="border w-full flex-start gap-6">
                            <div className="p-4 pt-0 bg-white border border-black/20 rounded-md left-0 absolute -bottom-41 w-[100%] shadow-lg">
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
                                <div className="bg-gray-200 mt-4 p-2 flex-between">
                                    <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                                        <CiClock1 />{' '}
                                        <span className="text-gray-700 font-medium">
                                            10 days
                                        </span>
                                    </p>
                                    <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                                        <MdGroup />{' '}
                                        <span className="text-gray-700 font-medium">
                                            50
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
            </Swiper>
        </div>
    );
}

export default IconicTravelSpots;
