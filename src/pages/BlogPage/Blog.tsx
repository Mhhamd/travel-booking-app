import { useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import Header from '../../components/Header/Header';
import Banner from './BlogBanner/Banner';
import { BlogPost } from '../../types/blogType';
import { useRef } from 'react';

function Blog() {
    const params = useParams();
    const blogs: BlogPost[] = blogPosts;
    const currentBlog = blogs.filter((blog) => blog.id === Number(params.id));
    const blog = currentBlog[0];
    const introRef = useRef<HTMLDivElement | null>(null);
    return (
        <div className="w-full ">
            <header>
                <Header />
            </header>
            <Banner scrollTo={introRef} />
            <div className="p-15 gap-5 flex items-start justify-start flex-col">
                <div>
                    <h1 ref={introRef} className="header-style mb-5">
                        Introduction
                    </h1>
                    <p className="text-gray-600 font-semibold tracking-widest">
                        {blog.introduction}
                    </p>
                </div>
                <div>
                    <h1 className="header-style mt-15 mb-5">
                        Top Destinations
                    </h1>
                    <div>
                        {blog.topDestinations.map((item) => {
                            return (
                                <div className="flex items-start leading-9 flex-col justify-start mt-3 mb-10">
                                    <h1 className="text-gray-700 font-bold mr-3 tracking-wider">
                                        {item.title}:
                                    </h1>
                                    <p className="text-gray-600 font-semibold tracking-widest">
                                        {item.titleDescription}
                                    </p>
                                    {/* Looping through mustSee inside each destination */}
                                    <ul className="ml-6 list-disc text-gray-600">
                                        {item.mustSee.map((place, idx) => (
                                            <li key={idx} className="mt-2 ">
                                                <span className="font-bold text-gray-700">
                                                    {place.name}:
                                                </span>{' '}
                                                {place.whyVisit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
