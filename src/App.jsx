import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adddata from "./Adddata";
import Display from "./Display";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Adddata />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
