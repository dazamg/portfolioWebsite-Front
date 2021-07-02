import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/functions/user';
import Masthead from 'components/shared/Masthead';
import { Row } from 'reactstrap';
import BlogApi from 'serv/api/blogs';
import BlogCard from 'components/BlogCard';

const Blogs = ({blogs}) => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout
      navClass="transparent" className="blog-listing-page"
      user={data} loading={loading}>
      <Masthead imagePath="/images/blog-img.jpeg">
        <h1>Fresh Blogs</h1>
        <span className="subheading">Programming, travelling...</span>
      </Masthead>
      <BasePage
        title="Blogs - Kishon StClair"
        className="blog-body">
        <Row>
            {
                blogs.map(blog =>
                    <BlogCard blog={blog}/>
                )
            }
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticProps() {
    const { data} = await new BlogApi().getAll();
    const blogs = data.map(item => ({...item.blog, author: item.author}))
    return {
        props: {blogs},
        revalidate: 60
    }
}

export default Blogs;
