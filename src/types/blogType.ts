type CultureTip = {
    tip: string;
};

type CultureItem = {
    title: string;
    tips: CultureTip[];
};
type MustSee = {
    name: string;
    whyVisit: string;
};
type TopDestination = {
    title: string;
    titleDescription: string;
    mustSee: MustSee[];
};
type TravelTip = {
    title: string;
    description: string;
};

export type BlogPost = {
    country: string;
    id: number;
    title: string;
    author: string;
    comments: number;
    day: string;
    month: string;
    shortDescription: string;
    fullDescription: string;
    finalThoughts: string;
    image: string;
    highImage: string;
    introduction: string;
    topDestinations: TopDestination[];
    culture: CultureItem[]; // Add this
    travelTips: TravelTip[]; // Add this
};
