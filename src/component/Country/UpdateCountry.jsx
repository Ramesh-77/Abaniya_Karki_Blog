import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import AdminHeader from "../AdminDashboard/AdminHeader";
import { AdminSidebar } from "../AdminDashboard/AdminSidebar";
import { WarnToast } from "../Utils/WarnToast";

const AdminUpdateCountry = () => {
  // for holding the particular category id
  const { id } = useParams();
  const [countryName, setCountryName] = useState("");

  //   holding data

  const [cdata, setCountryData] = useState([]);
  // token for admin
  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: false });

  useEffect(() => {
    axios
      .get("http://localhost:5000/singlecountry/" + id)
      .then((result) => {
        setCountryData(result.data);
        setCountryName(result.data.countryName);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitCountryUpdateForm = (data, e) => {
    e.preventDefault();
    const countryUpdataForm = {
      id: id,
      countryName: countryName,
    };
    // const productUpdateForm = new FormData();
    // productUpdateForm.append("pid", pid);
    // productUpdateForm.append("pname", pname);
    // productUpdateForm.append("pdesc", pdesc);
    // productUpdateForm.append("pprice", pprice);
    // productUpdateForm.append("pqty", pqty);
    // productUpdateForm.append("image", pic);

    axios
      .put(`http://localhost:5000/edit-country/${id}`, countryUpdataForm)

      .then((result) => {
        console.log(result.data);

        // window.location = "/view-admin-products";
        toast.success(<UpdateToast />, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
        });
        setCountryName("");
      })
      .catch((e) => {
        toast.warn(<WarnToast />, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: true,
        });
      });
  };

  //   // calculating total products number in cart
  //   const calculation = () => {
  //     setProductQtyCart(
  //       cart.map((x) => x.productQuantity).reduce((x, y) => x + y, 0)
  //     );
  //   };
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
                            onSubmit={handleSubmit(onSubmitCountryUpdateForm)}
                            encType="multipart/form-data"
                          >
                            {/* input field for product name */}
                            <div className="form-group fw-bold my-2">
                              <label htmlFor="pname" className="py-2">
                                Country Name
                              </label>
                              <input
                                type="text"
                                className={`form-control ${errors.setPname &&
                                  "invalid"}`}
                                placeholder="Enter product name"
                                autoComplete="nope"
                                // firstname : validation
                                {...register("setCountryname", {
                                  required: "Country name is required",
                                  minLength: {
                                    value: 1,
                                    message: "Country name is too short",
                                  },
                                  maxLength: {
                                    value: 50,
                                    message: "Country name is too long",
                                  },
                                })}
                                // changing data on typing and set data to product name variable and send to database
                                value={countryName}
                                onChange={(e) => setCountryName(e.target.value)}
                              />
                              {/* for displaying error message on validating */}
                              {errors.setCountryName && (
                                <small className="text-danger">
                                  {errors.setCountryName.message}
                                </small>
                              )}
                            </div>
                            {/* input field for product pic */}
                            {/* <div className="form-group fw-bold my-2">
                              <label htmlFor="file" className="py-2">
                                Choose Product pic
                              </label>
                              <input
                                type="file"
                                name="image"
                                className="form-control"
                                {...register("setPic", {
                                  required: "Choose product pic",
                                })}
                                onChange={(e) => setPic(e.target.files[0])}
                              />
                              {errors.setpic && (
                                <small className="text-danger">
                                  {errors.setPic.message}
                                </small>
                              )}
                            </div> */}
                            {/* input field for product qty */}
                            {/* <div className="form-group fw-bold my-2">
                              <label htmlFor="pqty" className="py-2">
                                pqty
                              </label>
                              <input
                                type="phone"
                                className={`form-control ${
                                  errors.setPqty && "invalid"
                                }`}
                                placeholder="Enter qty number"
                                {...register("setPqty", {
                                  required: "qty is required",
                                  min: {
                                    value: 1,
                                    message:
                                      "Product qty should not be less than 1",
                                  },
                                  pattern: {
                                    value: /^[0-9\b]+$/,
                                    message: "Enter digits only",
                                  },
                                })}
                                value={pqty}
                                onChange={(e) => setPqty(e.target.value)}
                              />
                              {errors.setpqty && (
                                <small className="text-danger">
                                  {errors.setPqty.message}
                                </small>
                              )}
                            </div> */}

                            {/* input field for product price*/}
                            {/* <div className="form-group fw-bold my-2">
                              <label htmlFor="pprice" className="py-2">
                                Product Price
                              </label>
                              <input
                                type="phone"
                                className={`form-control ${
                                  errors.setPprice && "invalid"
                                }`}
                                placeholder="Enter product price"
                                {...register("setPprice", {
                                  required: "product price is required",
                                  pattern: {
                                    value: /^[0-9\b]+$/,
                                    message: "Enter digits only",
                                  },
                                })}
                                value={pprice}
                                onChange={(e) => setPprice(e.target.value)}
                              />
                              {errors.setpprice && (
                                <small className="text-danger">
                                  {errors.setPprice.message}
                                </small>
                              )}
                            </div> */}
                            {/* input field for product desc */}
                            {/* <div className="form-group fw-bold my-2">
                              <label htmlFor="pdesc" className="py-2">
                                Description
                              </label>
                              <textarea
                                type="text"
                                className={`form-control ${
                                  errors.setPdesc && "invalid"
                                }`}
                                id="exampleFormControlTextarea1"
                                rows="2"
                                placeholder="write something for it"
                                {...register("setPdesc", {
                                  required: "description is required", // JS only: <p>error message</p> TS only support string
                                })}
                                value={pdesc}
                                onChange={(e) => setPdesc(e.target.value)}
                              ></textarea>
                              {errors.setpdesc && (
                                <small className="text-danger">
                                  {errors.setPdesc.message}
                                </small>
                              )}
                            </div> */}
                            <button
                              type="submit"
                              className="country_add_btn btn btn-info mt-2 w-100 fw-bold text-white"
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
export default AdminUpdateCountry;
const UpdateToast = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center bg-gradient">
            <p className="text-dark">
              You have successfully updated country !!! Click "OK" to continue..
            </p>
            <Link
              to="/view-admin-country"
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
