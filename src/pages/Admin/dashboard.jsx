import React from "react";
import Sidebar from "../../components/AdminComponents/sidebar";
import Dashboard from "../../components/AdminComponents/dashboard";

const dashboard = () => {
  return (
    <div className="row ">
      <div className="col-md-2  ">
        <Sidebar />
      </div>
      <div className="col">
        <Dashboard />
      </div>
    </div>
  );
};

export default dashboard;
