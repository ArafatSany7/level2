import { cacheLife, revalidateTag } from "next/cache";

export const getBlogs = async () => {
  const post = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    cache: "force-cache", // Use cache for this request
    next: {
      revalidate: 60 * 60 * 24, // Revalidate every 24 hours
      tags: ["posts"],
    },
  });
  const postData = await post.json();
  console.log(postData);
  return postData;
};

const renewBlogCache = () => {
  // revalidateTag("posts", "max");
  revalidateTag("posts", {
    expire: 60 * 60 * 24 * 7, // Expire in 7 days
  });
};
