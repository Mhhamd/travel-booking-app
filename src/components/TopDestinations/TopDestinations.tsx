function TopDestinations() {
    return (
        <div className="flex-center gap-12 flex-col p-12">
            <div className=" flex-center flex-col gap-4">
                <h1 className="font-medium  text-[#f96c50] tracking-wider">
                    Where to Go
                </h1>
                <h1 className="text-gray-700 font-bold tracking-widest text-3xl">
                    Explore Exotic Destinations
                </h1>
            </div>
            <div className="grid grid-cols-4 gap-x-4 gap-y-4 place-content-center capitalize  ">
                <div className="relative w-80 rounded-xl overflow-hidden  ">
                    <img
                        className="object-center object-cover w-full h-full img-hover"
                        src="/assets/morocco.jpg"
                        alt="morroco"
                        loading="lazy"
                    />
                    <h1 className="absolute bottom-0 text-white text-2xl font-bold tracking-wider p-6">
                        Morocco
                    </h1>
                    <span className="absolute top-0 right-0 rounded-lg font-semibold bg-[#e06149] text-white m-6 py-2 px-6">
                        4 tours
                    </span>
                </div>
                <div className="relative w-80 rounded-xl overflow-hidden ">
                    <img
                        className="object-center object-cover w-full h-full img-hover"
                        src="/assets/unitedkingdom.jpg"
                        alt="morroco"
                        loading="lazy"
                    />
                    <h1 className="absolute bottom-0 text-white text-2xl font-bold tracking-wider p-6">
                        United kingdom
                    </h1>
                    <span className="absolute top-0 right-0 rounded-lg font-semibold bg-[#e06149] text-white m-6 py-2 px-6">
                        6 tours
                    </span>
                </div>
                <div className="relative w-80 rounded-xl overflow-hidden ">
                    <img
                        className="object-center object-cover w-full h-full img-hover"
                        src="/assets/singapore.jpg"
                        loading="lazy"
                        alt="morroco"
                    />
                    <h1 className="absolute bottom-0 text-white text-2xl font-bold tracking-wider p-6">
                        singapore
                    </h1>
                    <span className="absolute top-0 right-0 rounded-lg font-semibold bg-[#e06149] text-white m-6 py-2 px-6">
                        3 tours
                    </span>
                </div>
                <div className="relative w-80 rounded-xl overflow-hidden ">
                    <img
                        className="object-center object-cover w-full h-full img-hover"
                        src="/assets/thailand.jpg"
                        alt="morroco"
                        loading="lazy"
                    />
                    <h1 className="absolute bottom-0 text-white text-2xl font-bold tracking-wider p-6">
                        thailand
                    </h1>
                    <span className="absolute top-0 right-0 rounded-lg font-semibold bg-[#e06149] text-white m-6 py-2 px-6">
                        2 tours
                    </span>
                </div>
                <div className="relative w-80 rounded-xl overflow-hidden ">
                    <img
                        className="object-center object-cover w-full h-full img-hover"
                        src="/assets/italy.jpg"
                        alt="morroco"
                        loading="lazy"
                    />
                    <h1 className="absolute bottom-0 text-white text-2xl font-bold tracking-wider p-6">
                        Italy
                    </h1>
                    <span className="absolute top-0 right-0 rounded-lg font-semibold bg-[#e06149] text-white m-6 py-2 px-6">
                        5 tours
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TopDestinations;
