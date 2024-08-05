import React from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;