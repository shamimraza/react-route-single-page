import { Link, useNavigate } from "react-router-dom";
import "./posts.css";
const Post = ({ post }) => {
  const { title, body, id } = post;

  const navigate = useNavigate();

  const handleButton = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="posts">
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <button onClick={handleButton}>Post</button>
    </div>
  );
};

export default Post;
