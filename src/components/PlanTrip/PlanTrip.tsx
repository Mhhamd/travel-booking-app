import { IoIosCheckmarkCircle } from 'react-icons/io';

function PlanTrip() {
    return (
        <div className="flex-start gap-12 mb-36 w-[90%]">
            <div className="w-[50%] relative mask">
                <img
                    className="rounded-3xl"
                    src="/assets/plansection.jpg"
                    alt=""
                />
            </div>

            <div className=" flex-start flex-col gap-6 p-12 py-0">
                <div className="flex flex-col gap-3">
                    <p className="text-[#f96c50] font-semibold tracking-wide">
                        Get to know us
                    </p>
                    <h1 className="text-gray-700 capitalize  font-bold text-3xl tracking-widest ">
                        Plan you trip with <br /> skyFare
                    </h1>
                </div>
                <div>
                    <p className="text-gray-600 font-medium tracking-wide">
                        There are many variations of passages of available but
                        the majority <br /> have suffered alteration in some
                        form, by injected hum randomised words which don't look
                        even slightly
                    </p>
                </div>
                <div className="flex-start flex-col mt-2 gap-2">
                    <div className="flex-center gap-2">
                        <IoIosCheckmarkCircle className="text-[#f96c50]" />
                        <p className="text-gray-800 font-medium">
                            Invest in your simply neighborhood
                        </p>
                    </div>
                    <div className="flex-center gap-2">
                        <IoIosCheckmarkCircle className="text-[#f96c50]" />
                        <p className="text-gray-800 font-medium">
                            Invest in your simply neighborhood
                        </p>
                    </div>
                    <div className="flex-center gap-2">
                        <IoIosCheckmarkCircle className="text-[#f96c50]" />
                        <p className="text-gray-800 font-medium">
                            Invest in your simply neighborhood
                        </p>
                    </div>
                </div>
                <div>
                    <button className="text-white font-semibold btn-hover tracking-widest py-4  px-10 rounded-lg bg-[#f96c50]">
                        Find My Flight
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlanTrip;
