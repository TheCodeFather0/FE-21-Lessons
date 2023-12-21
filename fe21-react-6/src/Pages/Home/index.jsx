import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "../../Components/User";

const url = "http://localhost:3000/users";
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);
  return (
    <div className="container">
      <div className="users">
        {users.map(({ id, name }) => {
          return <User key={id} id={id} name={name} />;
        })}
      </div>
    </div>
  );
};

export default Home;
