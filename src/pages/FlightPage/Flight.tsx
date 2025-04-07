/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import { RootState } from '../../state/store';
import { useEffect, useState } from 'react';
import { fetchImages } from '../../utils/fetchImages';
import { motion } from 'framer-motion';
import { GiAirplaneArrival, GiAirplaneDeparture } from 'react-icons/gi';
import { FaRegClock } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';

type InputField = {
    id: string;
    labelTitle: string;
    type: string;
    placeHolder: string;
    pattern?: string;
    maxLength?: number;
    title?: string;
    inputMode?: string;
};

function Flight() {
    const [airLineImage, setAirLineImage] = useState('');
    const selectedFlight = useSelector(
        (state: RootState) => state.selectedFlight
    );
    console.log(selectedFlight);
    useEffect(() => {
        async function fetchAndSetImage() {
            const image = await fetchImages(selectedFlight?.airLine ?? '');
            setAirLineImage(image.urls.full);
        }
        fetchAndSetImage();
    }, [selectedFlight.id]);
    const inputData: InputField[][] = [
        [
            {
                id: 'name',
                labelTitle: 'Full Name',
                type: 'text',
                placeHolder: 'Enter your full name',
            },
            {
                labelTitle: 'Passport Number',
                id: 'passport',
                type: 'text',
                pattern: '[A-Za-z0-9]{6,9}',
                maxLength: 9,
                placeHolder: 'e.g., A12345678',
                title: 'Enter a valid Passport number',
            },
        ],
        [
            {
                labelTitle: 'Email Adress',
                id: 'email',
                type: 'email',
                pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}',
                placeHolder: 'example@gmail.com',
                title: 'Enter a valid email address',
            },
            {
                labelTitle: 'Phone Number',
                id: 'phone',
                type: 'tel',
                pattern:
                    '^?[0-9]{1,4}?[-.]?[0-9]{1,4}[-.]?[0-9]{1,4}[-.]?[0-9]{1,9}$',
                placeHolder: 'e.g., +123 456 7890',
                title: 'Enter a valid phone number',
            },
        ],
        [
            {
                labelTitle: 'Cardholder Name',
                id: 'cardNumber',
                type: 'text',
                pattern: `/d{13,19}`,
                inputMode: 'numeric',
                maxLength: 19,
                placeHolder: 'Full Name',
                title: 'Enter a valid card number',
            },
            {
                labelTitle: 'Expiry Date',
                id: 'expiry',
                type: 'text',
                pattern: `(0[1-9]|1[0-2]){2}`,
                maxLength: 5,
                placeHolder: 'MM/YY',
                title: 'Enter expiry date in MM/YY format',
            },
        ],
        [
            {
                labelTitle: 'CVV',
                id: 'cvv',
                type: 'password',
                pattern: `d{3,4}`,
                maxLength: 4,
                placeHolder: '123',
                title: 'Enter 3 or 4 digit CVV',
            },
        ],
    ];

    return (
        <div className="w-full">
            <header>
                <Header />
            </header>
            <div className="w-full h-[60vh] relative">
                <img
                    className="object-center object-cover h-full w-full"
                    src={airLineImage}
                />
                <div className="absolute h-full w-full inset-0 bg-neutral-950/80"></div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: '30%',
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.5,
                        ease: 'easeInOut',
                    }}
                    className="absolute h-full w-full inset-0 flex-center flex-col "
                >
                    <h1 className="text-4xl mb-5 text-[#f96c50] font-bold tracking-widest">
                        {selectedFlight.airLine}
                    </h1>
                    <div className=" flex-start  gap-5  py-5 ">
                        <div className="flex-center  gap-3 text-2xl">
                            <span className=" text-[#f96c50]">
                                <GiAirplaneDeparture />
                            </span>
                            <p className="text-white tracking-wider text-xl font-bold">
                                {selectedFlight.departureCity} (
                                {selectedFlight.departureCountry})
                            </p>
                        </div>
                        <div className="flex-center  gap-3 text-2xl">
                            <span className=" text-[#f96c50]">
                                <GiAirplaneArrival />
                            </span>
                            <p className="text-white tracking-wider text-xl font-bold">
                                {selectedFlight.arrivalCity} (
                                {selectedFlight.arrivalCountry})
                            </p>
                        </div>

                        <div className="flex-center  gap-3 text-2xl">
                            <span className=" text-[#f96c50]">
                                <FaRegClock />
                            </span>
                            <p className="text-white tracking-wider text-xl font-bold">
                                {selectedFlight.duration} h
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="flex-center w-full">
                <div className="w-full flex-center flex-col p-20 py-15 gap-8 max-w-6xl">
                    <h1 className="text-[#f96c50] capitalize md:text-3xl font-bold text-2xl tracking-widest mb-3">
                        Book Your Flight
                    </h1>
                    <div className="grid grid-cols-1 gap-8 w-full">
                        {inputData.map((pair, index) => (
                            <div
                                key={index}
                                className={`grid ${
                                    pair.length === 2
                                        ? 'grid-cols-1 md:grid-cols-2'
                                        : 'grid-cols-1'
                                } gap-8 w-full`}
                            >
                                {pair.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col gap-5"
                                    >
                                        <label
                                            className="font-bold text-2xl text-gray-700"
                                            htmlFor={item.id}
                                        >
                                            {item.labelTitle}
                                        </label>
                                        <input
                                            maxLength={item.maxLength}
                                            id={item.id}
                                            type={item.type}
                                            pattern={item.pattern}
                                            title={item.title}
                                            placeholder={item.placeHolder}
                                            required
                                            className="outline-none py-3 rounded-lg pl-5 pr-10 w-full border-1  focus:border-[#e06149]  transition-all duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex justify-center">
                        <motion.button
                            type="submit"
                            whileHover={{
                                scale: 1.05,
                                opacity: 1,
                            }}
                            whileTap={{
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.125,
                                ease: 'easeInOut',
                            }}
                            className="btn-style w-full md:w-1/2"
                        >
                            Book Now
                        </motion.button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Flight;
