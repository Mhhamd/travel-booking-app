import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useEffect, useState } from 'react';
import { fetchImages } from '../../utils/fetchImages';

function SearchBanner() {
    const [bannerImage, setBannerImage] = useState('');
    const goingTo = useSelector((state: RootState) => state.search.goingTo);

    useEffect(() => {
        async function fetchAndSetImage() {
            if (goingTo) {
                const image = await fetchImages(goingTo);
                setBannerImage(image.urls?.full);
            }
        }
        fetchAndSetImage();
    }, [goingTo]); // Runs only when 'goingTo' changes
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
                    <h1 className=" font-bold tracking-widest text-3xl">
                        {goingTo} <br /> getaway
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
