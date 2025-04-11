import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SmoothScroll from './utils/SmoothScroll.tsx';
import { HashRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './state/store.ts';
import { router } from './routes/routes.tsx';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SmoothScroll>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <HashRouter basename="/travel-booking-app/">
                        <RouterProvider router={router} />
                    </HashRouter>
                </PersistGate>
            </Provider>
        </SmoothScroll>
    </StrictMode>
);
