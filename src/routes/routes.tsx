import { createHashRouter } from 'react-router-dom';
import App from '../App';
import SearchResults from '../pages/SearchPage/SearchResults';
import PopularResults from '../pages/PopularResultsPage/PopularResults';
import Blog from '../pages/BlogPage/Blog';
import Flight from '../pages/FlightPage/Flight';

export const router = createHashRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/search/:from/:to',
        element: <SearchResults />,
    },
    {
        path: '/popular/:to/',
        element: <PopularResults />,
    },
    {
        path: '/blog/:id/',
        element: <Blog />,
    },
    {
        path: '/flight/:flightId',
        element: <Flight />,
    },
]);
