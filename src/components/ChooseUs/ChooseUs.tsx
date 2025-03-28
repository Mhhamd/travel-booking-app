import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { IoIosSpeedometer } from 'react-icons/io';
import { FaCreditCard } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function ChooseUs() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true });
    const benefits = [
        {
            icon: <VscWorkspaceTrusted className="para-style text-4xl" />,
            title: 'Trusted & Reliable',
            description:
                'SkyFare ensures safe and reliable bookings with top-rated travel partners.',
        },
        {
            icon: <IoIosSpeedometer className="para-style text-4xl" />,
            title: 'Instant Bookings',
            description:
                'Get real-time confirmations and instant ticket bookings with no delays.',
        },
        {
            icon: <FaCreditCard className="para-style text-4xl" />,
            title: 'Best Price Guarantee',
            description:
                'We offer competitive prices and exclusive deals for your travel needs.',
        },
    ];
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
            className="flex w-full"
        >
            <div className="w-full relative">
                <div className="absolute h-[60%] -right-2 top-[25%] bg-[#f96c50]  w-3 rounded-2xl flex-center "></div>
                <img
                    className=" h-full object-center z-[20] object-cover"
                    src="/assets/chooseus.jpg"
                    alt="chooseus"
                />
            </div>
            <div className="bg-[#323043] p-16  text-white w-full ">
                <div className="flex-start flex-col gap-4">
                    <p className="para-style">Our benefit lists</p>
                    <h1 className="font-bold capitalize text-3xl">
                        why choose skyfare
                    </h1>
                    <p className="text-[#9e9cb1]">
                        Planning your next adventure has never been easier. At
                        SkyFare, we provide seamless travel experiences with
                        unbeatable deals, reliable booking options, and 24/7
                        customer support. Whether you're looking for a quick
                        getaway or a dream vacation, our secure and
                        user-friendly platform ensures you reach your
                        destination with ease and confidence.
                    </p>
                </div>
                <div className="grid gap-6 mt-6 md:grid-cols-2">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            {benefit.icon}
                            <div>
                                <h3 className="text-xl font-semibold">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-400">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default ChooseUs;
