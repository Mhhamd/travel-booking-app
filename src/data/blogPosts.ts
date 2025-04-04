import { BlogPost } from '../types/blogType';

export const blogPosts: BlogPost[] = [
    {
        country: 'Japan',
        id: 1,
        title: 'Things to See and Do When Visiting Japan',
        author: 'Admin',
        comments: 0,
        day: '15th',
        month: 'MAR',
        shortDescription:
            'Japan is a country rich in history, culture, and breathtaking scenery...',
        fullDescription:
            'Japan is a country rich in history, culture, and breathtaking scenery. From the bustling streets of Tokyo to the serene temples of Kyoto, there is something for every traveler.',
        image: '/assets/japanblog.jpg',
        introduction:
            "Japan is a country where ancient traditions meet cutting-edge technology. Whether you're captivated by the neon-lit streets of Tokyo, the historical beauty of Kyoto, or the natural landscapes of Hokkaido, Japan offers something unique for every traveler. In this guide, we’ll explore the must-visit locations, cultural experiences, and travel tips to make your trip unforgettable.",
        topDestinations: [
            {
                title: '1. Tokyo – The Futuristic Capital',
                titleDescription:
                    'As one of the world’s most advanced cities, Tokyo is a blend of high-tech innovation and deep-rooted traditions.',
                mustSee: [
                    {
                        name: 'Shibuya Crossing',
                        whyVisit:
                            'One of the busiest pedestrian crossings in the world.',
                    },
                    {
                        name: 'Akihabara',
                        whyVisit:
                            'A paradise for anime, gaming, and tech lovers.',
                    },
                    {
                        name: 'Shinjuku Gyoen',
                        whyVisit:
                            ' A stunning park perfect for cherry blossom viewing in spring.',
                    },
                    {
                        name: 'Tsukiji Outer Market',
                        whyVisit:
                            ' Try fresh sushi and street food from vendors.',
                    },
                ],
            },
            {
                title: '2. Kyoto – The Heart of Japanese Tradition',
                titleDescription:
                    'Kyoto, the former capital of Japan, is home to breathtaking temples, shrines, and traditional geisha culture.',
                mustSee: [
                    {
                        name: 'Fushimi Inari Shrine',
                        whyVisit:
                            'Famous for its thousands of vermillion torii gates.',
                    },
                    {
                        name: 'Arashiyama Bamboo Forest',
                        whyVisit:
                            'Walk through a mystical path of towering bamboo.',
                    },
                    {
                        name: 'Kinkaku-ji (Golden Pavilion)',
                        whyVisit: ' A Zen temple covered in gold leaf.',
                    },
                ],
            },
            {
                title: '3. Osaka – The Food Capital',
                titleDescription:
                    'Known for its vibrant nightlife and incredible street food, Osaka is a must-visit for food lovers.',
                mustSee: [
                    {
                        name: 'Dotonbori',
                        whyVisit:
                            'A lively area with neon signs and amazing food.',
                    },
                    {
                        name: 'Osaka Castle',
                        whyVisit:
                            'A historical landmark surrounded by a scenic park.',
                    },
                    {
                        name: 'Universal Studios Japan',
                        whyVisit: ' A fun stop for theme park enthusiasts.',
                    },
                ],
            },
            {
                title: '4. Hokkaido – Nature Lover’s Paradise',
                titleDescription:
                    'If you love outdoor adventures, Hokkaido is the perfect destination.',
                mustSee: [
                    {
                        name: 'Furano & Biei',
                        whyVisit:
                            'Famous for rolling lavender fields in the summer.',
                    },
                    {
                        name: 'Niseko',
                        whyVisit:
                            'A world-class destination for skiing and snowboarding.',
                    },
                    {
                        name: 'Otaru Canal:',
                        whyVisit:
                            ' A romantic town with charming old buildings and seafood markets..',
                    },
                ],
            },
        ],
        culture: [
            {
                title: '🎎 1. Try a Traditional Tea Ceremony',
                tips: [
                    {
                        tip: 'Participate in an authentic Japanese tea ceremony in Kyoto.',
                    },
                    {
                        tip: 'Learn the art of making matcha and understand its significance in Zen Buddhism.',
                    },
                ],
            },
            {
                title: '🛏️ 2. Stay in a Ryokan (Traditional Inn)',
                tips: [
                    {
                        tip: 'Experience traditional Japanese hospitality in a ryokan.',
                    },
                    {
                        tip: 'Sleep on a tatami mat and futon and enjoy an onsen (hot spring bath)',
                    },
                ],
            },
        ],
        travelTips: [
            {
                title: '✅ Get a Japan Rail Pass:',
                description:
                    'If you plan to travel between cities, this pass saves money.',
            },
            {
                title: '✅ Respect Local Customs:',
                description:
                    ' Bow when greeting, don’t speak loudly on trains, and remove shoes indoors.',
            },
            {
                title: '✅ Best Time to Visit:',
                description:
                    ' Spring (March-April for cherry blossoms) or autumn (October-November for fall foliage).',
            },
        ],
        finalThoughts:
            'Japan is a country that captivates travelers with its balance of modern innovation and rich traditions. Whether you’re exploring the neon streets of Tokyo or finding peace in a Kyoto temple, your journey will be unforgettable.',
    },
    {
        country: 'South Korea',
        id: 2,
        title: 'The Magic of Autumn in South Korea',
        author: 'Admin',
        comments: 0,
        day: '15th',
        month: 'MAR',
        shortDescription:
            'Autumn in South Korea is a breathtaking season, with landscapes...',
        fullDescription: `Autumn in South Korea is a breathtaking season, with landscapes painted in shades of red, orange, and yellow. Whether you're strolling through ancient palaces or hiking in national parks, the beauty of fall is everywhere.`,
        image: '/assets/koreablog.jpg',
        introduction: `Autumn in South Korea is a breathtaking experience, with landscapes painted in shades of fiery red, orange, and yellow. From serene palace gardens in Seoul to the golden forests of Seoraksan National Park, this season transforms the country into a visual masterpiece. Whether you're a nature lover, a cultural explorer, or a foodie, fall is the best time to visit South Korea.`,
        topDestinations: [
            {
                title: '1. Seoul – A City of Contrast',
                titleDescription:
                    'A blend of ancient history and modern technology, Seoul is stunning in autumn.',
                mustSee: [
                    {
                        name: 'Gyeongbokgung Palace',
                        whyVisit:
                            'Witness the royal palace surrounded by golden maple trees.',
                    },
                    {
                        name: 'Namsan Seoul Tower',
                        whyVisit:
                            'Get a panoramic view of the city with fall foliage below.',
                    },
                    {
                        name: 'Bukchon Hanok Village',
                        whyVisit:
                            'Stroll through traditional Korean houses in an autumn setting.',
                    },
                ],
            },
            {
                title: '2. Seoraksan National Park – The Best Fall Hike',
                titleDescription:
                    'One of Korea’s most famous destinations for autumn foliage.',
                mustSee: [
                    {
                        name: 'Ulsanbawi Rock',
                        whyVisit:
                            ' A scenic but challenging hike with stunning views.',
                    },
                    {
                        name: 'Sinheungsa Temple',
                        whyVisit:
                            ' A peaceful temple nestled among colorful leaves.',
                    },
                    {
                        name: 'Cable Car to Gwongeumseong Fortress',
                        whyVisit: 'A breathtaking way to see the fall colors.',
                    },
                ],
            },
            {
                title: '3. Jeonju – The Heart of Korean Tradition',
                titleDescription:
                    'Home to Korea’s best-preserved hanok village and a UNESCO City of Gastronomy.',
                mustSee: [
                    {
                        name: 'Jeonju Hanok Village',
                        whyVisit:
                            ' Traditional Korean houses with vibrant autumn colors.',
                    },
                    {
                        name: 'Omokdae Pavilion',
                        whyVisit: ' A peaceful spot overlooking the village.',
                    },
                    {
                        name: 'Try Bibimbap',
                        whyVisit:
                            ' Jeonju is the birthplace of Korea’s most famous dish!',
                    },
                ],
            },
        ],
        culture: [
            {
                title: '🍁 Wear Hanbok in Autumn Palaces',
                tips: [
                    {
                        tip: ' Many visitors rent traditional Korean clothing to take photos in the historic palaces.',
                    },
                ],
            },
            {
                title: '🍂 Visit a Traditional Korean Tea House ',
                tips: [
                    {
                        tip: ' Experience the art of Korean tea culture in Insadong.',
                    },
                ],
            },
            {
                title: '🏮 Attend the Jinju Lantern Festival',
                tips: [
                    {
                        tip: '  One of Korea’s most famous autumn festivals.',
                    },
                ],
            },
        ],
        travelTips: [
            {
                title: 'Best Time to Visit',
                description:
                    'Mid-September to early November for peak autumn colors.',
            },
            {
                title: 'Try Korean Street Food',
                description:
                    ' Hotteok (sweet pancakes) and roasted chestnuts are autumn favorites.',
            },
            {
                title: 'Use the KTX Train',
                description:
                    ' High-speed rail makes travel between cities fast and easy.',
            },
        ],
        finalThoughts:
            'South Korea in autumn is like stepping into a painting. Whether you’re exploring palaces in Seoul, hiking through Seoraksan, or experiencing local traditions in Jeonju, the season offers breathtaking beauty and rich cultural experiences.',
    },
    {
        country: 'Thailand',
        id: 3,
        title: 'Exploring the Hidden Gems of Thailand',
        author: 'Admin',
        comments: 0,
        day: '15th',
        month: 'MAR',
        shortDescription:
            'Thailand is famous for its stunning beaches, vibrant cities, and rich...',
        fullDescription:
            'Thailand is famous for its stunning beaches, vibrant cities, and rich culture, but beyond the well-known tourist spots, there are hidden gems waiting to be explored.',
        image: '/assets/thailandblog.jpg',
        introduction:
            'Thailand is known for its bustling cities, stunning beaches, and rich culture. But beyond the famous attractions, hidden gems await travelers willing to go off the beaten path. From ancient temples lost in the jungle to secret islands, Thailand offers more than meets the eye.',
        topDestinations: [
            {
                title: '1. Bangkok – The Vibrant Capital',
                titleDescription: 'A city where history and modernity collide.',

                mustSee: [
                    {
                        name: 'Wat Arun',
                        whyVisit:
                            ' A stunning riverside temple that glows at sunset.',
                    },
                    {
                        name: 'The Grand Palace',
                        whyVisit: 'Home to the sacred Emerald Buddha.',
                    },
                    {
                        name: 'Chatuchak Market ',
                        whyVisit: 'One of the world’s largest weekend markets.',
                    },
                ],
            },
            {
                title: '2. Chiang Mai – The Cultural Hub',
                titleDescription:
                    'Surrounded by misty mountains, Chiang Mai is rich in history and tradition.',
                mustSee: [
                    {
                        name: 'Doi Suthep',
                        whyVisit:
                            ' A temple on a hill with panoramic city views.',
                    },
                    {
                        name: 'Elephant Nature Park',
                        whyVisit: ' A sanctuary for rescued elephants.',
                    },
                    {
                        name: 'Yi Peng Lantern Festival',
                        whyVisit:
                            ' A magical experience where thousands of lanterns fill the sky.',
                    },
                ],
            },
            {
                title: '3. Krabi – Thailand’s Secret Paradise',
                titleDescription:
                    'Less crowded than Phuket, but just as stunning.',
                mustSee: [
                    {
                        name: 'Railay Beach',
                        whyVisit:
                            ' Known for limestone cliffs and clear blue waters.',
                    },
                    {
                        name: 'Tiger Cave Temple',
                        whyVisit:
                            ' A temple at the top of 1,260 steps with breathtaking views.',
                    },
                    {
                        name: 'Emerald Pool ',
                        whyVisit:
                            '  A natural hot spring hidden in the jungle.',
                    },
                ],
            },
        ],
        culture: [
            {
                title: '🌿 Take a Thai Cooking Class',
                tips: [
                    {
                        tip: ' Learn to make traditional dishes like Pad Thai and Tom Yum.',
                    },
                ],
            },
            {
                title: '🏯 Stay in a Floating Bungalow ',
                tips: [
                    {
                        tip: 'Experience Thailand’s unique floating accommodations in Khao Sok.',
                    },
                ],
            },
            {
                title: '🏝️ Join a Local Beach Cleanup',
                tips: [
                    {
                        tip: '  Many hidden beaches need conservation efforts.',
                    },
                ],
            },
        ],
        travelTips: [
            {
                title: 'Best Time to Visit',
                description: 'November to February for the best weather.',
            },
            {
                title: 'Respect Thai Culture',
                description: '  Always remove shoes before entering temples.',
            },
            {
                title: 'Avoid Tourist Traps ',
                description: ' Research before booking tours to avoid scams.',
            },
        ],
        finalThoughts:
            'Thailand’s hidden gems offer a deeper, more authentic experience beyond the usual tourist spots. Whether you’re seeking adventure, culture, or relaxation, this beautiful country has something for everyone.',
    },
    {
        country: 'Italy',
        id: 4,
        title: 'A Journey Through the Historic Wonders of Italy',
        author: 'Admin',
        comments: 0,
        day: '15th',
        month: 'MAR',
        shortDescription:
            'Italy is a land of history, art, and breathtaking architecture, where...',
        fullDescription:
            'Italy is a land of history, art, and breathtaking architecture, where every city tells a unique story. From ancient ruins to Renaissance masterpieces, there’s no shortage of wonders to explore.',
        image: '/assets/italyblog.jpg',
        introduction: `Italy is a land of history, art, and breathtaking landscapes. From the Roman ruins of Rome to the canals of Venice, every city tells a unique story. Whether you're indulging in authentic Italian cuisine or admiring Renaissance masterpieces, Italy is a dream destination.`,
        topDestinations: [
            {
                title: '1. Rome – The Eternal City',
                titleDescription: 'A city where history comes alive.',
                mustSee: [
                    {
                        name: 'Colosseum ',
                        whyVisit:
                            'The largest amphitheater of the Roman Empire.',
                    },
                    {
                        name: 'Vatican City',
                        whyVisit:
                            'Home to St. Peter’s Basilica and the Sistine Chapel.',
                    },
                    {
                        name: 'Trevi Fountain  ',
                        whyVisit: 'Toss a coin and make a wish!',
                    },
                ],
            },
            {
                title: '2. Florence – The Cradle of the Renaissance',
                titleDescription:
                    'A city of art, culture, and stunning architecture.',
                mustSee: [
                    {
                        name: 'Uffizi Gallery',
                        whyVisit: ' Home to Botticelli’s "The Birth of Venus.',
                    },
                    {
                        name: 'Ponte Vecchio',
                        whyVisit:
                            ' A medieval bridge lined with jewelry shops.',
                    },
                    {
                        name: 'Michelangelo’s David ',
                        whyVisit:
                            ' A must-see sculpture in the Accademia Gallery.',
                    },
                ],
            },
            {
                title: '3. Venice – The City of Canals',
                titleDescription: 'A romantic and mysterious city.',
                mustSee: [
                    {
                        name: 'Grand Canal',
                        whyVisit:
                            ' Take a gondola ride through Venice’s main waterway.',
                    },
                    {
                        name: 'St. Mark’s Basilica ',
                        whyVisit:
                            ' A golden masterpiece of Byzantine architecture.',
                    },
                    {
                        name: 'Murano & Burano',
                        whyVisit:
                            '   Islands famous for glassmaking and colorful houses.',
                    },
                ],
            },
        ],
        culture: [
            {
                title: '🍝 Take a Pasta-Making Class',
                tips: [
                    {
                        tip: ' Learn how to make fresh pasta from Italian chefs.',
                    },
                ],
            },
            {
                title: '🍷 Explore Tuscany’s Vineyards  ',
                tips: [
                    {
                        tip: 'Taste some of the world’s best wines in Chianti.',
                    },
                ],
            },
            {
                title: '🎭 Attend the Venice Carnival',
                tips: [
                    {
                        tip: '  A world-famous festival with elaborate masks and costumes.',
                    },
                ],
            },
        ],
        travelTips: [
            {
                title: 'Best Time to Visit',
                description:
                    'Spring (April-June) and Fall (September-October).',
            },
            {
                title: 'Use Public Transport',
                description:
                    ' Trains are the best way to travel between cities.',
            },
            {
                title: 'Be Mindful of Pickpockets ',
                description: ' Tourist hotspots like Rome and Venice have them',
            },
        ],
        finalThoughts:
            'Italy is a living museum, filled with art, history, and delicious food. Whether you’re exploring ancient ruins, sailing through canals, or enjoying a glass of wine in Tuscany, every moment in Italy feels magical.',
    },
];
