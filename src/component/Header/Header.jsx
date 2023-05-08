import React from "react";
import { Link } from "react-router-dom";
import home from "../../Images/home.jpg";
import "../Home/Home";

const Header = () => {
  return (
    <>
      <div
        className="container-fluid text-white "
        style={{ backgroundColor: "#0d1b2a", paddingTop: "1rem" }}
      >
        <div className="container col-md-10 d-xl-block d-none text-white ">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start align-items-center ms-4">
              <div className="d-flex justify-content-start align-items-center me-5">
                <i className="fa fa-map-marker me-2"></i>
                <p className="text mb-0">Kathmandu</p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <i className="fa fa-phone me-2"></i>
                <p className="text mb-0">+977-980959895</p>
              </div>
            </div>
            <div>
              <a
                href="https://www.youtube.com/@abhinayakarki6312"
                className="me-4 text-reset"
              >
                <i className="fab fa-youtube f-youtube" />
              </a>
              <a
                href="https://www.facebook.com/abhinayakarki500"
                className="me-4 text-reset"
              >
                <i className="fab fa-facebook-f f-facebook" />
              </a>
              <a
                href="https://www.instagram.com/abhinaya_karki/"
                className="me-4 text-reset"
              >
                <i className="fab fa-instagram f-instagram" />
              </a>
              <a
                href="https://twitter.com/abhinayakarki?lang=en"
                className="me-4 text-reset"
              >
                <i className="fab fa-twitter f-twitter" />
              </a>
            </div>
          </div>
        </div>
        <hr className="d-xl-block d-none" />
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid col-md-10 col-14">
            <Link className="navbar-brand text-white" to="/">
              <img
                src={home}
                alt=""
                className="rounded-circle"
                width={100}
                height={100}
              />
            </Link>

            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-white" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item mx-3">
                  <Link className="nav-link text-white header-link" to="/">
                    Home
                  </Link>
                </li>

                {/* adding dropdowns for other */}
                <li className="frontpage_drop_down nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white header-link"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Gallery
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      className="dropdown-item"
                      to="/all-news"
                    >
                      Newspapers
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/all-commercial-services"
                    >
                      Certificates &amp; Appreciate Letters
                    </Link>
                  </div>
                </li>
                <li className="frontpage_drop_down nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white header-link"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Countries
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/">
                      Nepal
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/all-residential-services"
                    >
                      Bangladesh
                    </Link>
                  </div>
                </li>

                {/* adding dropdowns for Donations */}
                <li className="frontpage_drop_down nav-item dropdown ">
                  <Link
                    className="nav-link dropdown-toggle text-white header-link"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Donations
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/donation_history">
                      Donation History
                    </Link>
                    <Link className="dropdown-item" to="/donate_now">
                      Donate Now
                    </Link>
                  </div>
                </li>
                {/* <li className="nav-item mx-3">
                  <Link
                    className="nav-link text-white header-link"
                    to="/donation"
                  >
                    Donation
                  </Link>
                </li> */}
                <li className="nav-item mx-3">
                  <Link
                    className="nav-link text-white header-link"
                    to="/contact"
                  >
                    Contacts
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <a
                    href="https://www.google.com/maps/@27.7230338,85.3360671,15z/data=!3m1!4b1!4m5!7m4!1m2!1s101826853038697482832!2sChZOWmticndiZGxRMVlocDZKOHp6bERREggHBfsZmOwtiw%3D%3D!2e2?hl=en"
                    className="nav-link text-white header-link"
                  >
                    Live Map
                  </a>
                </li>

                {/* closing dropdowns  */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
