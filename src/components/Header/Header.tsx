import { useEffect, useState } from 'react';
import { navData } from '../../data/navListData';
import { GiCommercialAirplane } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { handleScroll } from '../../utils/scrollToTop';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
function Header() {
    const [isScrolledDown, setIsScrolledDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsScrolledDown(true);
            } else if (window.scrollY < lastScrollY) {
                setIsScrolledDown(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);
    const menuVariants = {
        hidden: {
            opacity: 0,
            y: '-100%',
            transition: {
                duration: 0.4,
                ease: 'easeInOut',
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: 'easeInOut',
            },
        },
        exit: {
            opacity: 0,
            y: '-100%',
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div className="w-full relative">
            <div
                className={`flex-between w-full fixed top-0 py-1 md:py-[20px] left-0 right-0 bg-white z-50 md:px-[70px] px-[40px] transition-all duration-300 ${
                    isScrolledDown ? '-translate-y-full' : 'translate-y-0'
                }`}
            >
                <Link onClick={handleScroll} to={'/'} className="flex-center">
                    <h1 className="flex-center cursor-pointer hover:opacity-70 transition-all duration-500 hover:gap-4 gap-2 tracking-widest font-semibold text-gray-700 text-xl md:text-2xl">
                        <GiCommercialAirplane /> SkyFare
                    </h1>
                </Link>
                <ul className="hidden  md:flex font-medium tracking-wide  gap-6">
                    {navData.map((item) => (
                        <a
                            key={item.name}
                            className={`list-none relative group  transition-all duration-300  ${
                                item.active
                                    ? 'text-[#e06149] font-bold cursor-pointer hover:scale-110 '
                                    : 'text-gray-400 cursor-not-allowed'
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </ul>
                <HamburgerMenu
                    setIsMenuOpen={setIsMenuOpen}
                    isMenuOpen={isMenuOpen}
                />
            </div>
            <AnimatePresence mode="wait">
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="fixed inset-0 z-50 bg-white/70 backdrop-blur-2xl flex-center"
                    >
                        <div className=" relative h-full w-full flex items-center justify-center">
                            <ul className="flex flex-col gap-6 font-medium tracking-wide text-black items-center justify-center">
                                <div className="absolute top-10 right-10">
                                    <HamburgerMenu
                                        setIsMenuOpen={setIsMenuOpen}
                                        isMenuOpen={isMenuOpen}
                                    />
                                </div>
                                {navData.map((item) => (
                                    <a
                                        href={item.link}
                                        key={item.name}
                                        onClick={() => {
                                            if (item.active) {
                                                setIsMenuOpen(false);
                                                handleScroll();
                                            }
                                        }}
                                        className={`list-none relative group transition-all duration-300 ${
                                            item.active
                                                ? 'text-[#e06149] font-bold cursor-pointer hover:scale-110'
                                                : 'text-gray-400 cursor-not-allowed'
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

type HamburgerMenuProps = {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }: HamburgerMenuProps) => {
    return (
        <MotionConfig>
            <motion.button
                initial={false}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                animate={isMenuOpen ? 'open' : 'closed'}
                className="relative visible md:hidden h-20 cursor-pointer w-20 z-50 rounded-full  transition-colors hover:bg-[#c1bfbe]/50"
            >
                <motion.span
                    style={{
                        left: '50%',
                        top: '35%',
                        x: '-50%',
                        y: '-50%',
                    }}
                    variants={{
                        open: {
                            rotate: '45deg',
                            top: ['35%', '50%', '50%'],
                        },
                        closed: {
                            rotate: '0deg',
                            top: ['50%', '50%', '35%'],
                        },
                    }}
                    className="absolute h-1 w-10 bg-[#e06149]"
                ></motion.span>
                <motion.span
                    style={{
                        left: '50%',
                        top: '50%',
                        x: '-50%',
                        y: '-50%',
                    }}
                    variants={{
                        open: {
                            rotate: '-45deg',
                        },
                        closed: {
                            rotate: '0deg',
                        },
                    }}
                    className="absolute h-1 w-10 bg-[#e06149]"
                ></motion.span>
                <motion.span
                    style={{
                        left: 'calc(50% + 10px)',
                        bottom: '35%',
                        x: '-50%',
                        y: '50%',
                    }}
                    variants={{
                        open: {
                            rotate: '45deg',
                            left: '50%',
                            bottom: ['35%', '50%', '50%'],
                        },
                        closed: {
                            rotate: '0deg',
                            left: 'calc(50% + 10px)',
                            bottom: ['50%', '50%', '35%'],
                        },
                    }}
                    className="absolute h-1 w-5 bg-[#e06149]"
                ></motion.span>
            </motion.button>
        </MotionConfig>
    );
};

export default Header;
