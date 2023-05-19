import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/Admin/dashboard";
import AdminBlogs from "../pages/Admin/Blog";
import AdminTopics from "../pages/Admin/Topics";
import AdminUsers from "../pages/Admin/Users";
import Navbar from "../components/constants/Navbar";

const index = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/blogs" element={<AdminBlogs />} />
      <Route path="/admin/topics" element={<AdminTopics />} />
      <Route path="/admin/users" element={<AdminUsers />} />
    </Routes>
  );
};

export default index;
