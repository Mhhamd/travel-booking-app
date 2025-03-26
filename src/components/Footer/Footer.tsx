import { GiCommercialAirplane } from 'react-icons/gi';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { motion } from 'framer-motion';
function Footer() {
    return (
        <footer className="bg-[#323043] w-full h-[45vh] px-25 flex-between">
            <div className="flex-start flex-col gap-5">
                <div className="flex-start flex-col border-b pb-5 border-white">
                    <h1 className="flex-center cursor-pointer text-white font-semibold hover:opacity-70 transition-all duration-500 hover:gap-4 gap-2 tracking-widest  text-2xl">
                        <GiCommercialAirplane /> SkyFare{' '}
                    </h1>
                    <p className="capitalize mt-2 text-[#a7a7a7]">
                        welcome to our trip and travel agency
                    </p>
                </div>
                <div className="flex-start flex-col gap-2">
                    <p className="flex-center gap-4 text-[#a7a7a7]">
                        <span className="text-[#e06149]">
                            <FaPhone />
                        </span>
                        92 666 888 0000
                    </p>
                    <p className="flex-center gap-4 text-[#a7a7a7]">
                        <span className="text-[#e06149]">
                            <MdEmail />
                        </span>
                        skyfare@gmail.com
                    </p>
                    <p className="flex-center gap-4 text-[#a7a7a7]">
                        <span className="text-[#e06149]">
                            <FaLocationDot />
                        </span>
                        66 Broklyn Street New York,USA
                    </p>
                </div>
            </div>
            <div className="flex-start flex-col gap-5">
                <div className="flex-start flex-col">
                    <h1 className="flex-center cursor-pointer text-white font-semibold hover:opacity-70 transition-all duration-500 hover:gap-4 gap-2 tracking-widest  text-2xl">
                        Company
                    </h1>
                </div>
                <div className="flex-start flex-col gap-2">
                    <nav>
                        <ul className="list-none flex-start flex-col gap-2">
                            <li className=" cursor-pointer hover:opacity-70 transition-all duration-300 text-[#a7a7a7]">
                                <a href="/">About us</a>
                            </li>
                            <li className=" cursor-pointer hover:opacity-70 transition-all duration-300 text-[#a7a7a7]">
                                <a href="/">Community Blogs</a>
                            </li>
                            <li className=" cursor-pointer hover:opacity-70 transition-all duration-300 text-[#a7a7a7]">
                                <a href="/">Rewards</a>
                            </li>
                            <li className=" cursor-pointer hover:opacity-70 transition-all duration-300 text-[#a7a7a7]">
                                <a href="/">Work with us</a>
                            </li>
                            <li className=" cursor-pointer hover:opacity-70 transition-all duration-300 text-[#a7a7a7]">
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex-start flex-col gap-5">
                <div className="flex-start flex-col">
                    <h1 className="flex-center cursor-pointer text-white font-semibold hover:opacity-70 transition-all duration-500 hover:gap-4 gap-2 tracking-widest  text-2xl">
                        Explore
                    </h1>
                </div>
                <div className="flex-start flex-col gap-2">
                    <nav>
                        <ul className="list-none flex-start flex-col gap-2">
                            <li className=" cursor-pointer hover:opacity-70 transition-all duration-300 text-[#a7a7a7]">
                                <a href="/">Account</a>
                            </li>
                            <li className=" cursor-pointer hover:opacity-70 transition-all duration-300 text-[#a7a7a7]">
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li className=" cursor-pointer hover:opacity-70 transition-all duration-300 text-[#a7a7a7]">
                                <a href="/">Affilliate Program</a>
                            </li>
                            <li className=" cursor-pointer hover:opacity-70 transition-all duration-300 text-[#a7a7a7]">
                                <a href="/">Our Partners</a>
                            </li>
                            <li className=" cursor-pointer hover:opacity-70 transition-all duration-300 text-[#a7a7a7]">
                                <a href="/">Events</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex-start flex-col gap-5">
                <div className="flex-start flex-col">
                    <h1 className="flex-center cursor-pointer text-white font-semibold hover:opacity-70 transition-all duration-500 hover:gap-4 gap-2 tracking-widest  text-2xl">
                        Newsletter
                    </h1>
                </div>
                <div className="flex-start flex-col gap-2">
                    <div className="w-[110%]">
                        <input
                            className="w-[100%] bg-[#21202c] outline-none placeholder:text-gray-400 p-6 h-15 border border-transparent focus:border-[#e06149]  transition-all duration-300 rounded-lg text-white tracking-wide"
                            placeholder="Email Address"
                            type="text"
                        />
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.125,
                                ease: 'easeInOut',
                            }}
                            className="w-full  cursor-pointer   font-semibold tracking-wide mt-4 bg-[#e06149] rounded-lg text-white uppercase h-15"
                        >
                            subscribe
                        </motion.button>
                        <div className="flex mt-4 items-center gap-2 ">
                            <input
                                type="checkbox"
                                name="agreement"
                                id="agreement"
                            />
                            <label
                                htmlFor="agreement"
                                className="text-[#a7a7a7]"
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
