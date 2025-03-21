import { useParams } from 'react-router-dom';
import { blogPosts } from '../../../data/blogPosts';
import { BlogPost } from '../../../types/blogType';

function Banner({
    scrollTo,
}: {
    scrollTo: React.RefObject<HTMLDivElement | null>;
}) {
    const params = useParams();
    const blogs: BlogPost[] = blogPosts;
    const currentBlog = blogs.filter((blog) => blog.id === Number(params.id));
    const blog = currentBlog[0];
    const scrollToSection = () => {
        if (scrollTo.current) {
            const top =
                scrollTo.current.getBoundingClientRect().top +
                window.scrollY -
                100;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };
    return (
        <div className="w-full mt-18 relative h-[85vh]">
            <div className="absolute inset-0 bg-black/60"></div>
            <img
                className="w-full h-full object-center object-cover"
                src={blog.image}
                alt={blog.title}
            />
            <div className="absolute inset-0 flex-center flex-col z-30">
                <h1 className="capitalize font-bold text-center text-2xl md:text-4xl tracking-widest text-white drop-shadow-lg">
                    {blog.title}
                </h1>

                <div className="flex items-center space-x-6 md:space-x-10 text-gray-300 text-base md:text-lg mt-4">
                    <p>
                        ✍️{' '}
                        <span className="font-semibold text-white/80">
                            {blog.author}
                        </span>
                    </p>
                    <p>
                        📅{' '}
                        <span className="text-white/80">
                            {blog.day} {blog.month}, 2025
                        </span>
                    </p>
                    <p>
                        💬{' '}
                        <span className="text-white/80">
                            {blog.comments} Comments
                        </span>
                    </p>
                </div>

                <p className="text-white/80 font-medium leading-relaxed max-w-[70%] md:max-w-[50%] mt-5 drop-shadow-md">
                    {blog.fullDescription}
                </p>

                <button
                    onClick={scrollToSection}
                    className="px-6 py-3 cursor-pointer hover:opacity-80 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-md hover:scale-105 transition-all mt-6"
                >
                    Continue Reading
                </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
    );
}

export default Banner;
