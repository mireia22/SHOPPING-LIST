import React from "react";
import { NavLink } from "react-router-dom";
import { NavWrp } from "./Home-styles";
const Home = () => {
  return (
    <NavWrp>
      <NavLink to="shopping-list">Shopping List </NavLink>
    </NavWrp>
  );
};

export default Home;
