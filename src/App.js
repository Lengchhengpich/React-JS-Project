import "./App.css";
import { ReactDOM } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="wrapp">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
