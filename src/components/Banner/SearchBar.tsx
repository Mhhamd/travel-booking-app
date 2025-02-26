import {
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaSearch,
    FaHiking,
} from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import HandDrawnArrow from './Arrow';
import CardTypes from './CardTypes';
import { useState, useMemo } from 'react';
import * as React from 'react';
import { availableCities } from '../../data/countriesData';
// import mockData from '../../data/MOCK_DATA.json?raw';

function SearchBar() {
    const [fromInput, setFromInput] = useState<string>('');
    const [goingToInput, setGoingToInput] = useState<string>('');
    const [dropMenuFrom, setDropMenuFrom] = useState(false);
    const [dropMenuGoing, setDropMenuGoing] = useState(false);

    const onChangeFromInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFromInput(event.target.value);
        setDropMenuFrom(true);
    };
    const onChangeGoingInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGoingToInput(event.target.value);
        setDropMenuGoing(true);
    };

    const filteredFromCities = useMemo(
        () =>
            availableCities
                .map((item: { name: string }) => item.name)
                .filter((name: string) =>
                    name.toLowerCase().includes(fromInput.toLowerCase())
                ),
        [fromInput]
    );

    const filteredToCities = useMemo(
        () =>
            availableCities
                .map((item: { name: string }) => item.name)
                .filter((name: string) =>
                    name.toLowerCase().includes(goingToInput.toLowerCase())
                ),
        [goingToInput]
    );

    return (
        <div className="flex-center flex-col">
            <div className="flex-center rounded-lg h-24 mt-10">
                <div className="flex bg-white rounded-lg shadow-md h-full">
                    {/* Location (changed to input) */}
                    <div className="py-3 border-r border-gray-500">
                        <div className="flex-center gap-2 py-3 relative  w-72">
                            <FaMapMarkerAlt className="text-[#e06149]" />
                            <div className="flex flex-col">
                                <p className="text-xs text-gray-500">From </p>
                                <input
                                    type="text"
                                    value={fromInput}
                                    onBlur={() => {
                                        setTimeout(() => {
                                            setDropMenuFrom(false);
                                        }, 200);
                                    }}
                                    onChange={onChangeFromInput}
                                    placeholder="Enter departure city or country"
                                    className="bg-transparent  transition-all duration-300 placeholder:text-sm text-black font-semibold focus:outline-none "
                                />
                            </div>
                        </div>
                        {fromInput && dropMenuFrom && (
                            <div
                                onWheel={(e) => {
                                    e.stopPropagation(); // Prevents parent interference
                                }}
                                className="mt-8 border bg-white flex flex-col shadow-2xl rounded-lg max-h-[200px] leading-8 p-4 overflow-y-auto text-black z-[200]"
                            >
                                {filteredFromCities.map((item: string) => (
                                    <div
                                        onClick={() => {
                                            setFromInput(item);
                                            setDropMenuFrom(false);
                                        }}
                                        className="hover:bg-gray-200 cursor-pointer transition-all duration-300 p-1"
                                        key={item}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="py-3 border-r border-gray-500">
                        <div className="flex-center gap-2 py-3 relative  w-72">
                            <FaMapMarkerAlt className="text-[#e06149]" />
                            <div className="flex flex-col">
                                <p className="text-xs text-gray-500">
                                    Going to{' '}
                                </p>
                                <input
                                    onBlur={() =>
                                        setTimeout(
                                            () => setDropMenuGoing(false),
                                            200
                                        )
                                    } // Delay to allow click selection
                                    type="text"
                                    value={goingToInput}
                                    onChange={onChangeGoingInput}
                                    placeholder="Enter departure city or country"
                                    className="bg-transparent  transition-all duration-300 placeholder:text-sm text-black font-semibold focus:outline-none "
                                />
                            </div>
                        </div>
                        {goingToInput && dropMenuGoing && (
                            <div
                                onWheel={(e) => {
                                    e.stopPropagation(); // Prevents parent interference
                                }}
                                className="mt-8 border bg-white flex flex-col shadow-2xl rounded-lg max-h-[200px] leading-8 p-4 overflow-y-auto text-black z-[200]"
                            >
                                {filteredToCities.map((item: string) => (
                                    <div
                                        onClick={() => {
                                            setGoingToInput(item);
                                            setDropMenuGoing(false);
                                        }}
                                        className="hover:bg-gray-200 cursor-pointer transition-all duration-300 p-1"
                                        key={item}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

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
            <div className="absolute -bottom-[100%] ">
                <CardTypes />
            </div>
        </div>
    );
}

export default SearchBar;
