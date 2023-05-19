import React from "react";
import Sidebar from "../../components/AdminComponents/sidebar";
import Blogs from "../../components/AdminComponents/Blogs";

const Blog = () => {
  return (
    <div className="row ">
      <div className="col-md-2  ">
        <Sidebar />
      </div>
      <div className="col">
        <Blogs />
      </div>
    </div>
  );
};

export default Blog;
