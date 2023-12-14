import React from "react";
import Loader from "./Loader";

const UsersTable = ({ users }) => {
  return (
    <div className="container my-4">
      <table className="table border">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, username, email }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
