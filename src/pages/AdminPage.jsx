import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  if (!user || user.role !== "admin") {
    navigate("/");
    return null;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! Manage users and content here.</p>
    </div>
  );
};

export default AdminPage;
