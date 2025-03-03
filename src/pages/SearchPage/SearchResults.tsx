import Header from '../../components/Header/Header';
import SearchBanner from './SearchBanner';

function SearchResults() {
    return (
        <div className="flex items-center flex-col justify-center ">
            <div>
                <Header />
            </div>
            div
            <SearchBanner />
            <div className="flex items-start justify-start mt-13 w-[80%]">
                <div>
                    <h1 className="font-bold tracking-widest">
                        150 trips available
                    </h1>
                    <div>
                        <div className="relative mt-12 h-[50vh]">
                            <img
                                className="object-center object-cover rounded-xl w-[300px]"
                                src="/assets/seoul.jpg"
                                alt=""
                            />
                            <div className=" bg-[#f4954b] rounded-xl  flex-start flex-col gap-4 absolute bottom-12 pt-5 pl-5 pb-15 w-full  font-semibold tracking-wider ">
                                <div className="flex-start mb-2 flex-col gap-3">
                                    <h1>Seoul Tower, Seoul</h1>
                                    <p className="font-light">South Korea</p>
                                </div>
                                <h1>15/09/-22/09/2023</h1>
                                <h1 className="absolute bottom-0 right-12">
                                    <span className="text-sm font-light">
                                        from
                                    </span>{' '}
                                    $450
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResults;
