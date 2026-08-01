import Loader from 'react-loader-spinner'
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {
    blogsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(item => ({
      id: item.id,
      author: item.author,
      avatarUrl: item.avatar_url,
      imageUrl: item.image_url,
      topic: item.topic,
      title: item.title,
    }))

    this.setState({
      blogsList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {blogsList, isLoading} = this.state

    return (
      <div className="blog-list-container">
        <div className="blog-list">
          {!isLoading ? (
            <ul className="blogs-container">
              {blogsList.map(item => (
                <BlogItem item={item} key={item.id} />
              ))}
            </ul>
          ) : (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default BlogList
