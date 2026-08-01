import './index.css'

const BlogList = ({item}) => (
  <li className="content-container">
    <div className="list-container">
      <h1>{item.title}</h1>
      <p>{item.publishedDate}</p>
    </div>
    <p>{item.description}</p>
  </li>
)

export default BlogList
