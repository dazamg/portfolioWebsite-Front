import { Row, Col } from 'reactstrap';
import Link from 'next/link';
import moment from 'moment';

const BlogCard = ({blog}) => 
<Col key={blog._id} md={{size: 8, offset: 2}}>
    <div>
        <div className="post-preview clickable">
            <Link href="/blogs/[slug]" as={`/blogs/${blog.slug}`}>
                <a>
                <h2 className="post-title">
                    { blog.title}
                </h2>
                <h3 className="post-subtitle">
                    {blog.subTitle}
                </h3>
                </a>
            </Link>
            <p className="post-meta">Posted by
                <a href="/blogs/[slug]" as={`/blogs/${blog.slug}`}> {blog.author.name} </a>
                - {moment(blog.createdAt).format('llll')}
            </p>
        </div>     
    </div> 
    <hr></hr>
</Col>

export default BlogCard;