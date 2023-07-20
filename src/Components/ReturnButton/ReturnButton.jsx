import React from "react";
import { useNavigate } from "react-router-dom";
import { RtrnButton } from "./ReturnButton-styles";
const ReturnButton = () => {
  const navigate = useNavigate();
  const returnToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <RtrnButton onClick={returnToHome}>⬅️ Return</RtrnButton>
    </div>
  );
};

export default ReturnButton;
