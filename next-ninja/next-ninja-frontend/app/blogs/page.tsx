import React from 'react'

const BlogsPage = async () => {
  const post = await fetch('https://jsonplaceholder.typicode.com/posts')
  const postData = await post.json();
  console.log(postData)
  return (
    <div>
      <h1>
        Blogs Page
      </h1>
    </div>
  )
}

export default BlogsPage
