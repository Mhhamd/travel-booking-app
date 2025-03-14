import { useEffect, useState } from 'react';
import { navData } from '../../data/navListData';
import { GiCommercialAirplane } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { handleScroll } from '../../utils/scrollToTop';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`flex-between fixed top-0 left-0 right-0 bg-white z-50 px-[70px] transition-all duration-300 ${
                isScrolled ? 'py-[15px] backdrop-blur-2xl' : 'py-[20px]'
            }`}
        >
            <Link onClick={handleScroll} to={'/'} className="flex-center">
                <h1 className="flex-center cursor-pointer hover:opacity-70 transition-all duration-500 hover:gap-4 gap-2 tracking-widest font-semibold text-[#323043] text-2xl">
                    <GiCommercialAirplane /> SkyFare{' '}
                </h1>
            </Link>
            <ul className="font-medium tracking-wide flex-center gap-6">
                {navData.map((item) => (
                    <Link
                        to={item.link}
                        className={`list-none relative group cursor-pointer transition-all duration-300 hover:scale-110 hover:text-[#e06149]${
                            item.active ? ' active' : ''
                        }`}
                        key={item.name}
                    >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e06149] transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Header;
