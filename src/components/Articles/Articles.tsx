import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { blogPosts } from '../../data/blogPosts';
import { MdComment } from 'react-icons/md';
import { IoMdArrowDropright } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { handleScroll } from '../../utils/scrollToTop';
function Articles() {
    return (
        <div className="w-full  px-40">
            <div className="flex-start flex-col gap-2">
                <p className="para-style">From the blog post</p>
                <h1 className="header-style">News & Articles</h1>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                pagination={false}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={800}
                className="w-full z-30 mt-5 flex items-center overflow-visible  h-[60vh]  justify-center "
            >
                {blogPosts.map((blog) => {
                    return (
                        <SwiperSlide
                            key={blog.id}
                            className="w-full overflow-visible border shadow-lg border-black/50 rounded-lg relative"
                        >
                            <div className="w-full relative  overflow-hidden">
                                <img
                                    src={blog.image}
                                    loading="lazy"
                                    className="object-cover rounded-lg object-center w-full h-[30vh]"
                                    alt={blog.title}
                                />
                                <div className="absolute bottom-0 -right-1 rounded-lg bg-[#e06149] flex">
                                    <p className=" font-bold flex-center p-5 flex-col  text-white h-20 w-20 ">
                                        {blog.day}
                                        <span className="font-light">
                                            {blog.month}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white w-full flex-start flex-col p-5  rounded-lg absolute z-50 bottom-0">
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
                                    <h1 className="text-gray-700 capitalize font-bold text-xl tracking-widest">
                                        {blog.title}
                                    </h1>
                                </div>
                                <div className="w-full mt-5 tracking-wider">
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
        </div>
    );
}

export default Articles;
