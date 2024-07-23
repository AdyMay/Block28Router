import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Blue from "./pages/Blue";
import Red from "./pages/Red";

function App() {
  return (
    <>

<div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">{/* navigation here */}</div>
      <div id="main-section">{/* routes here */}</div>
    </div>

{/* in class example */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<h1>Blue</h1>} />
        <Route path="/red" element={<h1>Red</h1>} />
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
{/* in class example */}
    </>
  );
};

export default App;