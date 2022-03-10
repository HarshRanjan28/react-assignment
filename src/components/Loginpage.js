import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [islogin, setIslogin] = useState(false);

  let navigate = useNavigate();

  const check_credentials = () => {
    const email = localStorage.getItem("Email");
    const password = localStorage.getItem("Pwd");
    const inputemail = document.getElementById("email").value;
    const inputpassword = document.getElementById("pwd").value;
    if (email === inputemail && password === inputpassword) {
      alert("Invalid Credentials");
    } else {
      setIslogin(true);
      navigate("/Page");
    }
  };
  return (
    <>
      <div className="signup">
        <div className="details">
          <label htmlFor="email"> Email: </label>{" "}
          <input type="email" placeholder="Enter Your Email" id="email" />
          <label htmlFor="pass"> Password: </label>{" "}
          <input type="password" placeholder="Enter Your Password" id="pwd" />
          <button className="btn" onClick={check_credentials}>
            Login{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Loginpage;
