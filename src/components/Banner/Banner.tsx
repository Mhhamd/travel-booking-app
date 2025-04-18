import SearchBar from './SearchComponent/SearchBar';
import bannervideo from '/assets/BannerVideo.mp4';

function Banner() {
    return (
        <section id="top" className="w-screen h-screen lg:h-[740px] relative ">
            <div className="absolute inset-0 z-10 bg-black/70"></div>
            <div className="w-full h-full">
                <video
                    className="w-full h-full -z-10 object-cover object-center"
                    src={bannervideo}
                    loop
                    muted
                    autoPlay
                ></video>
            </div>

            <div className="absolute sm:top-[30%] xl:top-[32%] lg:top-[28%] top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-center z-10 text-white flex-col gap-4 ">
                <div className="flex-center flex-col mb-20">
                    <p className="text-lg md:text-2xl tracking-wider text-[#f96c50]">
                        Let's explore
                    </p>
                    <h1 className="text-xl mb-2 md:text-4xl text-nowrap capitalize font-semibold tracking-wider">
                        Where would you like to go?
                    </h1>
                    <p className="capitalize text-center tracking-wider  text-white/80">
                        checkout beautiful places around the world
                    </p>
                </div>
            </div>
            <div className="absolute sm:top[50%] top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-center z-10 text-white flex-col gap-4 ">
                <div className="flex-center flex-col gap-4">
                    <div>
                        <SearchBar showSelcetedTypes={true} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
