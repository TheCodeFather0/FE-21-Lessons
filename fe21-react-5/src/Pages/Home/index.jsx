import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/users";
const index = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <div className="cards">
        {users.map(({ id, username }) => {
          return (
            <Link to={`/userDetail/${id}`} key={id} className="card">
              <div>{username}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default index;
