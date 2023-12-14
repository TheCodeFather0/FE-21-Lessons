import Users from "./Components/Users/";
import "./app.css";
import { NavLink } from "react-router-dom";
import WebRoutes from "./Components/WebRoutes";

const App = () => {
  return (
    <div>
      {/* <Users /> */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <WebRoutes />

      <footer>salam footer</footer>
    </div>
  );
};

export default App;
