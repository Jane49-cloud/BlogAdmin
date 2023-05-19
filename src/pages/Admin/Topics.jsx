import React from "react";
import Sidebar from "../../components/AdminComponents/sidebar";
import Topics from "../../components/AdminComponents/Topic";

const TopicsPage = () => {
  return (
    <div className="row ">
      <div className="col-md-2  ">
        <Sidebar />
      </div>
      <div className="col">
        <Topics />
      </div>
    </div>
  );
};

export default TopicsPage;
