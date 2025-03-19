import { FaCalendarAlt, FaSearch, FaHiking } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import HandDrawnArrow from '../Arrow';
import CardTypes from '../CardTypes';
import CityInput from './CityInput';
import { Link } from 'react-router-dom';
import { RootState } from '../../../state/store';
import { useSelector } from 'react-redux';
import * as React from 'react';
import { useRef } from 'react';
import { handleScroll } from '../../../utils/scrollToTop';

function SearchBar({ showSelcetedTypes: showSelectedTypes = true }) {
    const fromInputValue = useSelector((state: RootState) => state.search.from);
    const goingToInputValue = useSelector(
        (state: RootState) => state.search.goingTo
    );
    const dateRef = useRef<HTMLInputElement>(null);
    const handleSearch = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (
            fromInputValue.trim() === '' ||
            goingToInputValue.trim() === '' ||
            dateRef.current?.value.trim() === ''
        ) {
            event.preventDefault();
            alert('Please fill out the fields');
            return;
        }
    };

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
                            <select
                                required
                                className="bg-transparent text-black font-semibold focus:outline-none cursor-pointer"
                            >
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
                                ref={dateRef}
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
                    <Link
                        onClick={(event) => {
                            handleSearch(event);
                            handleScroll();
                        }}
                        to={`/search/${fromInputValue}/${goingToInputValue}/`}
                        className="bg-[#e06149]  rounded-tr-lg rounded-br-lg hover:opacity-80 transition-all duration-300 text-white px-6 py-3 flex-center gap-2 w-52"
                    >
                        <FaSearch />
                        SEARCH
                    </Link>
                </div>
            </div>
            <div className="flex-center flex-col">
                <HandDrawnArrow />
                {showSelectedTypes && (
                    <h1 className="text-3xl tracking-wider -z-10 font-medium">
                        or browse the selected type
                    </h1>
                )}
            </div>
            <div className="absolute -bottom-[130%] ">
                {showSelectedTypes && <CardTypes />}
            </div>
        </div>
    );
}

export default SearchBar;
