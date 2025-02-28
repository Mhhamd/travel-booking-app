import { FaCalendarAlt, FaSearch, FaHiking } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import HandDrawnArrow from '../Arrow';
import CardTypes from '../CardTypes';
import CityInput from './CityInput';

function SearchBar() {
    return (
        <div className="flex-center relative flex-col">
            <div className="flex-center rounded-lg h-24 mt-10">
                <div className="flex bg-white rounded-lg shadow-md h-full">
                    {/* Location Inputs */}
                    <CityInput label="From" />
                    <CityInput label="Going to" />

                    {/* Trip Type (changed to input) */}
                    <div className="flex-center gap-2 px-4 py-3 border-r border-gray-500 w-52">
                        <FaHiking className="text-[#e06149]" />
                        <div>
                            <p className="text-xs text-gray-500">
                                Select trip type
                            </p>
                            <select className="bg-transparent text-black font-semibold focus:outline-none cursor-pointer">
                                <option>One-way</option>
                                <option>Round-trip</option>
                                <option>Multi-city</option>
                            </select>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="flex-center gap-2 px-4 py-3 border-r border-gray-500 w-52">
                        <FaCalendarAlt className="text-[#e06149]" />
                        <div>
                            <p className="text-xs text-gray-500">Date From</p>
                            <input
                                type="date"
                                className="bg-transparent text-black font-semibold focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Guests */}
                    <div className="flex-center gap-2 px-4 py-3 border-r w-52">
                        <FaPeopleGroup className="text-[#e06149]" />
                        <div>
                            <p className="text-xs text-gray-500">Guests</p>
                            <input
                                type="number"
                                min="1"
                                className="bg-transparent text-black font-semibold focus:outline-none w-10 text-center"
                                defaultValue="1"
                            />
                        </div>
                    </div>

                    {/* Search Button */}
                    <button className="bg-[#e06149] btn-hover rounded-tr-lg rounded-br-lg text-white px-6 py-3 flex-center gap-2 w-52">
                        <FaSearch />
                        SEARCH
                    </button>
                </div>
            </div>
            <div className="flex-center flex-col">
                <HandDrawnArrow />
                <h1 className="text-3xl tracking-wider font-medium">
                    or browse the selected type
                </h1>
            </div>
            <div className="absolute -bottom-[130%] ">
                <CardTypes />
            </div>
        </div>
    );
}

export default SearchBar;
