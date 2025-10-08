import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import "./App.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const auth = getAuth();
  const db = getFirestore();
  const googleProvider = new GoogleAuthProvider();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), { email: user.email, createdAt: new Date() });
      alert(`Signup successful! Welcome ${user.email}`);
      navigate("/");
    } catch (error) {
      alert(`Signup Error (${error.code}): ${error.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), { email: user.email, createdAt: new Date() }, { merge: true });
      alert(`Google Sign-In successful! Welcome ${user.email}`);
      navigate("/home");
    } catch (error) {
      alert(`Google Sign-In Error (${error.code}): ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <p>Already have an account? <Link to="/">Login</Link></p>
        <button type="submit">Sign Up</button>
      <hr />
      <button className="google-btn" onClick={handleGoogleSignIn}>
        Sign Up / Login with Google
      </button>
      </form>
    </div>
  );
};

export default Signup;
