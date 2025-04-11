import { useParams } from 'react-router-dom';
import { blogPosts } from '../../../data/blogPosts';
import { BlogPost } from '../../../types/blogType';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

function Banner() {
    const params = useParams();
    const blogs: BlogPost[] = blogPosts;
    const currentBlog = blogs.filter((blog) => blog.id === Number(params.id));
    const blog = currentBlog[0];
    return (
        <div className="relative min-h-[130vh]">
            <StickyImage imgUrl={blog.highImage} />
            <OverLayCopy
                title={blog.title}
                author={blog.author}
                day={blog.day}
                month={blog.month}
                comments={blog.comments}
                fullDescription={blog.fullDescription}
            />
        </div>
    );
}

function StickyImage({ imgUrl }: { imgUrl: string }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['end end', 'end start'],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    return (
        <motion.div
            ref={targetRef}
            className="sticky top-0 w-full min-h-[130vh] z-[-1]"
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                scale,
            }}
        >
            <motion.div
                style={{
                    opacity,
                }}
                className="absolute inset-0 bg-neutral-950/80"
            />
        </motion.div>
    );
}

type OverLayProps = {
    title: string;
    author: string;
    day: string;
    month: string;
    comments: number;
    fullDescription: string;
};

function OverLayCopy({
    title,
    author,
    day,
    month,
    comments,
    fullDescription,
}: OverLayProps) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    // Scroll effect: move the overlay text upwards as you scroll, and fade it out.
    const y = useTransform(scrollYProgress, [0, 1], [0, -150]); // Adjust to move the text upwards
    const opacity = useTransform(
        scrollYProgress,
        [0.25, 0.5, 0.75],
        [1, 0.75, 0]
    ); // Fade effect

    return (
        <motion.div
            ref={targetRef}
            style={{
                y,
                opacity,
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full flex items-center justify-center flex-col z-30"
        >
            <h1 className="capitalize font-bold text-center text-xl md:text-4xl tracking-widest text-white drop-shadow-lg">
                {title}
            </h1>

            <div className="flex items-center  space-x-6 md:space-x-10 text-gray-300 text-[13px] md:text-2xl mt-4">
                <p>
                    ✍️{' '}
                    <span className="font-semibold text-white/80">
                        {author}
                    </span>
                </p>
                <p>
                    📅{' '}
                    <span className="text-white/80">
                        {day} {month}, 2025
                    </span>
                </p>
                <p>
                    💬{' '}
                    <span className="text-white/80">{comments} Comments</span>
                </p>
            </div>

            <p className="text-white/80 font-medium  leading-relaxed max-w-[80%] md:max-w-[50%] mt-5 drop-shadow-md">
                {fullDescription}
            </p>
        </motion.div>
    );
}

export default Banner;
