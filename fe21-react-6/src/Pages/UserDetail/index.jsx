import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const url = "http://localhost:3000/users/";
const UserDetail = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(url + id).then(({ data }) => {
      setUser(data);
    });
  }, []);
  return (
    <div className="container">
      <div className="user" style={{ width: "100%" }}>
        <h2>name - {user.name}</h2>
        <h2>username - {user.username}</h2>
        <h2>email - {user.email}</h2>
      </div>
    </div>
  );
};

export default UserDetail;
