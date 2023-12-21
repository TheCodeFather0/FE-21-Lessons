import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const url = "http://localhost:3000/users/";
const EditUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const editUser = (id, name, username, email) => {
    const _name = prompt("yeni datani yazin", name);
    const _username = prompt("yeni datani yazin", username);
    const _email = prompt("yeni datani yazin", email);

    const data = {
      name: _name || name,
      username: _username || username,
      email: _email || email,
    };

    axios.patch(url + id, data).then(({ statusText }) => {
      if (statusText === "OK") {
        axios.get(url).then(({ data }) => {
          setUsers(data);
        });
        Swal.fire({
          title: "Updated!",
          text: "Your file has been updated.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="container">
      <div className="users">
        {users.map(({ id, name, username, email }) => {
          return (
            <div key={id} className="user deleteUserBox">
              {name}
              <button onClick={() => editUser(id, name, username, email)}>
                ✒
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditUser;
