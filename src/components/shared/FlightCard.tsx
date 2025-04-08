import { CiClock1 } from 'react-icons/ci';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';
import { MdGroup } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addFlight } from '../../state/slices/flightSlice';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { handleScroll } from '../../utils/scrollToTop';

interface Card {
    image: string | undefined;
    arrivalCity: string;
    departureCity: string;
    arrivalCountry: string;
    departureCountry: string;
    duration: number;
    seatsAvailable: number;
    id: number;
    airLine: string;
    class: string;
}

function FlightCard(props: Card) {
    const dispatch = useDispatch();
    const randomPrice = useMemo((min = 100, max = 300) => {
        return (Math.random() * (max - min) + min).toFixed(2);
    }, []);
    return (
        <div className="w-full rounded-xl h-62 shadow-xl hover:shadow-[rgba(53,53,56,0.5)] transition-all  duration-500 relative  ">
            <img
                src={props.image}
                alt={props.arrivalCity}
                className="object-cover w-full object-center h-full rounded-xl"
            />
            <div>
                <p className="absolute top-3 left-3 bg-[#42afc4] text-white tracking-wider py-1 rounded-md px-4">
                    Featured
                </p>
            </div>
            <div className=" w-full flex-start gap-6">
                <div className="p-4 bg-white border border-black/20 rounded-md left-0 absolute max-h-[35vh] text-nowrap overflow-hidden text-ellipsis -bottom-41 w-[100%] shadow-lg">
                    <p className="text-gray-700 text-left font-bold tracking-wider">
                        {props.arrivalCity} ({props.arrivalCountry})
                    </p>
                    <div className="flex items-start justify-start gap-1 mt-4">
                        <p className="text-[#ff6b6b] ">
                            <IoLocation />
                        </p>
                        <div className="flex-start flex-col">
                            <span className="text-gray-400 ">
                                Departure: {props.departureCity},{' '}
                                {props.departureCountry}{' '}
                            </span>
                            <span className="text-gray-400 ">
                                Arrival: {props.arrivalCity},{' '}
                                {props.arrivalCountry}
                            </span>
                        </div>
                    </div>
                    <p className="text-gray-400 mt-2 tracking-wider">
                        From{' '}
                        <span className="text-[#ff6b6b]">${randomPrice}</span>
                    </p>
                    <div className="bg-gray-200 mt-4 p-2 flex-between">
                        <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                            <CiClock1 />{' '}
                            <span className="text-gray-700 font-medium">
                                {props.duration}h
                            </span>
                        </p>
                        <p className="flex-center font-extrabold gap-2 text-sm text-[#ff6b6b]">
                            <MdGroup />{' '}
                            <span className="text-gray-700 font-medium">
                                {props.seatsAvailable} Seats Left
                            </span>
                        </p>
                        <Link
                            to={`/flight/` + props.id}
                            onClick={() => {
                                if (props.id === props.id) {
                                    dispatch(addFlight(props));
                                    handleScroll();
                                }
                            }}
                            className="flex-center font-bold gap-2 text-sm btn-hover cursor-pointer transition-all duration-500 text-[#ff6b6b] hover:scale-105 hover:opacity-80"
                        >
                            View Trip <FaArrowRightLong />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlightCard;
