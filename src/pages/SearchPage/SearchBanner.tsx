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
        <div className=" mt-[5%] relative w-[80%] flex-center">
            <div className="w-full flex-center">
                <img
                    className="object-center object-cover w-[100%] h-[600px] rounded-4xl"
                    src={bannerImage}
                    alt=""
                />
            </div>
            <div className="absolute left-0 rounded-4xl w-[40%] bg-[#e06249df] h-[600px] flex-center">
                <div className="flex-start gap-6 text-white flex-col">
                    <h1 className=" font-bold uppercase tracking-widest text-3xl">
                        {params.to} <br /> getaway
                    </h1>
                    <p className="font-medium tracking-wide">
                        discover possibilities of travelling !
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SearchBanner;
