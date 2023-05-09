import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import AdminHeader from "../AdminDashboard/AdminHeader";
import { AdminSidebar } from "../AdminDashboard/AdminSidebar";

const SuccessMsg = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center bg-gradient">
            <p className="text-dark">
              You have successfully added certificate!!! Click "OK" to
              continue..
            </p>
            <Link
              to="/view-admin-certificate"
              className="btn btn-outline-success"
              style={{
                fontWeight: "bold",
                borderRadius: "15px",
                border: "2px solid green",
              }}
            >
              OK
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const AddCertificate = () => {
  const [countryName, setCountryName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const onSubmitCertificateForm = (e) => {
    e.preventDefault();
    const certificateData = new FormData();
    certificateData.append("countryName", countryName);
    certificateData.append("title", title);
    certificateData.append("image", image);

    axios
      .post("http://localhost:5000/post-certificate", certificateData)
      .then((result) => {
        console.log(result.data);
        if (result) {
          toast.success(<SuccessMsg />, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: false,
          });
          setCountryName("");
          setTitle("");
          setImage("");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="container-fluid ps-0 py-3">
        <AdminHeader />

        <div className="row py-4 me-4">
          <AdminSidebar />
          <div className="col-md-9">
            <div className="hori_line">
              <hr />
            </div>
            <div className="product_details_admin container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="py-3">Enter Certificate Details</h1>
                </div>
              </div>
            </div>
            <div className="add_product_page container">
              <div className="row">
                <div className="col-md-10">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          {/* customer form */}
                          <form
                            method="POST"
                            action=""
                            onSubmit={onSubmitCertificateForm}
                            encType="multipart/form-data"
                          >
                            {/* <label
                              htmlFor="serviceCategoryName"
                              className="fw-bold pb-2"
                            >
                              Product Category
                            </label> */}
                            {/* <div className="input-group">
                              <select
                                style={{
                                  border: "1px solid green",
                                  borderRadius: "5px",
                                  width: "100%",
                                  padding: "5px",
                                }}
                                value={categoryName}
                                onChange={(e) =>
                                  setCategoryName(e.target.value)
                                }
                                className="p-2"
                              >
                                <option value="">
                                  Please Choose Product Category
                                </option>
                                {categoryData.map((d) => {
                                  return (
                                    <option value={d.categoryName}>
                                      {d.categoryName}
                                    </option>
                                  );
                                })}
                              </select>
                            </div> */}
                            {/* input field for country name */}
                            <div className="form-group">
                              <label htmlFor="pname" className="fw-bold py-2">
                                Country Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="countryName"
                                placeholder="Enter Country Name"
                                value={countryName}
                                onChange={(e) => setCountryName(e.target.value)}
                              />
                            </div>
                            {/* input field for full name */}
                            <div className="form-group">
                              <label htmlFor="title" className="fw-bold py-2">
                                Title
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Enter Full Name"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                              />
                            </div>
                            {/* input field for  image */}
                            <div className="form-group">
                              <label htmlFor="file" className="fw-bold py-2">
                                Choose Image
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="image"
                                onChange={(e) => setImage(e.target.files[0])}
                              />
                            </div>
                            {/* input field for product desc */}
                            {/* <div className="form-group">
                              <label htmlFor="pdesc" className="fw-bold py-2">
                                Description
                              </label>
                              <textarea
                              className="form-control w-100"
                                name="desc"
                                id="desc"
                                cols="5"
                                rows="3"
                                placeholder="write something for it"
                                value={pdesc}
                                onChange={(e) => setProductdesc(e.target.value)}
                              ></textarea>
                            </div> */}
                            <button
                              type="submit"
                              className="donation_add_btn btn btn-info fw-bold my-4 w-75 text-white text-uppercase d-block me-auto ms-auto"
                              id="submitBtn"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
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
export default AddCertificate;
