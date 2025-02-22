function IconicTravelSpots() {
    return (
        <div className="flex-center flex-col gap-12">
            <div className="flex-center flex-col gap-4">
                <p className="para-style">Not sure where to go next?</p>
                <h1 className="header-style ">Explore Iconic Travel Spots</h1>
            </div>
            <div className="border w-full flex-start gap-6">
                <div className="w-96 border relative">
                    <img src="/assets/singapore.jpg" alt="" />
                    <p className="absolute font-medium top-3 left-3 bg-[#42afc4] text-white tracking-widest py-1 rounded-md px-5">
                        Featured
                    </p>
                    <div className="flex-start flex-col bg-white rounded-3xl">
                        <img className="w-32" src="/assets/rating.png" alt="" />
                        <p>sss</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IconicTravelSpots;
