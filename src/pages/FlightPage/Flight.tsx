/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import { RootState } from '../../state/store';
import { useEffect, useState } from 'react';
import { fetchImages } from '../../utils/fetchImages';
import { motion } from 'framer-motion';
import { GiAirplaneArrival, GiAirplaneDeparture } from 'react-icons/gi';
import { MdGroup } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import successAnimation from '../../assets/successAnimation.json';
import { handleScroll } from '../../utils/scrollToTop';

type InputField = {
    id: string;
    labelTitle: string;
    type: string;
    placeHolder: string;
    pattern?: string;
    maxLength?: number;
    title?: string;
    inputMode?: string;
    value: string;
    name: string;
};

function Flight() {
    const [airLineImage, setAirLineImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState({
        userName: '',
        passport: '',
        email: '',
        phone: '',
        cardName: '',
        expiryDate: '',
        ccv: '',
    });
    const selectedFlight = useSelector(
        (state: RootState) => state.selectedFlight
    );
    useEffect(() => {
        async function fetchAndSetImage() {
            const image = await fetchImages(selectedFlight?.airLine ?? '');
            setAirLineImage(image.urls.full);
        }
        fetchAndSetImage();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [selectedFlight.id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const inputData: InputField[][] = [
        [
            {
                id: 'userName',
                name: 'userName',
                labelTitle: 'Full Name',
                type: 'text',
                placeHolder: 'Enter your full name',
                value: inputValues.userName,
            },
            {
                labelTitle: 'Passport Number',
                id: 'passport',
                name: 'passport', // Added name attribute
                type: 'text',
                maxLength: 9,
                placeHolder: 'e.g., A12345678',
                title: 'Enter a valid Passport number',
                value: inputValues.passport,
            },
        ],
        [
            {
                labelTitle: 'Email Adress',
                id: 'email',
                name: 'email', // Added name attribute
                type: 'email',
                pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}',
                placeHolder: 'example@gmail.com',
                title: 'Enter a valid email address',
                value: inputValues.email,
            },
            {
                labelTitle: 'Phone Number',
                id: 'phone',
                name: 'phone', // Added name attribute
                type: 'tel',
                placeHolder: 'e.g., +123 456 7890',
                title: 'Enter a valid phone number',
                value: inputValues.phone,
            },
        ],
        [
            {
                labelTitle: 'Cardholder Name',
                id: 'cardName', // Changed from 'cardNumber' to match state key
                name: 'cardName', // Added name attribute
                type: 'text',
                inputMode: 'numeric',
                maxLength: 19,
                placeHolder: 'Full Name',
                title: 'Enter the name on the card',
                value: inputValues.cardName,
            },
            {
                labelTitle: 'Expiry Date',
                id: 'expiryDate', // Changed from 'expiry' to match state key
                name: 'expiryDate', // Added name attribute
                type: 'text',
                maxLength: 5,
                placeHolder: 'MM/YY',
                title: 'Enter expiry date in MM/YY format',
                value: inputValues.expiryDate,
            },
        ],
        [
            {
                labelTitle: 'CVV',
                id: 'ccv', // Changed from 'cvv' to match state key
                name: 'ccv', // Added name attribute
                type: 'password',
                maxLength: 4,
                placeHolder: '123',
                title: 'Enter 3 or 4 digit CVV',
                value: inputValues.ccv,
            },
        ],
    ];
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        inputData.forEach((pair) => {
            pair.forEach((item) => {
                if (!item.value.trim()) {
                    return;
                }
            });
        });
        handleScroll();
        setIsLoading(true);
        setTimeout(() => {
            navigate('/');
        }, 1700);
    };

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
                    </div>
                    <div className="flex-center gap-10 mt-5">
                        <div className="flex-center  gap-3 text-2xl">
                            <span className=" text-[#f96c50]">
                                <MdGroup />
                            </span>
                            <p className="text-white tracking-wider text-xl font-bold">
                                {selectedFlight.seatsAvailable} Available Seats
                            </p>
                        </div>
                        <div className="flex-center  gap-3 text-2xl">
                            <span className=" text-[#f96c50]">
                                <FaRegClock />
                            </span>
                            <p className="text-white tracking-wider text-xl font-bold">
                                {selectedFlight.duration}h
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="flex-center w-full">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: '30%',
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.5,
                        ease: 'easeInOut',
                        delay: 0.2,
                    }}
                    className="w-full flex-center flex-col p-20 py-15 gap-8 max-w-6xl"
                >
                    <h1 className="text-[#f96c50] capitalize md:text-3xl font-bold text-2xl tracking-widest mb-3">
                        Book Your Flight
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 gap-8 w-full"
                    >
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
                                            name={item.name}
                                            maxLength={item.maxLength}
                                            id={item.id}
                                            type={item.type}
                                            pattern={item.pattern}
                                            title={item.title}
                                            placeholder={item.placeHolder}
                                            value={item.value}
                                            onChange={handleChange}
                                            required
                                            className={`outline-none py-3 rounded-lg pl-5 pr-10 w-full border-1  focus:border-[#e06149]  transition-all duration-300
                                             `}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div className="w-full flex justify-center relative">
                            <motion.button
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
                                className="btn-style w-full border border-red-600 md:w-1/2"
                            >
                                Book Now
                            </motion.button>
                            {isLoading && (
                                <div className="fixed inset-0 bg-white flex-center z-50">
                                    <div className="w-64 h-64">
                                        <Lottie
                                            animationData={successAnimation}
                                            loop={false}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
}

export default Flight;
