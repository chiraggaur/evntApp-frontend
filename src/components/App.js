import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Home from "./home";
import Login from "./login";
import SignUP from "./signup";
import Events from "./events";
import "../styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="home-wrapper">
        <Header />
        <div className="content-wrapper">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/event" element={<Events />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUP />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
