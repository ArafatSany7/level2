/* eslint-disable @typescript-eslint/no-explicit-any */

import { cacheLife } from 'next/dist/server/use-cache/cache-life';
import { getBlogs } from '../service/getblogs';
import MyServerComponent from '../ui/MyServerComponent';
import { cacheTag } from 'next/cache';

const BlogsPage = async () => {
  // "use cache";
  // cacheLife("hours");

  cacheTag("posts")
  const blogs = await getBlogs();
  console.log(blogs);

  return (
    <div>

      Blogs Page
      {
        blogs.map((blog: any) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </div>
        ))
      }

      <MyServerComponent />

    </div>
  )
}

export default BlogsPage
