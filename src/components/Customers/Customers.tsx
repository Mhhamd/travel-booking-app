import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
function Customers() {
    const customerData = [
        {
            name: 'Olivia Carter',
            image: '/assets/avatar1.jpg',
            rating: '/assets/rating.png',
            work: 'Customer',
            quote: 'This website makes booking flights so easy! The design is clean, and the process is super smooth. Highly recommended!',
        },
        {
            name: 'Olivia Carter',
            image: '/assets/avatar3.jpg',
            rating: '/assets/rating.png',
            work: 'Founder & CEO',
            quote: 'This website makes booking flights so easy! The design is clean, and the process is super smooth. Highly recommended!',
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
        <div className="flex-center flex-col w-full gap-12 pt-0  p-24">
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
                    delay: 4000, // 3 seconds
                }}
                loop={true}
                speed={800}
                className="w-full  flex items-center  justify-center  "
            >
                {customerData.map((person) => {
                    return (
                        <SwiperSlide
                            className=" p-6 flex flex-col items-center justify-center border border-black/30 rounded-2xl "
                            key={person.name}
                        >
                            <div className="flex justify-center flex-col items-center gap-4 h-[60vh]">
                                <img
                                    className="w-30 rounded-full object-center object-cover"
                                    src={person.image}
                                    alt={person.name}
                                    loading="lazy"
                                />
                                <div></div>
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
    );
}

export default Customers;
