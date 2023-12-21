import Home from "../Pages/Home";
import AddUser from "../Pages/AddUser";
import EditUser from "../Pages/EditUser";
import DeleteUser from "../Pages/DeleteUser";
import UserDetail from "../Pages/UserDetail";

const myRoutes = [
  { id: 1, path: "/", element: <Home />, title: "Home Page" },
  { id: 2, path: "/adduser", element: <AddUser />, title: "Add User" },
  { id: 3, path: "/edituser", element: <EditUser />, title: "Edit User" },
  { id: 4, path: "/deleteuser", element: <DeleteUser />, title: "Delete User" },
  { id: 5, path: "/user/:id", element: <UserDetail /> },
];

export default myRoutes;
