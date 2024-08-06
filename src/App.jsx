import React from "react";
import Home from "./assets/pages/Home";
import Navbar from "./assets/pages/NavBar";
import Footer from "./Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Blue from "./assets/pages/Blue";
import Red from "./assets/pages/Red";

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}/>;
        <Route path="blue" element={<Blue />} />;
        <Route path="red" element={<Red />} />;
        <Route path="*" element={<Home />}/>;
          {/*Different Routes go here*/}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;