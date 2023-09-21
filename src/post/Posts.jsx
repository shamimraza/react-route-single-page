import { useLoaderData } from "react-router-dom";
import Post from "../posts/Post";
import "./Post.css";
const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <div className="post">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
