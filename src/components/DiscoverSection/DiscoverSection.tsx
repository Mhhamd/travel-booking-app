function DiscoverSection() {
    return (
        <div className="relative">
            {/* Dark overlay */}
            <div className="absolute inset-0 w-full h-full bg-black/50"></div>

            {/* Background Image */}
            <img
                className="w-screen h-[90vh] object-center object-cover"
                src="/assets/bg.jpg"
                alt="Discover"
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
                {/* Heading & Subtext */}
                <p className="text-red-400 mb-4 uppercase tracking-widest text-sm">
                    Are you ready to travel?
                </p>
                <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
                    Discover the Best Travel Destinations
                </h1>

                {/* Tour Options */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    <div className="flex flex-col border items-center gap-2 bg-white/10 p-6 rounded-lg">
                        <span className="text-red-400 text-4xl">🦌</span>
                        <p className="font-medium">Wildlife Tours</p>
                    </div>
                    <div className="flex flex-col border items-center gap-2 bg-white/10 p-6 rounded-lg">
                        <span className="text-red-400 text-4xl">🪂</span>
                        <p className="font-medium">Paragliding</p>
                    </div>
                    <div className="flex flex-col border items-center gap-2 bg-white/10 p-6 rounded-lg">
                        <span className="text-red-400 text-4xl">⛰️</span>
                        <p className="font-medium">Adventure Tours</p>
                    </div>
                    <div className="flex flex-col border items-center gap-2 bg-white/10 p-6 rounded-lg">
                        <span className="text-red-400 text-4xl">🏄</span>
                        <p className="font-medium">Water Sports</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiscoverSection;
