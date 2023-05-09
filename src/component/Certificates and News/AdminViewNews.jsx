import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../AdminDashboard/AdminHeader";
import { AdminSidebar } from "../AdminDashboard/AdminSidebar";

// use reducer

const AdminViewNews = () => {
  const [ndata, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-news")
      .then((result) => {
        // console.log(result.data.pname);
        setNewsData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteAdminNews = (id) => {
    axios.delete("http://localhost:5000/delete-news/" + id).then(() => {
      window.location.href = "/view-admin-news";
    });
    console.log(id);
  };

  const headers = [
    { key: "newslink", label: "News Link" },
    { key: "title", label: "Title" },
    { key: "image", label: "Image" },
    { key: "action", label: "Action" },
  ];

  return (
    <>
      <div className="container-fluid ps-0 py-3">
        <AdminHeader />

        <div className="row py-4 me-4">
          <AdminSidebar />
          <div className="col-md-9">
            {/* implementing conditions for products in cart */}
            {ndata.length === 0 ? (
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-12">
                    <Link to="/add-news" className="btn btn-info">
                      Add News
                    </Link>
                    <h3 className="m-5">There is no any news to display!!!</h3>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row justify-content-center">
                        <div className="col-md-12 col-12">
                          <div className="card my-5">
                            <div style={{ textAlign: "right", padding: "5px" }}>
                              <Link
                                to="/add-news"
                                className="btn btn-primary fw-bold text-white"
                              >
                                Add New
                              </Link>
                            </div>
                            <div className="card-body">
                              <table className="table table-responsive">
                                <thead>
                                  <tr>
                                    {headers.map((row) => {
                                      return <th key={row.key}>{row.label}</th>;
                                    })}
                                  </tr>
                                </thead>
                                <tbody
                                  style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  {/* for produdct added data  data : use loop*/}
                                  {ndata.map((items) => {
                                    return (
                                      <tr>
                                        <td>
                                          <span
                                            style={{
                                              fontWeight: "600",
                                              marginLeft: "50px",
                                            }}
                                          >
                                            {items.newslink}
                                          </span>
                                        </td>
                                        <td>
                                          <span
                                            style={{
                                              fontWeight: "600",
                                              marginLeft: "50px",
                                            }}
                                          >
                                            {items.title}
                                          </span>
                                        </td>
                                        <td>
                                          <img
                                            src={
                                              "http://localhost:5000/" +
                                              items.image
                                            }
                                            alt=""
                                            className="img-fluid"
                                            style={{
                                              maxWidth: "100px",
                                              maxHeight: "100px",
                                              borderRadius: "5px",
                                            }}
                                          />
                                        </td>

                                        <td>
                                          <Link
                                            to={`/update-news/${items._id}`}
                                            className="d-flex"
                                          >
                                            <i className="bi bi-pencil-square fa-2x text-primary"></i>
                                          </Link>
                                          <span
                                            // onClick={(e)=>{deleteAdminProduct(e, items._id)}}
                                            onClick={deleteAdminNews.bind(
                                              this,
                                              items._id
                                            )}
                                            style={{ cursor: "pointer" }}
                                            className="d-flex"
                                          >
                                            <i className="bi bi-trash-fill fa-2x text-danger"></i>
                                          </span>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminViewNews;
