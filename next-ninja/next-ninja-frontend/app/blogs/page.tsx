
import MyServerComponent from '../ui/MyServerComponent';

const BlogsPage = async () => {
  const post = await fetch('https://jsonplaceholder.typicode.com/posts')
  const postData = await post.json();
  console.log(postData)
  return (
    <div>

      Blogs Page

      <MyServerComponent />

    </div>
  )
}

export default BlogsPage
