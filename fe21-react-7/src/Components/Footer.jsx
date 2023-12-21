import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Footer = () => {
  const { name, surname } = useContext(UserContext);
  return <div>Footer</div>;
};

export default Footer;
