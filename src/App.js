import React from "react";
import "./App.css";
import HomePage from "./components/Home";
import { Routes, Route } from "react-router-dom";
import FamousQuote from "./components/FamousQuote";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/famousQuote" element={<FamousQuote />} />
      </Routes>
    </div>
  );
};

export default App;
