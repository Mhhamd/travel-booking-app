export default function AirPlaneSVG() {
    return (
        <div>
            <img
                src="/assets/airplane.png"
                className="absolute top-6 right-0 w-6"
                alt=""
            />
            <svg
                width="300"
                height="200"
                viewBox="0 0 300 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M20,150 Q100,50 200,80 T280,40"
                    fill="none"
                    stroke="#ccc"
                    stroke-dasharray="5,5"
                    stroke-width="2"
                />
            </svg>
        </div>
    );
}
