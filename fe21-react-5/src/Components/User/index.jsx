import axios from "axios";
import React from "react";

const url = "http://localhost:3000/users/";

const index = ({ user: { id, name, username, email }, setUsers }) => {
  const deleteUser = (id) => {
    axios.delete(url + id).then(({ statusText }) => {
      if (statusText === "OK") {
        axios(url).then(({ data }) => setUsers(data));
      }
    });
  };

  const editUser = (id, name, username, email) => {
    const newName = prompt("enter new name", name);
    const newUsername = prompt("enter new username", username);
    const newEmail = prompt("enter new email", email);

    const updatedUser = {
      name: newName,
      username: newUsername,
      email: newEmail,
    };
    axios.put(url + id, updatedUser).then(({ statusText }) => {
      if (statusText === "OK") {
        axios(url).then(({ data }) => setUsers(data));
      }
    });
  };
  return (
    <div className="card">
      <h2>
        {name} - {username}
      </h2>
      <p>{email}</p>
      <button onClick={() => deleteUser(id)}>delete</button>
      <button onClick={() => editUser(id, name, username, email)}>edit</button>
    </div>
  );
};

export default index;
