import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function OurPartners() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                scale: 0,
                y: '20%',
            }}
            animate={isInView ? { opacity: 1, y: '0%', scale: 1 } : {}}
            transition={{
                duration: 1,
                ease: 'easeInOut',
            }}
            className="bg-red-400 w-screen h-[20vh] flex-center  gap-96"
        >
            <div>
                <h1 className="text-white text-4xl font-bold">Our partners</h1>
            </div>
            <div className=" flex-center gap-24">
                <img className="w-30" src="/assets/TRIP_BIG.D.svg" alt="" />
                <img
                    className="w-30"
                    src="/assets/EASEMYTRIP.NS_BIG.D.svg"
                    alt=""
                />
                <img className="w-30" src="/assets/MMYT_BIG.D.svg" alt="" />
                <img className="w-30" src="/assets/TRVG_BIG.D.svg" alt="" />
            </div>
        </motion.div>
    );
}

export default OurPartners;
