import { Link } from "react-router-dom";
import "./User.css";
const Users = ({ user }) => {
  const { name, email, id } = user;
  return (
    <div className="user">
      <h3>name:{name}</h3>
      <h3>{email}</h3>
      <h3>{id}</h3>

      <Link to={`/users/${id}`}>Show Details</Link>
      <Link to={`/users/${id}`}>
        <button>Click Me</button>
      </Link>
    </div>
  );
};

export default Users;
