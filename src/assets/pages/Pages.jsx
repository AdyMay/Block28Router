import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Blue from "./blue";
import Red from "./red";

export default function Main() {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blue" element={<Blue />} />
                <Route path="/red" element={<Red />} />
            </Routes>
        </div>
    );
}