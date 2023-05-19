import React from "react";
import Sidebar from "../../components/AdminComponents/sidebar";
import User from "../../components/AdminComponents/Users";

const Users = () => {
  return (
    <div className="row ">
      <div className="col-md-2  ">
        <Sidebar />
      </div>
      <div className="col">
        <User />
      </div>
    </div>
  );
};

export default Users;
