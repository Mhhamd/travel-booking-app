declare module '@splidejs/react-splide' {
    import { ComponentType } from 'react';
    import { Options } from '@splidejs/splide';

    export interface SplideProps {
        options?: Options;
        children?: React.ReactNode;
    }

    const Splide: ComponentType<SplideProps>;
    const SplideSlide: ComponentType<{ children?: React.ReactNode }>;

    export { Splide, SplideSlide };
}
