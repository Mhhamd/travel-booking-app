import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function DiscoverSection() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true });

    const container = {
        hidden: { opacity: 0, y: '20%' },
        show: {
            opacity: 1,
            y: '0%',
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.3,
            },
        },
    };
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };
    return (
        <div className="relative">
            {/* Dark overlay */}
            <div className="absolute inset-0 w-full h-full bg-black/50"></div>

            {/* Background Image */}
            <img
                className="w-screen h-[90vh] object-center object-cover"
                src="/assets/bg.jpg"
                alt="Discover"
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
                {/* Heading & Subtext */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: '20%',
                    }}
                    animate={isInView ? { opacity: 1, y: '0%' } : {}}
                    transition={{
                        duration: 1.5,
                        staggerChildren: 0.5,
                    }}
                    ref={ref}
                >
                    <p className="text-red-400 mb-4 uppercase tracking-widest text-sm">
                        Are you ready to travel?
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
                        Discover the Best Travel Destinations
                    </h1>
                </motion.div>

                {/* Tour Options */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    ref={ref}
                    variants={container}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
                >
                    <motion.div
                        variants={item}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col border items-center gap-2 bg-white/10 p-6 rounded-lg"
                    >
                        <span className="text-red-400 text-4xl">🦌</span>
                        <p className="font-medium">Wildlife Tours</p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col border items-center gap-2 bg-white/10 p-6 rounded-lg"
                    >
                        <span className="text-red-400 text-4xl">🪂</span>
                        <p className="font-medium">Paragliding</p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col border items-center gap-2 bg-white/10 p-6 rounded-lg"
                    >
                        <span className="text-red-400 text-4xl">⛰️</span>
                        <p className="font-medium">Adventure Tours</p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col border items-center gap-2 bg-white/10 p-6 rounded-lg"
                    >
                        <span className="text-red-400 text-4xl">🏄</span>
                        <p className="font-medium">Water Sports</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default DiscoverSection;
