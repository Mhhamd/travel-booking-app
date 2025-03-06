export async function fetchImages(query: string) {
    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    try {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&client_id=${accessKey}&per_page=11`
        );
        const data = await response.json();
        const results = data?.results || [];
        if (results.length > 0) {
            const randomIndex = Math.floor(Math.random() * results.length);
            return results[randomIndex];
        }
        return null;
    } catch (error) {
        console.error('error fetching related images ', error);
    }
}
