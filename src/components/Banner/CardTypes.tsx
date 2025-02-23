import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'; // Import Splide styles

function CardTypes() {
    const cardData = [
        {
            name: 'Popular Destinations',
            icon: '🌍', // Globe emoji
            bg: 'bg-blue-100',
        },
        {
            name: 'Best Flight Deals',
            icon: '🏷️', // Tag emoji
            bg: 'bg-green-100',
        },
        {
            name: 'Top Airlines',
            icon: '✈️', // Airplane emoji
            bg: 'bg-orange-100',
        },
        {
            name: 'Flight Classes',
            icon: '💺', // Seat emoji
            bg: 'bg-indigo-100',
        },
        {
            name: 'Trip Types',
            icon: '🔄', // Exchange arrows emoji
            bg: 'bg-red-100',
        },
    ];

    return (
        <div className="py-20 px-4 flex-center mb-12">
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
                                bg-white border border-gray-200 rounded-xl shadow-lg transition-transform
                                hover:scale-105 hover:shadow-xl p-4 cursor-pointer duration-300"
                        >
                            <div
                                className={`${item.bg} rounded-full flex items-center justify-center w-14 h-14 p-3`}
                            >
                                <span className="text-3xl">{item.icon}</span>
                            </div>
                            <p className="text-lg font-[500] tracking-wider text-gray-700 mt-3 text-center">
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
