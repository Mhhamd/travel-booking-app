/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import mockData from '../../data/MOCK_DATA.json?raw';
import { dataTypes } from '../../types/flightType';
import { useDispatch } from 'react-redux';
import { setPopular } from '../../state/slices/popularSlice';
import { Link } from 'react-router-dom';
import { handleScroll } from '../../utils/scrollToTop';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { fetchImages } from '../../utils/fetchImages';
interface UnsplashImage {
    urls: {
        full: string;
        small: string;
    };
}

interface Destination {
    city: string;
    image: UnsplashImage | null;
}

const MotionLink = motion(Link);
function TopDestinations() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '-100px 0px 0px 0px', // Negative bottom margin makes it trigger earlier
    });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'end start'],
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const dispatch = useDispatch();
    const [destinations, setDestinations] = useState<Destination[]>([]);

    const data = JSON.parse(mockData);
    const filteredData = data.filter((item: dataTypes) => {
        return item.arrival_country_popular === 'Popular';
    });

    const uniqueDestionations: typeof filteredData = [];

    // preventing duplicates
    const seenCities = new Set();
    for (const item of filteredData) {
        if (!seenCities.has(item.arrival_city)) {
            seenCities.add(item.arrival_city);
            uniqueDestionations.push(item);
        }
    }
    const randomSelection = uniqueDestionations
        .sort(() => Math.random() - 0.9)
        .splice(0, 9);

    useEffect(() => {
        async function fetchAndSetImages() {
            const results: Destination[] = await Promise.all(
                randomSelection.map(async (item: dataTypes) => {
                    const image = await fetchImages(item.arrival_city);
                    return { city: item.arrival_city, image };
                })
            );
            setDestinations(results);
        }
        fetchAndSetImages();
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Adjust this value for the stagger delay
                delayChildren: 0.3, // Delay before starting the stagger
            },
        },
    };
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };
    return (
        <motion.div
            style={{
                opacity,
                y,
            }}
            transition={{
                duration: 1.5,
                ease: 'easeInOut',
                staggerChildren: 0.5,
            }}
            className="flex-center gap-12 flex-col p-12 mt-0 md:mt-10"
        >
            <div className="flex-center flex-col gap-4">
                <h1 className="font-medium text-[#f96c50] tracking-wider">
                    Where to Go
                </h1>
                <h1 className="text-gray-700 md:text-3xl font-bold tracking-widest text-xl sm:text-2xl  text-nowrap">
                    Explore Exotic Destinations
                </h1>
            </div>
            <motion.div
                initial="hidden"
                animate={isInView ? 'show' : 'hidden'}
                ref={ref}
                variants={container}
                className="grid lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-4 place-content-center capitalize"
            >
                {destinations.map(({ city, image }) => (
                    <MotionLink
                        variants={item}
                        transition={{ duration: 1.5 }}
                        to={`/popular/${city}`}
                        onClick={() => {
                            dispatch(setPopular(city));
                            handleScroll();
                        }}
                        key={city}
                        className="relative w-80 rounded-xl overflow-hidden"
                    >
                        <img
                            className="object-center object-cover w-full h-full img-hover"
                            src={image?.urls.small}
                            alt={city}
                            loading="lazy"
                        />
                        <h1 className="absolute bottom-0 text-white text-2xl font-bold tracking-wider p-6">
                            {city}
                        </h1>
                        <span className="absolute top-0 right-0 rounded-lg font-semibold bg-[#e06149] text-white m-6 py-2 px-6">
                            Popular
                        </span>
                    </MotionLink>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default TopDestinations;
