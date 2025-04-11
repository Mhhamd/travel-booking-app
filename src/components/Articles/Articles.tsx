import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { blogPosts } from '../../data/blogPosts';
import { MdComment } from 'react-icons/md';
import { IoMdArrowDropright } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { handleScroll } from '../../utils/scrollToTop';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
function Articles() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                y: '20%',
            }}
            animate={isInView ? { opacity: 1, y: '0%' } : {}}
            transition={{
                duration: 1.5,
                ease: 'easeInOut',
            }}
            className="w-full flex-center flex-col px-0 md:px-40"
        >
            <div className="flex md:items-start items-center justify-center md:justify-start mb-5 flex-col gap-2">
                <p className="para-style text-nowrap">From the blog post</p>
                <h1 className="header-style text-nowrap">News & Articles</h1>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={false}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={800}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 1280px
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                className="sm:w-[40vw] w-[90vw] lg:w-full z-30 mt-5 flex items-center overflow-visible h-[60vh]  justify-center "
            >
                {blogPosts.map((blog) => {
                    return (
                        <SwiperSlide
                            key={blog.id}
                            className="w-[20vw] overflow-visible border shadow-lg border-black/50 rounded-lg relative"
                        >
                            <div className="w-full relative overflow-hidden">
                                <img
                                    src={`${blog.image}?w=300&h=200&fit=crop`} // Adjust resolution dynamically
                                    className="object-cover rounded-lg object-center w-full h-[30vh]"
                                    alt={blog.title}
                                />
                                <div className="absolute top-0 h-fit bottom-0 -right-1 rounded-lg bg-[#e06149] flex">
                                    <p className=" font-bold flex-center p-5 flex-col  text-white h-20 w-20 ">
                                        {blog.day}
                                        <span className="font-light">
                                            {blog.month}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white w-full flex-start flex-col p-5   rounded-lg absolute z-50 bottom-0">
                                <div className=" w-full gap-4 flex items-center justify-start">
                                    <div>
                                        <p className="flex items-center justify-start gap-2 text-sm font-semibold tracking-wider">
                                            <span className="para-style">
                                                {' '}
                                                <FaUser />
                                            </span>
                                            {blog.author}{' '}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="flex items-center justify-start gap-2 text-sm font-semibold tracking-wider">
                                            <span className="para-style">
                                                {' '}
                                                <MdComment />
                                            </span>
                                            {blog.comments} Comments
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full mt-3">
                                    <h1 className="text-gray-700 capitalize font-bold 2xl:text-xl tracking-widest">
                                        {blog.title}
                                    </h1>
                                </div>
                                <div className="w-full mt-5 tracking-wide">
                                    <p>{blog.shortDescription}</p>
                                </div>
                                <div className="w-full mt-5">
                                    <Link
                                        onClick={handleScroll}
                                        to={'/blog/' + blog.id}
                                        className="para-style flex-center gap-1 cursor-pointer hover:opacity-70 transition-all duration-300"
                                    >
                                        Read more <IoMdArrowDropright />
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </motion.div>
    );
}

export default Articles;
