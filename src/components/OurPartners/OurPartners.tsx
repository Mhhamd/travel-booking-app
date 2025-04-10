import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function OurPartners() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true });

    const partnersImg = [
        {
            image: '/assets/TRIP_BIG.D.svg',
            alter: 'Partner 1',
        },
        {
            image: '/assets/EASEMYTRIP.NS_BIG.D.svg',
            alter: 'Partner 2',
        },
        {
            image: '/assets/MMYT_BIG.D.svg',
            alter: 'Partner 3',
        },
        {
            image: '/assets/TRVG_BIG.D.svg',
            alter: 'Partner 4',
        },
    ];

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                scale: 0,
                y: '20%',
            }}
            animate={isInView ? { opacity: 1, y: '0%', scale: 1 } : {}}
            transition={{
                duration: 1,
                ease: 'easeInOut',
            }}
            className="bg-red-400 w-full h-[20vh] flex items-center justify-between px-8 md:px-16 lg:px-32 gap-8 md:gap-16"
        >
            <div>
                <h1 className="text-white text-2xl md:text-4xl font-bold text-center text-nowrap md:text-left">
                    Our partners
                </h1>
            </div>
            <div className="flex-1 overflow-hidden">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    pagination={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={800}
                    className="w-full z-30  flex items-center  justify-center  "
                >
                    {partnersImg.map((partner, index) => (
                        <SwiperSlide
                            className="  flex items-center justify-center mx-4"
                            key={`${partner.alter}-${index}`}
                        >
                            <img
                                className="w-24 md:w-32 h-auto"
                                src={partner.image}
                                alt={partner.alter}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.div>
    );
}

export default OurPartners;
