import { useLoaderData, useNavigate } from "react-router-dom";

const ShowDetails = () => {
  const navigation = useNavigate();

  const goBackButton = () => {
    navigation(-1);
  };
  const userData = useLoaderData();
  const { name, phone, website } = userData;
  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <button onClick={goBackButton}>go back</button>
    </div>
  );
};

export default ShowDetails;
