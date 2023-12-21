import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { v4 } from "uuid";

const url = "http://localhost:3000/users/";
const AddUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const adduser = (e) => {
    e.preventDefault();
    const data = {
      id: v4(),
      name,
      username,
      email,
    };

    if ((name, username, email)) {
      axios.post(url, data).then(({ statusText }) => {
        if (statusText === "Created") {
          Swal.fire({
            title: "Good job!",
            text: "User added!",
            icon: "success",
          });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  return (
    <div className="container">
      <form onSubmit={adduser}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Add user" />
      </form>
    </div>
  );
};

export default AddUser;
