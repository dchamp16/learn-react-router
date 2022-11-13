import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // imperatively redirect back
    console.log("goBack Clicked");
    navigate(1);
    // history.goBack();
  };

  const goForward = () => {
    // imperatively redirect forward

    console.log("goForward Clicked");
    navigate(-1);
    // history.goForward();
  };

  return (
    <>
      <footer>
        <button onClick={goBack}>Back</button>
        <button onClick={goForward}>Forward</button>
      </footer>
    </>
  );
};

export default Footer;
