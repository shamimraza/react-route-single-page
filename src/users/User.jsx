import { useLoaderData } from "react-router-dom";
import Users from "./Users";
import "./User.css";

const User = () => {
  const users = useLoaderData();
  return (
    <div>
      <div className="users">
        {users.map((user) => (
          <Users key={user.id} user={user}></Users>
        ))}
      </div>
    </div>
  );
};

export default User;
