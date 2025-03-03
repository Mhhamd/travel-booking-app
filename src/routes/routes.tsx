import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SearchResults from '../pages/SearchPage/SearchResults';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/search/:from/:to',
        element: <SearchResults />,
    },
]);
