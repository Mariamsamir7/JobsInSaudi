import { useState, useEffect } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink("home");
  }, []);

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white position-fixed w-100">
        <div className="container border-bottom border-light w-100">
          {/* Logo */}
          <Link to="/">
            <img
              loading="lazy"
              src="https://jobsinsaudi.me/storage/images/Setting/H3OIcu7C561719990499.webp.svg"
              alt="logo"
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />
          </Link>

          {/* Offcanvas */}
          <div
            className="offcanvas offcanvas-start w-50"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-5 fw-semibold gap-5">
                <li className="nav-item ">
                  <Link
                    className={`nav-link ${
                      activeLink === "home" ? "active" : ""
                    }`}
                    to="/"
                    onClick={() => handleSetActive("home")}
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className={`nav-link ${
                      activeLink === "explore" ? "active" : ""
                    }`}
                    to="/explore"
                    onClick={() => handleSetActive("explore")}
                  >
                    EXPLORE
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className={`nav-link ${
                      activeLink === "about" ? "active" : ""
                    }`}
                    to="/aboutus"
                    onClick={() => handleSetActive("about")}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className={`nav-link ${
                      activeLink === "contact" ? "active" : ""
                    }`}
                    to="/contactus"
                    onClick={() => handleSetActive("contact")}
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/*  Icons */}
          <div className="d-flex align-items-center">
            {/* Language Dropdown */}
            <div className="dropdown m-2">
              <button
                className="btn btn-light dropdown-toggle p-2 text-success"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </button>
              <ul
                className="dropdown-menu text-center"
                aria-labelledby="languageDropdown"
              >
                <li>
                  <a className="dropdown-item text-success my-2" href="#">
                    العربية
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-success my-2" href="#">
                    हिन्दी
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-success my-2" href="#">
                    اردو
                  </a>
                </li>
              </ul>
            </div>

            {/* Notification Dropdown */}
            <div className="dropdown m-2">
              <button
                className="icon-wrapper border-0"
                type="button"
                id="notificationDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-bell-fill text-success fs-5"></i>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="notificationDropdown"
              >
                <li>
                  <a className="dropdown-item " href="#">
                    Notification 1
                  </a>
                </li>

                <li>
                  <a className="dropdown-item text-success" href="#">
                    View All Notifications
                  </a>
                </li>
              </ul>
            </div>
            {/* Profile Icon */}
            <div className="icon-wrapper m-2">
              <Link to="/Login">
                <i className="bi bi-person-fill text-success fs-5"></i>
              </Link>
            </div>
            {/* Toggle button */}
            <button
              className="navbar-toggler border-0 "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon text-success"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
