import axios from "axios";
import React, { useEffect, useState } from "react";

const url = "http://localhost:3000/users/";
const MyUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const deleteUser = (id) => {
    axios.delete(url + id).then((res) => {
      if (res.statusText === "OK") {
        alert("user silindi");
        axios.get(url).then(({ data }) => {
          setUsers(data);
        });
      }
    });
  };
  return (
    <ul>
      {users.map(({ id, marka }) => {
        return (
          <li key={id} className="m-2">
            {marka}
            <button className="btn btn-danger" onClick={() => deleteUser(id)}>
              ❌
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default MyUsers;
