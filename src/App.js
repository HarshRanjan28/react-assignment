import React from "react";
import Loginpage from "./components/Loginpage";
import Signup from "./components/Signup";
import Page from "./components/Page";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Loginpage" element={<Loginpage />} />
        <Route path="/Page" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;
