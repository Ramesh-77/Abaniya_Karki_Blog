import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../AdminDashboard/AdminHeader";
import { AdminSidebar } from "../AdminDashboard/AdminSidebar";

// use reducer

const AdminViewDonation = () => {
  const [data, setDonationData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-donation-history")
      .then((result) => {
        // console.log(result.data);
        setDonationData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  const deleteAdminDonationHistory = (id) => {
    axios
      .delete("http://localhost:5000/delete-donation-history/" + id)
      .then(() => {
        console.log("item deleted");
      });
    console.log(id);
  };

  const headers = [
    { key: "sn", label: "S.N." },
    { key: "countryName", label: "Country" },
    { key: "fullname", label: "Full Name" },
    { key: "address", label: "Address" },
    { key: "occupation", label: "Occupation" },
    { key: "contact", label: "Contact" },
    { key: "season", label: "Season" },
    { key: "amount", label: "Amount" },
    { key: "image", label: "Image" },
    { key: "createdAt", label: "Donation Date" },
  ];
  return (
    <>
      <div className="container-fluid ps-0 py-3">
        <AdminHeader />

        <div className="row py-4 me-4">
          <AdminSidebar />
          <div className="col-md-9">
            {/* implementing conditions for products in cart */}
            {data.length === 0 ? (
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
                            <div style={{ textAlign: "right", padding: "5px" }}>
                              <Link
                                to="/add-donation-history"
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
                                  {data.map((items, key) => {
                                    return (
                                      <tr key={key}>
                                        {/* 
                                            <td>
                                              <span
                                                style={{
                                                  fontWeight: "600",
                                                  marginLeft: "50px",
                                                }}
                                              >
                                                {items.pname}
                                              </span>
                                            </td>

                                            <td>
                                              <span
                                                style={{
                                                  fontWeight: "600",
                                                  marginLeft: "50px",
                                                }}
                                              >
                                                {items.pqty}
                                              </span>
                                            </td> */}

                                        <td>{items.sn}</td>
                                        <td>{items.countryName}</td>
                                        <td>{items.fullname}</td>
                                        <td>{items.address}</td>
                                        <td>{items.occupation}</td>
                                        <td>{items.contact}</td>
                                        <td>{items.season}</td>
                                        <td>{items.amount}</td>
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
                                        <td>{items.createdAt}</td>

                                        <td>
                                          <Link
                                            to={`/update-donation-history/${items._id}`}
                                            className="d-flex"
                                          >
                                            <i className="bi bi-pencil-square fa-2x text-primary"></i>
                                          </Link>
                                          <span
                                            onClick={deleteAdminDonationHistory.bind(
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
export default AdminViewDonation;
