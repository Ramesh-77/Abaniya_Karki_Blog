import React from "react";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  const logoutHandle = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location = "/";
  };
  return (
    <>
        <div className="col-md-3 ">
          <div className="p-1">
            <div className="text-white">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <div className="bg-white text-dark p-3 rounded w-100">
                  <div className="d-flex justify-content-start align-items-center">
                    <div className="div">
                      {/* {adminData && adminData.image ? (
                        <img
                          src={`http://localhost:5000/${adminData.image}`}
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <img
                          src="https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg"
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      )} */}

<img
                          src="https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg"
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                    </div>

                    <div className="jj ms-3">
                      <p className="text text-dark fw-bold fs-6 mb-0">
                        {/* {adminData.name}  */}
                        Abhinaya karki
                      </p>
                      <small className="text text-dark d-block">
                        {/* {adminData.email}  */}
                        abhinaya@gmail.com
                      </small>
                    </div>
                  </div>
                </div>

                <div className="my-3">
                  <p className="text text-secondary h6 mb-0 mx-3">Menu</p>
                </div>

                <div className="py-2 w-100 mx-2 ">
                  {/* first navlink */}
                  <a href="/admin-dashboard" className="nav-link w-100 my-2 mb-3 px-2 py-2">
                    <div className="d-flex justify-content-start align-items-center">
                      <i className="fa fa-th text-dark fs-5 me-4 "></i>
                      <Link
                        className="text text-dark fs-5 mb-0 text-decoration-none"
                        to="/admin-dashboard"
                      >
                        Dashboard
                      </Link>
                    </div>
                  </a>

                  {/* third navlink */}
                  <Link
                    to="/view-admin-products"
                    className="nav-link w-100 my-2 mb-3 px-2 py-2"
                  >
                    <div className="d-flex justify-content-start align-items-center">
                      <i className="fa fa-shopping-bag text-dark fs-5 me-4"></i>
                      <Link
                        className="text text-dark fs-5 mb-0 text-decoration-none"
                        to="/view-admin-country"
                      >
                        Country
                      </Link>
                    </div>
                  </Link>

                  <Link
                    to="/view-admin-donation"
                    className="nav-link w-100 my-2 mb-3 px-2 py-2"
                  >
                    <div className="d-flex justify-content-start align-items-center">
                      <i className="fa fa-sort text-dark fs-5 me-4"></i>
                      <p className="text text-dark fs-5 mb-0">
                        Donation History
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/view-admin-certificate"
                    className="nav-link w-100 my-2 mb-3 px-2 py-2"
                  >
                    <div className="d-flex justify-content-start align-items-center">
                      <i className="fa fa-sort text-dark fs-5 me-4"></i>
                      <p className="text text-dark fs-5 mb-0">
                        Certificate & Appreciate Letters
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/view-admin-news"
                    className="nav-link w-100 my-2 mb-3 px-2 py-2"
                  >
                    <div className="d-flex justify-content-start align-items-center">
                      <i className="fa fa-sort text-dark fs-5 me-4"></i>
                      <p className="text text-dark fs-5 mb-0">
                        Newspaper
                      </p>
                    </div>
                  </Link>
                  <a href="/admin-dashboard" className="nav-link w-100 my-2 mb-3 px-2 py-2 ">
                    <div className="d-flex justify-content-start align-items-center ">
                      <i className="bi bi-box-arrow-left text-secondary fs-5 me-4"></i>
                      <p
                        className="text text-danger fw-bold fs-5 mb-0"
                        onClick={logoutHandle}
                      >
                        LOGOUT
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}



