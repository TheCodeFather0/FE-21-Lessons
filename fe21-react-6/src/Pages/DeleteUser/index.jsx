import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const url = "http://localhost:3000/users/";
const DeleteUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "100% silmek isteyirsen?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(url + id).then(({ statusText }) => {
          if (statusText === "OK") {
            axios.get(url).then(({ data }) => {
              setUsers(data);
            });
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="container">
      <div className="users">
        {users.map(({ id, name }) => {
          return (
            <div key={id} className="user deleteUserBox">
              {name}
              <button onClick={() => deleteUser(id)}>🗑️</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeleteUser;
