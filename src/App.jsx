import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adddata from "./Add-data";
import Display from "./Display";
import Navbar from "./navbar";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Adddata />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
