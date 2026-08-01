import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = ({item}) => (
  <Link to={`/blogs/${item.id}`} className="link-item">
    <li className="blog-item">
      <img src={item.imageUrl} alt={item.title} className="blog-image" />
      <div className="blog-content">
        <p className="blog-topic">{item.topic}</p>
        <h1 className="blog-title">{item.title}</h1>
        <div className="profile">
          <img
            src={item.avatarUrl}
            alt={item.author}
            className="profile-image"
          />
          <p className="author">{item.author}</p>
        </div>
      </div>
    </li>
  </Link>
)

export default BlogItem

// author
// :
// "Dan Abramov,"
// avatar_url
// :
// "https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg"
// id
// :
// 1
// image_url
// :
// "https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png"
// title
// :
// "React v16.9.0 and the Roadmap Update"
// topic
// :
// "React.js"
