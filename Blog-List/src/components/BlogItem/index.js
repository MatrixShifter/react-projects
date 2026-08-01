import './index.css'
import BlogList from '../BlogList'

const BlogItem = ({blogsList}) => (
  <ul className="blogItem-container">
    {blogsList.map(item => (
      <BlogList item={item} key={item.id} />
    ))}
  </ul>
)

export default BlogItem
