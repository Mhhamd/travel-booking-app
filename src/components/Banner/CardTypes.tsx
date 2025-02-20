import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'; // Import Splide styles
import {
    FaExchangeAlt,
    FaGlobeAmericas,
    FaPlaneDeparture,
    FaTags,
} from 'react-icons/fa';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';

function CardTypes() {
    const cardData = [
        {
            name: 'Popular Destinations',
            icon: <FaGlobeAmericas className="text-blue-500 text-2xl" />,
            bg: 'bg-blue-100',
        },
        {
            name: 'Best Flight Deals',
            icon: <FaTags className="text-green-500 text-2xl" />,
            bg: 'bg-green-100',
        },
        {
            name: 'Top Airlines',
            icon: <FaPlaneDeparture className="text-indigo-500 text-2xl" />,
            bg: 'bg-orange-100',
        },
        {
            name: 'Flight Classes',
            icon: (
                <MdAirlineSeatReclineNormal className="text-orange-500 text-2xl" />
            ),
            bg: 'bg-indigo-100',
        },
        {
            name: 'Trip Types',
            icon: <FaExchangeAlt className="text-red-500 text-2xl" />,
            bg: 'bg-red-100',
        },
    ];

    return (
        <div className="py-20 px-4 flex-center">
            <Splide
                options={{
                    type: 'loop',
                    perPage: 4,
                    perMove: 1,
                    gap: '1.5rem',
                    autoplay: true,
                    pauseOnHover: true,
                    pagination: false,
                    arrows: false,
                    width: '50%',
                    breakpoints: {
                        1024: { perPage: 3 },
                        768: { perPage: 2 },
                        480: { perPage: 1 },
                    },
                }}
            >
                {cardData.map((item, index) => (
                    <SplideSlide key={index}>
                        <div
                            className="flex-center flex-col gap-3 w-full h-48
                bg-white border border-gray-200 rounded-xl shadow-md transition-transform
                hover:scale-105 hover:shadow-lg p-1 cursor-pointer duration-300"
                        >
                            <div
                                className={`${item.bg}  rounded-full flex items-center justify-center w-15 h-12`}
                            >
                                {item.icon}
                            </div>
                            <p className="text-lg font-[500] tracking-wider text-gray-700 mt-16 text-center">
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
