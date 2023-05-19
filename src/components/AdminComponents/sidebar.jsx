import React, { useState, useEffect } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import { LibraryBooks, Settings, TopicSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 400);
    };

    window.addEventListener("resize", handleResize);

    // Call the handleResize initially
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <aside id="sidebarMenu" className=" sidebar bg-white">
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <Link
              to="/admin"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <DashboardIcon className="me-3" />
              <span>dashboard</span>
            </Link>
            <Link to="/admin/blogs" className="list-group-item  `py-2 ripple ">
              <LibraryBooks className="me-3" />
              <span>Blogs</span>
            </Link>
            <Link
              to="/admin/users"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <PeopleIcon className="me-3" />
              <span>Users</span>
            </Link>
            <Link
              to="/admin/topics"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <TopicSharp className="me-3" />
              <span>Topics</span>
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <TrendingUpIcon className="me-3" />
              <span>Analytics</span>
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <Settings className="me-3" />
              <span>Settings</span>
            </Link>

            <Link
              to="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <CalendarTodayIcon className="me-3" />
              <span>Calendar</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
