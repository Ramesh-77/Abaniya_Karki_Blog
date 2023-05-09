import React from "react";
import { Link } from "react-router-dom";
import home from "../../Images/home.jpg";

const AdminHeader = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-md-3">
            <div className="p-1 ms-5">
              <Link className="navbar-brand text-white" to="/admin-dashboard">
                <img
                  src={home}
                  alt=""
                  className="rounded-circle"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </div>

          <div className="col-md-9">
            <div className="p-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="w-50 d-flex">
                  <p className="text text-dark fs-4 fw-bold">Overview</p>
                  <div className="w-100" style={{ marginLeft: "80px" }}>
                    <form>
                      <input
                        type="search"
                        className="form-control w-100"
                        placeholder="search here..."
                      />
                    </form>
                  </div>
                </div>
                <div className="w-50">
                  <div style={{ marginLeft: "210px" }}>
                    <Link
                      to="/notifications"
                      type="button"
                      className="position-relative btn ps-2 pt-0 mx-3"
                    >
                      <i className="fa fa-bell"></i>
                      <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger px-2 py-1">
                        {/* {noti.length} */} 0
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </Link>
                    <Link
                      className="btn btn-danger px-3 ms-5"
                      to="/add-country"
                    >
                      Add Country
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
