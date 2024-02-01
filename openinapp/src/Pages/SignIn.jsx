import React from "react";
import "./SignIn.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const navigate = useNavigate();
  const handleSignIn = () => {
  navigate("/upload");
};
  return (
    <div className="resister">
      <div>
   
        <div className="section1_top">
          <div>
            <div className="logo1">
              <img src="https://i.ibb.co/pL8pBN4/logo.png" alt="Logo_img" />
            </div>
            <div>
              <p className="base">BASE</p>
            </div>
            <div className="section1_botton">
              <img src="https://i.ibb.co/9skzsn9/socalmedia.png" alt="socali" />
            </div>
          </div>
          <div className="triangle"></div>
        </div>
      </div>
      
      <div>
        <div className="section2_top">
          <div>
            <h1>Sign In</h1>
            <p>Sign in to your account</p>
          </div>
          <div className="auth">
           
            <div className="google" onClick={handleSignIn}>
            {/* <button> */}
              <div>
                <FcGoogle />
              </div>
              <div>Sign in with Google</div>
              {/* </button> */}
            </div>
            <div className="google">
              <div style={{color: "#858585"}}>
              <FaApple />
              </div>
              <div>Sign in with Apple</div>
            </div>
          </div>
          <div><Form/></div>
          <div className="part">
            Don't have an account? <span>Resister here</span>
          </div>
        </div>
      </div>
    </div>
  );
}
