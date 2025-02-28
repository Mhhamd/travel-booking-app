import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { CiGlobe } from 'react-icons/ci';
import { FaTag } from 'react-icons/fa';
import { GiAirplane } from 'react-icons/gi';
import { MdEventSeat } from 'react-icons/md';

function CardTypes() {
    const cardData = [
        {
            name: 'Lowest Price Flights',
            icon: <FaTag />,
            bg: 'bg-green-100',
            iconColor: 'text-green-600',
        },
        {
            name: 'Best Airlines to Fly',
            icon: <GiAirplane />,
            bg: 'bg-blue-100',
            iconColor: 'text-blue-600',
        },
        {
            name: 'Business & Economy Options',
            icon: <MdEventSeat />,
            bg: 'bg-indigo-100',
            iconColor: 'text-indigo-600',
        },
        {
            name: 'Top Arrival Destinations',
            icon: <CiGlobe />,
            bg: 'bg-teal-100',
            iconColor: 'text-teal-600',
        },
    ];

    return (
        <div className="py-20 px-4 flex-center">
            <Splide
                options={{
                    type: 'loop',
                    perPage: 4,
                    perMove: 1,
                    gap: '2rem',
                    autoplay: true,
                    pauseOnHover: true,
                    pagination: false,
                    arrows: false,
                    width: '40%',
                    breakpoints: {
                        1280: { perPage: 5 },
                        1024: { perPage: 3 },
                        768: { perPage: 2 },
                        480: { perPage: 1 },
                    },
                }}
            >
                {cardData.map((item, index) => (
                    <SplideSlide key={index}>
                        <div
                            className="flex-center flex-col gap-3 w-full h-52
                                bg-white border border-gray-200 rounded-2xl shadow-lg transition-transform
                                hover:scale-105 hover:shadow-xl p-6 cursor-pointer duration-300"
                        >
                            <div
                                className={`${item.bg} rounded-2xl flex items-center justify-center w-16 h-16 shadow-md`}
                            >
                                <span className={`text-4xl ${item.iconColor}`}>
                                    {item.icon}
                                </span>
                            </div>
                            <p className="text-lg font-semibold tracking-wide text-gray-700 mt-3 text-center">
                                {item.name}
                            </p>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}

export default CardTypes;
