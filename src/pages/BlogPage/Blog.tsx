/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import Header from '../../components/Header/Header';
import Banner from './BlogBanner/Banner';
import { BlogPost } from '../../types/blogType';
import { useEffect, useRef, useState } from 'react';
import { fetchImages } from '../../utils/fetchImages';
import { motion, useScroll, useTransform } from 'framer-motion';

interface UnsplashImage {
    urls: {
        full: string;
        small: string;
    };
}

function Blog() {
    const params = useParams();
    const blogs: BlogPost[] = blogPosts;
    const currentBlog = blogs.filter((blog) => blog.id === Number(params.id));
    const blog = currentBlog[0];
    const [, setTitleImage] = useState<UnsplashImage[]>([]);

    useEffect(() => {
        async function fetchAndSetImages() {
            const results: UnsplashImage[] = await Promise.all(
                blog.topDestinations.map((item) => {
                    const image = fetchImages(item.title);
                    return image;
                })
            );
            setTitleImage(results);
        }
        fetchAndSetImages();
    }, []);

    return (
        <div className="w-full">
            <header>
                <Header />
            </header>
            <Banner />
            <div className="h-[120vh] relative">
                <IntroductionSection introduction={blog.introduction} />
            </div>
            {/* <div className="p-10 lg:p-16 gap-10 flex flex-col items-start justify-start max-w-[100%] xl:max-w-[85%] mx-auto">
                <div>
                    <h1 className="blog-header font-bold mt-5  ">
                        Top Destinations
                    </h1>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectCreative]}
                    effect="creative"
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ['-120%', 0, -500],
                        },
                        next: {
                            shadow: true,
                            translate: ['120%', 0, -500],
                        },
                    }}
                    spaceBetween={20}
                    slidesPerView={2}
                    pagination={false}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    className="w-full z-30  relative "
                    breakpoints={{
                        881: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            effect: 'creative',
                        },
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <div className="absolute 881px:-top-2 881px:right-0">
                        <AirPlaneSVG />
                    </div>
                    {/* {blog.topDestinations.map((item, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className="bg-gray-50 h-[100vh] p-6 w-[80%] rounded-xl shadow-md border-l-4 mb-7 border-[#f96c50]"
                            >
                                {titleImage[index] && (
                                    <img
                                        src={titleImage[index].urls.full}
                                        alt={item.title}
                                        className="w-full h-70 object-center object-cover rounded-lg mb-4"
                                    />
                                )}
                                <h1 className="text-md font-extrabold lg:font-bold lg:text-xl text-gray-700 tracking-wide">
                                    {item.title}
                                </h1>
                                <p className="text-gray-700  text-lg leading-relaxed mt-2">
                                    {item.titleDescription}
                                </p>

                                <ul className="ml-6 list-disc text-gray-600">
                                    {item.mustSee.map((place, idx) => (
                                        <li key={idx} className="mt-2 ">
                                            <span className="font-bold text-gray-700">
                                                {place.name}:
                                            </span>{' '}
                                            {place.whyVisit}
                                        </li>
                                    ))}
                                </ul>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div> */}
        </div>
    );
}

function IntroductionImage() {
    const params = useParams();
    const [introImage, setIntroImage] = useState('');
    const blogs: BlogPost[] = blogPosts;
    const currentBlog = blogs.filter((blog) => blog.id === Number(params.id));
    const blog = currentBlog[0];
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['end end', 'end start'],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    useEffect(() => {
        async function fetchAndSet() {
            const image = await fetchImages(blog.country);
            setIntroImage(image.urls.full);
        }
        fetchAndSet();
    }, []);
    return (
        <motion.div
            ref={targetRef}
            style={{
                backgroundImage: `url(${introImage})`, // Set background image only if url exists
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                scale,
            }}
            className="sticky top-0 w-full h-screen  z-[-1]"
        >
            {' '}
            <motion.div
                style={{
                    opacity,
                }}
                className="absolute inset-0 bg-neutral-950/80"
            />
        </motion.div>
    );
}

function IntroductionSection({ introduction }: { introduction: string }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <div className="w-full h-full">
            <IntroductionImage />
            <motion.div
                ref={targetRef}
                style={{
                    opacity,
                    y,
                }}
                className="absolute p-10 left-0 top-0 w-full justify-center flex items-center h-screen flex-col  z-30"
            >
                <h1 className="text-white text-3xl md:text-4xl font-bold  mb-6 lg:mb-5">
                    Introduction
                </h1>
                <p className="text-white/80 text-md md:text-lg font-medium leading-relaxed tracking-wide">
                    {introduction}
                </p>
            </motion.div>
        </div>
    );
}

export default Blog;
