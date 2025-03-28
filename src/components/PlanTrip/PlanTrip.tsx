import { IoIosCheckmarkCircle } from 'react-icons/io';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function PlanTrip() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                y: '20%',
            }}
            animate={isInView ? { opacity: 1, y: '0%' } : {}}
            transition={{
                duration: 1.5,
                ease: 'easeInOut',
            }}
            className="flex-start gap-12  w-[90%]"
        >
            <div className="w-[50%] relative mask">
                <img
                    loading="lazy"
                    className="rounded-3xl"
                    src="/assets/plansection.jpg"
                    alt=""
                />
                <div className="absolute top-6 right-5">
                    <h1 className="text-3xl text-white font-semibold tracking-wider ">
                        <span className="text-[#f96c50] text-5xl">
                            30% <br />
                        </span>{' '}
                        Discount
                    </h1>
                </div>
            </div>

            <div className=" flex-start flex-col gap-6 p-12 py-0">
                <div className="flex flex-col gap-3">
                    <p className="text-[#f96c50] font-semibold tracking-wide">
                        Get to know us
                    </p>
                    <h1 className="text-gray-700 capitalize  font-bold text-3xl tracking-widest ">
                        Plan your trip with <br /> skyFare
                    </h1>
                </div>
                <div>
                    <p className="text-gray-600 font-medium tracking-wide">
                        There are many variations of passages of available but
                        the majority <br /> have suffered alteration in some
                        form, by injected hum randomised words which don't look
                        even slightly
                    </p>
                </div>
                <div className="flex-start flex-col mt-2 gap-2">
                    <div className="flex-center gap-2">
                        <IoIosCheckmarkCircle className="text-[#f96c50]" />
                        <p className="text-gray-800 font-medium">
                            Invest in your simply neighborhood
                        </p>
                    </div>
                    <div className="flex-center gap-2">
                        <IoIosCheckmarkCircle className="text-[#f96c50]" />
                        <p className="text-gray-800 font-medium">
                            Invest in your simply neighborhood
                        </p>
                    </div>
                    <div className="flex-center gap-2">
                        <IoIosCheckmarkCircle className="text-[#f96c50]" />
                        <p className="text-gray-800 font-medium">
                            Invest in your simply neighborhood
                        </p>
                    </div>
                </div>
                <div>
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
                        className="btn-style"
                    >
                        Find My Flight
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}

export default PlanTrip;
