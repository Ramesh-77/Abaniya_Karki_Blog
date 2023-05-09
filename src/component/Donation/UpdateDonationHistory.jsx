import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AdminHeader from "../AdminDashboard/AdminHeader";
import { AdminSidebar } from "../AdminDashboard/AdminSidebar";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// use reducer

const AdminUpdateDonation = () => {
  const { id } = useParams();
  const [sn, setSN] = useState("");
  const [countryName, setCountryName] = useState("");
  const [fullname, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [contact, setContact] = useState("");
  const [season, setSeason] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");

  const [data, setDonationData] = useState([]);

  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: false });

  useEffect(() => {
    axios
      .get("http://localhost:5000/singledonation/" + id)
      .then((result) => {
        setDonationData(result.data);
        setSN(result.data.sn);
        setCountryName(result.data.countryName);
        setFullName(result.data.fullname);
        setAddress(result.data.address);
        setOccupation(result.data.occupation);
        setContact(result.data.contact);
        setSeason(result.data.season);
        setAmount(result.data.amount);
        setImage(result.data.image);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitDonationHistoryForm = (e) => {
    e.preventDefault();
    const donationHistoryData = new FormData();
    donationHistoryData.append("id", id);
    donationHistoryData.append("sn", sn);
    donationHistoryData.append("countryName", countryName);
    donationHistoryData.append("fullname", fullname);
    donationHistoryData.append("address", address);
    donationHistoryData.append("occupation", occupation);
    donationHistoryData.append("contact", contact);
    donationHistoryData.append("season", season);
    donationHistoryData.append("amount", amount);
    donationHistoryData.append("image", image);

    axios
      .put(
        `http://localhost:5000/edit-donation-history/${id}`,
        donationHistoryData
      )
      .then((result) => {
        console.log(result.data);
        // window.location = "/view-admin-products";
        toast.success(<UpdateToast />, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
        });
        setSN("");
        setCountryName("");
        setFullName("");
        setAddress("");
        setOccupation("");
        setContact("");
        setSeason("");
        setAmount("");
        setImage("");
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
            <div className="farm_product_heading container-fluid">
              <div className="row">
                <div className="col-md-12 mt-2 mb-3">
                  <h1>Update Country</h1>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          {/* customer form */}
                          <form
                            method="POST"
                            onSubmit={handleSubmit(onSubmitDonationHistoryForm)}
                            encType="multipart/form-data"
                          >
                            <div className="form-group">
                              <label htmlFor="sn" className="fw-bold py-2">
                                Serial Number
                              </label>
                              <input
                                type="phone"
                                className="form-control"
                                id="sn"
                                placeholder="Enter Serial Number"
                                value={sn}
                                onChange={(e) => setSN(e.target.value)}
                              />
                            </div>
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
                              <label
                                htmlFor="fullname"
                                className="fw-bold py-2"
                              >
                                Country Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="fullname"
                                placeholder="Enter Full Name"
                                value={fullname}
                                onChange={(e) => setFullName(e.target.value)}
                              />
                            </div>
                            {/* input field for address */}
                            <div className="form-group">
                              <label htmlFor="address" className="fw-bold py-2">
                                Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder="Enter Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </div>

                            {/* input field for occupation */}
                            <div className="form-group">
                              <label
                                htmlFor="occupation"
                                className="fw-bold py-2"
                              >
                                Occupation
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="occupation"
                                placeholder="Enter occupation"
                                value={occupation}
                                onChange={(e) => setOccupation(e.target.value)}
                              />
                            </div>

                            {/* input field for contact */}
                            <div className="form-group">
                              <label htmlFor="contact" className="fw-bold py-2">
                                Contact Number
                              </label>
                              <input
                                type="phone"
                                className="form-control"
                                id="contact"
                                placeholder="Enter cell number"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                              />
                            </div>

                            {/* input field for season */}
                            <div className="form-group">
                              <label htmlFor="season" className="fw-bold py-2">
                                Season
                              </label>
                              <input
                                type="phone"
                                className="form-control"
                                id="season"
                                placeholder="Enter Season number"
                                value={season}
                                onChange={(e) => setSeason(e.target.value)}
                              />
                            </div>
                            {/* input field for amount */}
                            <div className="form-group">
                              <label htmlFor="amount" className="fw-bold py-2">
                                Amount
                              </label>
                              <input
                                type="phone"
                                className="form-control"
                                id="amount"
                                placeholder="Enter Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
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
                              className="country_add_btn btn btn-info fw-bold my-4 w-75 text-white text-uppercase d-block me-auto ms-auto"
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
export default AdminUpdateDonation;
const UpdateToast = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center bg-gradient">
            <p className="text-dark">
              You have successfully updated donation history!!! Click "OK" to
              continue..
            </p>
            <Link
              to="/view-admin-donation"
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
