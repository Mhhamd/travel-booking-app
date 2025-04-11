import { useEffect, useState } from 'react';
import { fetchImages } from '../../utils/fetchImages';
import { useParams } from 'react-router-dom';

function SearchBanner() {
    const [bannerImage, setBannerImage] = useState('');
    const params = useParams();
    useEffect(() => {
        async function fetchAndSetImage() {
            const image = await fetchImages(params?.to ?? 'airplane-flight');
            setBannerImage(image.urls?.full);
        }
        fetchAndSetImage();
    }, [params]); // Runs only when 'goingTo' changes
    return (
        <div className="mt-[6%] relative w-full md:w-[80%] flex justify-center items-center">
            <div className="w-full">
                <img
                    className="object-center object-cover w-full h-[50vh] sm:h-[60vh] md:h-[600px] rounded-4xl"
                    src={bannerImage}
                    alt="Banner"
                />
            </div>
            <div className="absolute left-0 rounded-4xl w-full sm:w-[50%] md:w-[40%] bg-[#e06249df] h-[50vh] sm:h-[60vh] md:h-[600px] flex justify-center items-center">
                <div className="flex justify-start gap-6 text-white flex-col px-4 sm:px-8">
                    <h1 className="font-bold uppercase tracking-widest text-2xl sm:text-3xl md:text-4xl">
                        {params.to} <br /> getaway
                    </h1>
                    <p className="font-medium tracking-wide text-base sm:text-lg md:text-xl">
                        discover possibilities of travelling!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SearchBanner;
