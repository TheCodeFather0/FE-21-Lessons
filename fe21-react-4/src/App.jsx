import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Users from "./Components/Users";
import axios from "axios";
import UsersTable from "./Components/UsersTable";
import Loader from "./Components/Loader";
import MyUsers from "./Components/MyUsers";

const url = "https://jsonplaceholder.typicode.com/users";
const App = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   console.log("showUsers state-i deyisdi");
  // }, [showUsers]); //dependency list, depList

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      {/* {showUsers && <Users istifadeciler={users} />} */}

      {/* {users.length > 0 ? <UsersTable users={users} /> : <Loader />} */}

      <MyUsers />
    </div>
  );
};

export default App;
