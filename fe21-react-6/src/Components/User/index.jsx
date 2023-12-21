import React from "react";
import { Link } from "react-router-dom";

const User = ({ id,name }) => {
  return <Link to={`/user/${id}`} className="user">{name}</Link>;
};

export default User;
