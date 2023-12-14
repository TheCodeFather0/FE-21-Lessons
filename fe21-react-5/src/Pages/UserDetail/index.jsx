import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const url = "https://jsonplaceholder.typicode.com/users/";
const index = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios(url + id).then(({ data }) => {
      setUser(data);
    });
  }, []);
  return (
    <div className="card">
      <h2>{user.username}</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default index;
