import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Task2And4 from "./components/Task2And4";
import Task1 from "./components/Task1";

import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h2 className="header">
        <h3>Assignment</h3>
        <h5 className="redirect" onClick={() => navigate("/")}>
          Rediect to Homepage
        </h5>
      </h2>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task.1" element={<Task1 />} />
        <Route path="/task.2.4" element={<Task2And4 />} />
      </Routes>
    </div>
  );
}

export default App;
