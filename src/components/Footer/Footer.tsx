import { GiCommercialAirplane } from 'react-icons/gi';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function Footer() {
    return (
        <footer className="bg-[#323043] w-full py-12 px-6">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-10">
                {/* Column 1 - Brand Info */}
                <div className="flex flex-col gap-5 text-center md:text-left">
                    <div className="border-b pb-5 border-white">
                        <h1 className="flex items-center justify-center md:justify-start gap-2 text-white font-semibold hover:opacity-70 transition-all duration-500 tracking-widest text-2xl cursor-pointer">
                            <GiCommercialAirplane /> SkyFare
                        </h1>
                        <p className="mt-2 text-[#a7a7a7] capitalize">
                            welcome to our trip and travel agency
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 text-[#a7a7a7]">
                        <p className="flex items-center justify-center md:justify-start gap-3">
                            <FaPhone className="text-[#e06149]" /> 92 666 888
                            0000
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-3">
                            <MdEmail className="text-[#e06149]" />{' '}
                            skyfare@gmail.com
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-3">
                            <FaLocationDot className="text-[#e06149]" /> 66
                            Broklyn Street New York, USA
                        </p>
                    </div>
                </div>

                {/* Column 2 - Company */}
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <h2 className="text-white text-2xl font-semibold tracking-widest">
                        Company
                    </h2>
                    <ul className="flex flex-col gap-2 text-[#a7a7a7]">
                        {[
                            'About us',
                            'Community Blogs',
                            'Rewards',
                            'Work with us',
                            'Contact',
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="hover:opacity-70 transition-all duration-300 cursor-pointer"
                            >
                                <a href="/">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3 - Explore */}
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <h2 className="text-white text-2xl font-semibold tracking-widest">
                        Explore
                    </h2>
                    <ul className="flex flex-col gap-2 text-[#a7a7a7]">
                        {[
                            'Account',
                            'Privacy Policy',
                            'Affiliate Program',
                            'Our Partners',
                            'Events',
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="hover:opacity-70 transition-all duration-300 cursor-pointer"
                            >
                                <a href="/">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4 - Newsletter */}
                <div className="flex flex-col gap-5 text-center md:text-left">
                    <h2 className="text-white text-2xl font-semibold tracking-widest">
                        Newsletter
                    </h2>
                    <div className="w-full">
                        <input
                            className="w-full bg-[#21202c] outline-none placeholder:text-gray-400 p-4 border border-transparent focus:border-[#e06149] transition-all duration-300 rounded-lg text-white tracking-wide"
                            placeholder="Email Address"
                            type="text"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 1 }}
                            transition={{ duration: 0.125, ease: 'easeInOut' }}
                            className="w-full mt-4 bg-[#e06149] rounded-lg text-white uppercase font-semibold tracking-wide py-3"
                        >
                            Subscribe
                        </motion.button>
                        <div className="flex items-center gap-2 mt-4 justify-center md:justify-start">
                            <input type="checkbox" id="agreement" />
                            <label
                                htmlFor="agreement"
                                className="text-[#a7a7a7] text-sm"
                            >
                                I agree to all terms and policies
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
