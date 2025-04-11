/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import Header from '../../components/Header/Header';
import Banner from './BlogBanner/Banner';
import { BlogPost } from '../../types/blogType';
import { useEffect, useRef, useState } from 'react';
import { fetchImages } from '../../utils/fetchImages';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Footer from '../../components/Footer/Footer';
import { handleScroll } from '../../utils/scrollToTop';

const MotionLink = motion(Link);

function Blog() {
    const params = useParams();
    const blogs: BlogPost[] = blogPosts;
    const currentBlog = blogs.find((blog) => blog.id === Number(params.id));
    const targetRef = useRef(null);
    const isInView = useInView(targetRef, { once: true });

    return (
        <div className="w-full overflow-x-hidden">
            <header>
                <Header />
            </header>
            <Banner />
            <div className="relative min-h-[130vh]">
                <IntroductionSection
                    imgUrl={currentBlog?.country ?? ''}
                    introduction={currentBlog?.introduction ?? ''}
                />
            </div>
            <div className="relative min-h-[130vh]">
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
                className="w-full  flex flex-col items-start justify-start px-6 sm:px-10 md:px-20 lg:px-32 py-12 mt-10"
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Final Thoughts
                </h1>
                <p className="mt-6 text-base sm:text-lg md:text-xl tracking-wide max-w-4xl text-gray-700 leading-relaxed text-left">
                    {currentBlog?.finalThoughts}
                </p>
                <div className="flex justify-start w-full mt-8">
                    <MotionLink
                        to="/"
                        onClick={handleScroll}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                        transition={{ duration: 0.125 }}
                        className="btn-style text-sm sm:text-base px-6 py-3"
                    >
                        Book Now
                    </MotionLink>
                </div>
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
                backgroundImage: `url(${introImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                scale,
                willChange: 'transform',
            }}
            className="sticky top-0 w-full h-[130vh] z-[-1]"
        >
            <motion.div
                style={{ opacity, willChange: 'opacity' }}
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
                style={{ opacity, y }}
                className="absolute p-6 sm:p-10 left-0 top-0 w-full justify-center flex items-center h-[130vh] flex-col z-30 text-center"
            >
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    Introduction
                </h1>
                <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed tracking-wide">
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
                style={{ opacity, y }}
                className="absolute p-6 sm:p-10 left-0 top-0 w-full justify-center flex items-center h-[130vh] flex-col z-30 text-center"
            >
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    Top Destinations
                </h1>
                <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed tracking-wide">
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
        <div className="w-full">
            {topDestinations.map((item, index) => {
                const cityLocation = item.title.trim().split(' ')[0];
                return (
                    <div key={index}>
                        <div className="relative min-h-[130vh]">
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
            style={{ opacity, y }}
            className="absolute px-6 sm:px-10 left-0 top-0 w-full h-full flex justify-center items-center flex-col z-30 text-center"
        >
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                {cityLocation}
            </h1>
            <h2 className="text-white text-base sm:text-lg mb-4">
                {citySplit}
            </h2>
            <p className="text-[#f96c50] text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed tracking-wide">
                {titleDescription}
            </p>

            <div className="flex flex-col items-center mt-10 w-full px-4">
                <h3 className="text-white mt-6 capitalize font-bold tracking-widest text-xl sm:text-2xl mb-5">
                    Top Attractions in {cityLocation}
                </h3>
                <ul className="list-disc text-left text-white/80 max-w-2xl pl-4">
                    {mustSeeItems.map((place, placeIdx) => (
                        <li key={placeIdx} className="mt-3">
                            <span className="font-bold tracking-wide text-white">
                                {place.name}:
                            </span>{' '}
                            {place.whyVisit}
                        </li>
                    ))}
                </ul>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                    transition={{ duration: 0.125 }}
                    className="text-white font-semibold tracking-widest px-6 py-3 rounded bg-[#f96c50]
                    hover:opacity-80 transition-opacity duration-300 mt-8 text-sm sm:text-base"
                >
                    Save to itinerary
                </motion.button>
            </div>
        </motion.div>
    );
}

export default Blog;
