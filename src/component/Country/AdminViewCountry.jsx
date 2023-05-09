import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../AdminDashboard/AdminHeader";
import { AdminSidebar } from "../AdminDashboard/AdminSidebar";

// use reducer

const AdminViewCountry = () => {
  const [cdata, setCountryData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-country")
      .then((result) => {
        // console.log(result.data.pname);
        setCountryData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteAdminCountry = (id) => {
    axios.delete("http://localhost:5000/delete-country/" + id).then(() => {
      console.log("item deletex");
      window.location.href = "/view-admin-country";
    });
    console.log(id);
  };

  const headers = [
    { key: "countryName", label: "Country Name" },
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
            {cdata.length === 0 ? (
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-12">
                    <Link to="/add-country" className="btn btn-info">
                      Add Country
                    </Link>
                    <h3 className="m-5">
                      There is no any country to display!!!
                    </h3>
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
                                  {cdata.map((items) => {
                                    return (
                                      <tr>
                                        {/* <td>
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
                                        </td> */}

                                        <td>
                                          <span
                                            style={{
                                              fontWeight: "600",
                                              marginLeft: "50px",
                                            }}
                                          >
                                            {items.countryName}
                                          </span>
                                        </td>

                                        <td>
                                          <Link
                                            to={`/update-country/${items._id}`}
                                            className="d-flex"
                                          >
                                            <i className="bi bi-pencil-square fa-2x text-primary"></i>
                                          </Link>
                                          <span
                                            // onClick={(e)=>{deleteAdminProduct(e, items._id)}}
                                            onClick={deleteAdminCountry.bind(
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
export default AdminViewCountry;
