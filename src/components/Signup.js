import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();

  const submitData = () => {
    const email = document.getElementById("email").value;
    const pwd = document.getElementById("pwd").value;
    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("Pwd", JSON.stringify(pwd));

    navigate("/Loginpage");
  };

  return (
    <div className="signup">
      <div className="details">
        <label htmlFor="name"> Name: </label>
        <input type="text" placeholder="Enter Your Name" id="name" />
        <label htmlFor="pass"> Password: </label>
        <input type="password" placeholder="Enter Your Password" id="pwd" />
        <label htmlFor="email"> Email: </label>
        <input type="email" placeholder="Enter Your Email" id="email" />
        <label htmlFor="num"> Phone Number: </label>
        <input type="number" placeholder="Enter Your Phone number" id="name" />
        <button className="btn" onClick={submitData}>
          Sign - Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
