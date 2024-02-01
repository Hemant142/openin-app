import { useNavigate } from "react-router-dom";
import "./Form.css"
import { useState } from "react";
const Form = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleSignIn = () => {
    navigate("/upload");
  };
  return (
     <div className="form-container">
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="forgot-password">
            <a href="#forgot">Forgot password?</a>
          </p>
        </div>
        <button type="submit" className="signin-btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Form;