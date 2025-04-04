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
        <div className="relative h-[120vh]">
            <StickyImage imgUrl={blog.image} />
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
            className="sticky top-0 w-full h-screen  z-[-1]"
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
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
    return (
        <motion.div
            ref={targetRef}
            style={{
                y,
                opacity,
            }}
            className="absolute left-0 top-0 w-full justify-center flex items-center h-screen flex-col  z-30"
        >
            <h1 className="capitalize font-bold text-center text-2xl md:text-4xl tracking-widest text-white drop-shadow-lg">
                {title}
            </h1>

            <div className="flex items-center space-x-6 md:space-x-10 text-gray-300 text-base md:text-lg mt-4">
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

            <p className="text-white/80 font-medium leading-relaxed max-w-[70%] md:max-w-[50%] mt-5 drop-shadow-md">
                {fullDescription}
            </p>
        </motion.div>
    );
}

export default Banner;
