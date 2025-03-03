import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SmoothScroll from './utils/SmoothScroll.tsx';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store.ts';
import { router } from './routes/routes.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SmoothScroll>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </SmoothScroll>
    </StrictMode>
);
