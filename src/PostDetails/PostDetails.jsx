import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();

  const buttonBack = () => {
    navigate(-1);
  };
  const post = useLoaderData();
  const { title, body, id } = post;
  console.log(post);
  return (
    <div>
      <p>post details</p>
      <p>{title}</p>
      <p>{body}</p>
      <p>{id}</p>
      <button onClick={buttonBack}>go back</button>
    </div>
  );
};

export default PostDetails;
