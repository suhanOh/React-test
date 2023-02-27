import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import './App.css';
import HomeEn from "./pages/HomeEn";

function App() {
  return (
    <div className="App">
      <nav>
        {/* <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/en" element={<HomeEn />}/>
      </Routes>
    </div>
  );
}

export default App;
