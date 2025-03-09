import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SearchResults from '../pages/SearchPage/SearchResults';
import PopularResults from '../pages/PopularResultsPage/PopularResults';

export const router = createBrowserRouter([
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
]);
