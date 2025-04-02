import { useEffect, useState } from 'react';
import { navData } from '../../data/navListData';
import { GiCommercialAirplane } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { handleScroll } from '../../utils/scrollToTop';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`flex-between fixed top-0 left-0 right-0 bg-white z-50 px-[70px] transition-all duration-300 ${
                isScrolled ? 'py-[15px]' : 'py-[20px]'
            }`}
        >
            <Link onClick={handleScroll} to={'/'} className="flex-center">
                <h1 className="flex-center cursor-pointer hover:opacity-70 transition-all duration-500 hover:gap-4 gap-2 tracking-widest font-semibold text-gray-700 text-2xl">
                    <GiCommercialAirplane /> SkyFare
                </h1>
            </Link>
            <ul className="font-medium tracking-wide flex-center gap-6">
                {navData.map((item) => (
                    <a
                        key={item.name}
                        className={`list-none relative group cursor-pointer transition-all duration-300 hover:scale-110 ${
                            item.active
                                ? 'text-[#e06149] font-bold '
                                : 'text-gray-700'
                        }`}
                    >
                        {item.name}
                    </a>
                ))}
            </ul>
        </div>
    );
}

export default Header;
