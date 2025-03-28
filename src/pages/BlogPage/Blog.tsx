/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import Header from '../../components/Header/Header';
import Banner from './BlogBanner/Banner';
import { BlogPost } from '../../types/blogType';
import { useEffect, useRef, useState } from 'react';
import { fetchImages } from '../../utils/fetchImages';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Autoplay,
    Navigation,
    Pagination,
    EffectCreative,
} from 'swiper/modules';
interface UnsplashImage {
    urls: {
        full: string;
        small: string;
    };
}
function Blog() {
    const params = useParams();
    const [titleImage, setTitleImage] = useState<UnsplashImage[]>([]);
    const blogs: BlogPost[] = blogPosts;
    const currentBlog = blogs.filter((blog) => blog.id === Number(params.id));
    const blog = currentBlog[0];
    const introRef = useRef<HTMLDivElement | null>(null);
    console.log(blog);
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
        <div className="w-full ">
            <header>
                <Header />
            </header>
            <Banner scrollTo={introRef} />
            <div className="p-10 md:p-16 gap-10 flex flex-col items-start justify-start max-w-[100%] lg:max-w-[80%] mx-auto">
                <div>
                    <h1
                        ref={introRef}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r text-[#f96c50] bg-clip-text mb-6 md:mb-10"
                    >
                        Introduction
                    </h1>
                    <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed tracking-wide">
                        {blog.introduction}
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl lg:text-4xl font-bold mt-5  text-[#f96c50] ">
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
                    className="w-full z-30  relative"
                >
                    <div className="absolute -top-2 right-0">
                        <div>
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
                    {blog.topDestinations.map((item, index) => {
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
                                <h1 className="text-xl md:text-3xl font-bold text-gray-700 tracking-wide">
                                    {item.title}
                                </h1>
                                <p className="text-gray-700  text-lg leading-relaxed mt-2">
                                    {item.titleDescription}
                                </p>

                                {/* Looping through mustSee inside each destination */}
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
            </div>
        </div>
    );
}

export default Blog;
