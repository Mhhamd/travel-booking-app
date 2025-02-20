import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

export default function App() {
    return (
        <>
            <Header />
            <div className="  flex-center flex-col  ">
                <Banner />
            </div>
        </>
    );
}
