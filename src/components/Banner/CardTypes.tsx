import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function CardTypes() {
    const cardData = [
        {
            name: 'Lowest Price Flights',
            image: '/assets/lowestprice.jpg',
        },
        {
            name: 'Best Airlines to Fly',
            image: '/assets/bestairline.jpg',
        },
        {
            name: 'Business & Economy Options',
            image: '/assets/businessflight.jpg',
        },
        {
            name: 'Top Arrival Destinations',
            image: '/assets/toparrival.jpg',
        },
    ];

    return (
        <div className="py-20 px-20  w-[100vw] mx-auto  items-center justify-center hidden xl:flex">
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
                            className="flex-center flex-col gap-3 h-52
                                bg-white  overflow-hidden rounded-2xl  transition-transform
                                hover:scale-105 hover:shadow-xl  cursor-pointer duration-300"
                        >
                            <div className="w-full relative h-full rounded-2xl overflow-hidden">
                                <img
                                    className="w-full object-cover h-full"
                                    src={item.image}
                                    alt=""
                                />
                                <div className="absolute inset-0 flex justify-center items-center text-2xl text-white z-30 text-center tracking-widest mt-25 font-semibold">
                                    <h1>{item.name}</h1>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-black/30 w-full h-full rounded-2xl"></div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}

export default CardTypes;
