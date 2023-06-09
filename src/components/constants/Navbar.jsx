import { LibraryAdd, NotificationAddOutlined } from "@mui/icons-material";
import React, { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand text-primary " href="#">
          BlogHub
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            {" "}
            {/* Modified: Added mx-auto class */}
            <a className="nav-link active" href="#">
              Home
            </a>
            <a className="nav-link active" href="#">
              Topics
            </a>
            <a className="nav-link active" href="#">
              <LibraryAdd />
              add blog
            </a>
            <a className="nav-link active" href="#">
              <NotificationAddOutlined />
            </a>
          </div>
          {user ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Jane Doe
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userMenu"
                >
                  <a className="dropdown-item" href="#">
                    My account
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Log out
                  </a>
                </div>
              </li>
            </ul>
          ) : (
            <form className="form-inline">
              <a href="#" className="btn btn-outline-secondary">
                Log in
              </a>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
