import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../User";

const url = "http://localhost:3000/users";
const index = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const addUser = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        name,
        username,
        email,
      })
      .then(({ statusText }) => {
        if (statusText === "Created") {
          axios(url).then(({ data }) => setUsers(data));
        }
      });
  };
  return (
    <>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={({ target: { value } }) => setUsername(value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <input type="submit" value="Add user" />
      </form>
      <div className="cards">
        {users.map((user) => {
          return <User key={user.id} user={user} setUsers={setUsers} />;
        })}
      </div>
    </>
  );
};

export default index;
