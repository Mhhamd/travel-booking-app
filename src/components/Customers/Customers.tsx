import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useEffect, useState } from 'react';

interface UnsplashImage {
    width: number;
    height: number;
    urls: {
        full: string;
        small: string;
    };
}

function Customers() {
    const [images, setImages] = useState<string[]>([]);
    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    useEffect(() => {
        async function fetchImages(query: string) {
            try {
                const response = await fetch(
                    `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&client_id=${accessKey}&per_page=30`
                );
                const data = await response.json();
                const filteredImages = data.results.map(
                    (img: UnsplashImage) => img.urls.small + '&w=400'
                );
                setImages(filteredImages);
            } catch (error) {
                console.error('error fetching images', error);
            }
        }
        fetchImages('travel-nature');
    }, [accessKey]);
    const customerData = [
        {
            name: 'Olivia Carter',
            image: '/assets/avatar1.jpg',
            rating: '/assets/rating.png',
            work: 'Customer',
            quote: 'This website makes booking flights so easy! The design is clean, and the process is super smooth. Highly recommended!',
        },
        {
            name: 'Isabella Ramirez',
            image: '/assets/avatar3.jpg',
            rating: '/assets/rating.png',
            work: 'Founder & CEO',
            quote: 'A perfect combination of efficiency and great user experience. The team behind this truly understands what travelers need!',
        },
        {
            name: 'Daniel Foster',
            image: '/assets/avatar4.jpg',
            rating: '/assets/rating.png',
            work: 'Customer',
            quote: 'The attention to detail is amazing! From pricing to customer support, everything is top-notch. A must-use for frequent travelers.',
        },
        {
            name: 'Ethan Bennett',
            image: '/assets/avatar2.jpg',
            rating: '/assets/rating.png',
            work: 'Customer',
            quote: 'Fantastic service! I found the best deals in minutes, and the whole booking process was seamless. Will use it again!',
        },
        {
            name: 'Ava Mitchell',
            image: '/assets/avatar5.jpg',
            rating: '/assets/rating.png',
            work: 'Customer',
            quote: 'An incredible experience! The website is user-friendly, and booking my trip was effortless. I’ll definitely use it again!',
        },
    ];
    return (
        <div className="w-full relative ">
            <div className="absolute top-0">
                <div className="relative ">
                    <img
                        src="/assets/airplane.png"
                        className="absolute top-6 right-0 w-6"
                        alt=""
                    />
                    <svg
                        width="300"
                        height="200"
                        viewBox="0 0 300 200"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20,150 Q100,50 200,80 T280,40"
                            fill="none"
                            stroke="#ccc"
                            stroke-dasharray="5,5"
                            stroke-width="2"
                        />
                    </svg>
                </div>
            </div>
            <div className="w-full absolute overflow-hidden bg-[#f9f5ef] -bottom-24 h-[60%] flex-center ">
                <div className="absolute flex-center  w-full inset-0  ">
                    <img
                        className=" opacity-10 w-full object-cover object-center"
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a0/World_map_with_points.svg"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex-center relative flex-col w-full gap-12 pt-0  p-24 pb-0">
                <div className="flex-center flex-col">
                    <div className="flex-center flex-col gap-4">
                        <p className="para-style">Testimonials & Reviews</p>
                        <h1 className="header-style">What they're saying</h1>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    pagination={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={800}
                    className="w-full z-30  flex items-center  justify-center  "
                >
                    {customerData.map((person) => {
                        return (
                            <SwiperSlide
                                className=" z-30 p-6 flex flex-col items-center justify-center bg-white border border-black/30 rounded-2xl "
                                key={person.name}
                            >
                                <div className="z-30 flex justify-center flex-col items-center gap-4 h-[60vh]">
                                    <img
                                        className="w-30 rounded-full object-center object-cover"
                                        src={person.image}
                                        alt={person.name}
                                        loading="lazy"
                                    />
                                    <img
                                        className="w-20"
                                        src={person.rating}
                                        alt="Rating"
                                        loading="lazy"
                                    />
                                    <p className="text-gray-500 max-w-2xl">
                                        {person.quote}
                                    </p>
                                    <h1 className="mt-6 tracking-widest text-gray-900 font-semibold">
                                        {person.name}
                                    </h1>
                                    <p className="para-style">{person.work}</p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <div className="w-full relative mt-32  ">
                {images.length > 0 && (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={4}
                        pagination={false}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={800}
                        className="w-full z-30  flex items-center  justify-center   h-full overflow-hidden "
                    >
                        {images?.map((img) => {
                            return (
                                <SwiperSlide
                                    key={img}
                                    className=" z-30 flex h-full overflow-hidden  flex-col items-center justify-center  rounded-2xl "
                                >
                                    <img
                                        className="w-full rounded-md h-[30vh]  object-center object-cover"
                                        src={img}
                                        alt={img}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                )}
            </div>
        </div>
    );
}

export default Customers;
