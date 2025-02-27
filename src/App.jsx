import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Grades from "./pages/Grades";
import Courses from "./pages/Courses";
import AdminPage from "./pages/AdminPage";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/grades" element={<Grades />} />
      </Routes>
    </Router>
  );
};

export default App;
