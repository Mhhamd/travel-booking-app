/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImages } from './fetchImages'; // Ensure you have this function
import mockData from '../data/MOCK_DATA.json?raw'; // Adjust the path as needed

interface UnsplashImage {
    urls: {
        full: string;
        small: string;
    };
}

interface Destination {
    arrivalCity: string;
    departureCity: string;
    arrivalCountry: string;
    departureCountry: string;
    duration: number;
    seatsAvailable: number;
    airLine: string;
    class: string;
    image: UnsplashImage | null;
}

interface DataTypes {
    arrival_city: string;
    departure_city: string;
    arrival_country: string;
    departure_country: string;
    duration: number;
    seats_available: number;
    airline: string;
    class: string;
}

export function useDestinations(filterByBoth: boolean = false) {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const data: DataTypes[] = JSON.parse(mockData);
    const params = useParams();

    useEffect(() => {
        async function fetchAndSetImages() {
            const filteredData = data.filter((item) => {
                return filterByBoth
                    ? item.arrival_city === params.to &&
                          item.departure_city === params.from
                    : item.arrival_city === params.to;
            });

            const results: Destination[] = await Promise.all(
                filteredData.map(async (item: DataTypes) => {
                    const image = await fetchImages(params.to ?? 'airplane');
                    return {
                        arrivalCity: item.arrival_city,
                        arrivalCountry: item.arrival_country,
                        departureCity: item.departure_city,
                        departureCountry: item.departure_country,
                        duration: item.duration,
                        seatsAvailable: item.seats_available,
                        airLine: item.airline,
                        class: item.class,
                        image,
                    };
                })
            );
            setDestinations(results);
        }

        fetchAndSetImages();
    }, [params]);

    return destinations;
}
