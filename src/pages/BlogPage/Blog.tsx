import { useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import Header from '../../components/Header/Header';
import Banner from './BlogBanner/Banner';

function Blog() {
    const params = useParams();
    const blogs = blogPosts;
    const currentBlog = blogs.filter((blog) => blog.id === Number(params.id));
    console.log(currentBlog);
    return (
        <div className="w-full border">
            <header>
                <Header />
            </header>
            <Banner />
        </div>
    );
}

export default Blog;
