import React from "react";
import { Route, Routes } from "react-router-dom"; // Use Routes and Route from react-router-dom v6
import Login from "./components/login";
import Signup from "./components/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
