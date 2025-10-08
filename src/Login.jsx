import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in both email and password!");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`Logged in successfully! Welcome ${user.email}`);
        navigate("/home");
      })
      .catch((error) => {
        alert(`Login Error (${error.code}): ${error.message}`);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Sign IN / Login</h2>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
