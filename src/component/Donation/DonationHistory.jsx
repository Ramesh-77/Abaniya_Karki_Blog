import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";

const DonationHistory = () => {
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
    <div>
      <Header />
      <div className="main my-5 px-4">
        <div>
          <h2 className="text-white fs-4 text-uppercase fw-bold py-4">
            All Donations
          </h2>
        </div>

        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="container-fluid ps-0 py-3">
              <div className="row me-4">
                <div className="col-md-12">
                  {/* {pdata.length === 0 ? ( */}
                  {/* <div className="container">
                      <div className="row">
                        <div className="col-md-10 col-12">
                          <Link to="/addProduct" className="btn btn-info">
                            Add Product
                          </Link>
                          <h3 className="m-5">
                            There is no any products to display!!!
                          </h3>
                        </div>
                      </div>
                    </div> */}
                  {/* ) : ( */}
                  <>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-12 col-12">
                              <div style={{ textAlign: "right" }}>
                                <Link
                                  to="/add-donation-history"
                                  className="btn btn-primary fw-bold my-2 text-white"
                                >
                                  Add New
                                </Link>
                              </div>

                              <div className="card">
                                <div className="card-body">
                                  <table className="table table-responsive table-striped">
                                    <thead>
                                      <tr>
                                        {headers.map((row) => {
                                          return (
                                            <th key={row.key}>{row.label}</th>
                                          );
                                        })}
                                      </tr>
                                    </thead>
                                    <tbody style={{ justifyContent: "center" }}>
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
                                                to={`/update-product/${items._id}`}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;
