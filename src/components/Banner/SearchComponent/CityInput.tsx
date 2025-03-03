import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { availableCities } from '../../../data/countriesData';
import { RootState } from '../../../state/store';
import { setFrom, setGoingTo } from '../../../state/slices/searchSlice';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface CityInputProps {
    label: 'From' | 'Going to';
}

function CityInput({ label }: CityInputProps) {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const dispatch = useDispatch();
    const inputValue = useSelector((state: RootState) =>
        label === 'From' ? state.search.from : state.search.goingTo
    );
    const setInputValue = (value: string) => {
        if (label === 'From') {
            dispatch(setFrom(value));
        } else {
            dispatch(setGoingTo(value));
        }
    };

    const handleBlur = () => {
        //adding delay to be able to select
        setTimeout(() => setDropdownVisible(false), 100);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setDropdownVisible(true);
    };

    const filteredCities = useMemo(
        () =>
            availableCities
                .filter(({ name }) => name.toLowerCase().includes(inputValue))
                .map(({ name }) => name),
        [inputValue]
    );

    return (
        <>
            <div className="py-3 border-r border-gray-500">
                <div className="flex-center gap-2 py-3 relative  w-72">
                    <FaMapMarkerAlt className="text-[#e06149]" />
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-500">{label} </p>
                        <input
                            type="text"
                            value={inputValue}
                            onBlur={handleBlur}
                            onChange={handleInputChange}
                            placeholder="Enter departure city or country"
                            className="bg-transparent capitalize  transition-all duration-300 placeholder:text-sm text-black font-semibold focus:outline-none "
                        />
                    </div>
                </div>
                {inputValue &&
                    dropdownVisible &&
                    filteredCities.length !== 0 && (
                        <div
                            onWheel={(e) => {
                                e.stopPropagation(); // Prevents parent interference
                            }}
                            className="mt-8 border  bg-white flex flex-col shadow-2xl rounded-lg max-h-[200px] leading-8 p-4 overflow-y-auto text-black z-[200]"
                        >
                            {filteredCities.map((item: string) => (
                                <div
                                    onClick={() => {
                                        setInputValue(item);
                                        setDropdownVisible(false);
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
        </>
    );
}

export default CityInput;
