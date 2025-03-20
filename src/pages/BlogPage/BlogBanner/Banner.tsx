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
                <h1 className="  capitalize  font-bold text-3xl tracking-widest  text-white">
                    {blog.title}
                </h1>
                <div className="flex items-center space-x-4 text-gray-300 text-sm mt-3">
                    <p>
                        ✍️{' '}
                        <span className="font-medium text-white/70">
                            {blog.author}
                        </span>
                    </p>
                    <p>
                        📅{' '}
                        <span className="text-white/70">
                            {blog.day} {blog.month}, 2025
                        </span>
                    </p>
                    <p>
                        💬{' '}
                        <span className="text-white/70">
                            {blog.comments} Comments
                        </span>
                    </p>
                </div>
                <p className="text-white/70 font-semibold tracking-widest  max-w-[40%] mt-5 ">
                    {blog.fullDescription}
                </p>
                <button onClick={scrollToSection} className="btn-style mt-5">
                    Continue Reading
                </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
    );
}

export default Banner;
