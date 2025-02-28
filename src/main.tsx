import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import SmoothScroll from './utils/SmoothScroll.tsx';
import { Provider } from 'react-redux';
import store from './state/store.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SmoothScroll>
            <Provider store={store}>
                <App />
            </Provider>
        </SmoothScroll>
    </StrictMode>
);
