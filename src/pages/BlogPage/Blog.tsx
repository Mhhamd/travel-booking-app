/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import Header from '../../components/Header/Header';
import Banner from './BlogBanner/Banner';
import { BlogPost } from '../../types/blogType';
import { useEffect, useRef, useState } from 'react';
import { fetchImages } from '../../utils/fetchImages';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Footer from '../../components/Footer/Footer';

function Blog() {
    const params = useParams();
    const blogs: BlogPost[] = blogPosts;
    const currentBlog = blogs.find((blog) => blog.id === Number(params.id));
    const targetRef = useRef(null);
    const isInView = useInView(targetRef, { once: true });
    return (
        <div className="w-full">
            <header>
                <Header />
            </header>
            <Banner />
            <div className="h-[120vh] relative">
                <IntroductionSection
                    imgUrl={currentBlog?.country ?? ''}
                    introduction={currentBlog?.introduction ?? ''}
                />
            </div>
            <div className="h-[120vh] relative">
                <TopDestinationIntro />
            </div>
            <div>
                <TopDestinations
                    topDestinations={currentBlog?.topDestinations ?? []}
                />
            </div>
            <motion.div
                ref={targetRef}
                initial={{
                    opacity: 0,
                    y: '20%',
                }}
                animate={isInView ? { opacity: 1, y: '0%' } : {}}
                transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                }}
                className="w-full h-[50vh] flex items-start flex-col  justify-start p-15 mt-10"
            >
                <h1 className="header-style">final Thoughts</h1>
                <p className="mt-10 text-xl tracking-widest max-w-300 text-gray-700 leading-10 font-medium">
                    {currentBlog?.finalThoughts}
                </p>
            </motion.div>
            <Footer />
        </div>
    );
}

type BackgroundImage = {
    fetchImg: string;
};

function SetBackgroundImage({ fetchImg }: BackgroundImage) {
    const [introImage, setIntroImage] = useState('');
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['end end', 'end start'],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    useEffect(() => {
        async function fetchAndSet() {
            const image = await fetchImages(fetchImg);
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
                willChange: scale,
            }}
            className="sticky top-0 w-full h-screen  z-[-1]"
        >
            <motion.div
                style={{
                    opacity,
                    willChange: opacity,
                }}
                className="absolute inset-0 bg-neutral-950/80"
            />
        </motion.div>
    );
}

function IntroductionSection({
    introduction,
    imgUrl,
}: {
    introduction: string;
    imgUrl: string;
}) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <div className="w-full h-full">
            <SetBackgroundImage fetchImg={imgUrl} />
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

function TopDestinationIntro() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
    return (
        <div className="w-full h-full">
            <SetBackgroundImage fetchImg="airplane window" />
            <motion.div
                ref={targetRef}
                style={{
                    opacity,
                    y,
                }}
                className="absolute p-10 left-0 top-0 w-full justify-center flex items-center h-screen flex-col  z-30"
            >
                <h1 className="text-white text-3xl md:text-4xl font-bold  mb-6 lg:mb-5">
                    Top Destinations
                </h1>
                <p className="text-white/80 text-md md:text-lg font-medium leading-relaxed tracking-wide">
                    Ready for your next escape? Discover where fellow travelers
                    are heading and get inspired for your next big journey.
                </p>
            </motion.div>
        </div>
    );
}

type TopDestinationProps = {
    topDestinations: {
        title: string;
        titleDescription: string;
        mustSee: { name: string; whyVisit: string }[];
    }[];
};

function TopDestinations({ topDestinations }: TopDestinationProps) {
    return (
        <div className="w-full ">
            {topDestinations.map((item, index) => {
                const cityLocation = item.title.trim().split(' ')[0];
                return (
                    <div>
                        <div key={index} className="relative w-full h-[130vh]">
                            {/* Background Image */}
                            <SetBackgroundImage fetchImg={cityLocation} />
                            <TopDestinationsText
                                title={item.title}
                                titleDescription={item.titleDescription}
                                mustSeeItems={item.mustSee}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

type MustSeeProps = {
    mustSeeItems: { name: string; whyVisit: string }[];
    title: string;
    titleDescription: string;
};

function TopDestinationsText({
    title,
    titleDescription,
    mustSeeItems,
}: MustSeeProps) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
    const cityLocation = title.trim().split(' ')[0];
    const citySplit = title.trim().split('–')[1];
    return (
        <motion.div
            ref={targetRef}
            style={{
                opacity,
                y,
                willChange: 'transform, opacity', // Hint to the browser
            }}
            className="absolute p-10 left-0 top-0 w-full h-full flex justify-center items-center flex-col z-30"
        >
            <h1 className="text-white text-3xl md:text-6xl font-bold mb-6 lg:mb-5">
                {cityLocation}
            </h1>
            <h1 className="text-white text-md md:text-lg font-medium mb-6 lg:mb-5">
                {citySplit}
            </h1>
            <p className="text-[#f96c50] text-md md:text-lg font-medium leading-relaxed tracking-wide">
                {titleDescription}
            </p>

            <div className="flex-center flex-col mt-12 w-full">
                <h1 className="text-white mt-7 capitalize font-bold tracking-widest mb-7 text-2xl">
                    Top Attractions in {cityLocation}
                </h1>
                <ul className="list-disc flex-col text-white/80">
                    {mustSeeItems.map((place, placeIdx) => (
                        <li key={placeIdx} className="mt-5">
                            <span className="font-bold tracking-wider text-white ">
                                {place.name}:
                            </span>{' '}
                            {place.whyVisit}
                        </li>
                    ))}
                </ul>
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        opacity: 1,
                    }}
                    whileTap={{
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.125,
                        ease: 'easeInOut',
                    }}
                    className="text-white font-semibold tracking-widest py-4 w-70 rounded-sm bg-[#f96c50]
           hover:cursor-pointer hover:opacity-80 transition-opacity duration-300 mt-10"
                >
                    Save to itinerary
                </motion.button>
            </div>
        </motion.div>
    );
}

export default Blog;
