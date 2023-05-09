import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AdminSidebar } from "../AdminDashboard/AdminSidebar";
import AdminHeader from "../AdminDashboard/AdminHeader";
import { toast } from "react-toastify";

const SuccessMsg = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center bg-gradient">
            <p className="text-dark">
              You have successfully added new country!!! Click "OK" to
              continue..
            </p>
            <Link
              to="/view-countries"
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

const AddCountry = () => {
  //   const [categoryData, setCategoryData] = useState([]);
  //   const [pname, setProductname] = useState("");
  //   const [pdesc, setProductdesc] = useState("");
  //   const [pprice, setProductprice] = useState("");
  //   const [pqty, setQuantity] = useState("");
  //   const [categoryName, setCategoryName] = useState("");
  //   const [image, setImage] = useState("");
  const [countryName, setCountryName] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:5000/all-product-category")
  //       .then((result) => {
  //         setCategoryData(result.data);
  //       })
  //       .catch((e) => {
  //         console.log("Something Went Wrong!!");
  //       });
  //   }, []);

  // useEffect(() => {
  //    axios.get("http://localhost:5000/get-country").then((result)=>{
  //     console.log(result.data)
  //   })
  // }, [])

  const onSubmitAddProductData = (e) => {
    const cData = {
      countryName: countryName,
    };
    e.preventDefault();
    // const productData = new FormData();
    // productData.append("pname", pname);
    // productData.append("pdesc", pdesc);
    // productData.append("pprice", pprice);
    // productData.append("pqty", pqty);
    // productData.append("categoryName", categoryName);
    // productData.append("image", image);
    // productData.append("userId", adminData._id);
    // productData.append("name", adminData.name);
    // productData.append("phone", adminData.phone);
    // productData.append("email", adminData.email);

    axios
      .post("http://localhost:5000/post-country", cData)
      .then((result) => {
        console.log(result.data.countryName);
        if (result) {
          window.location.href = "/view-admin-country";
          toast.success(<SuccessMsg />, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: false,
          });
          setCountryName("");
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
                  <h1 className="py-3">Enter Country Details</h1>
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
                            onSubmit={onSubmitAddProductData}
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
                            {/* input field for product name */}
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
                            {/* input field for product image */}
                            {/* <div className="form-group">
                              <label htmlFor="file" className="fw-bold py-2">
                                Choose Product Image
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="image"
                                onChange={(e) => setImage(e.target.files[0])}
                              />
                            </div> */}
                            {/* input field for product qty */}
                            {/* <div className="form-group">
                              <label htmlFor="pqty" className="fw-bold py-2">
                                Quantity
                              </label>
                              <input
                                type="phone"
                                className="form-control"
                                id="pqty"
                                placeholder="Enter qty"
                                value={pqty}
                                onChange={(e) => setQuantity(e.target.value)}
                              />
                            </div> */}

                            {/* input field for product price*/}
                            {/* <div className="form-group">
                              <label htmlFor="pprice" className="fw-bold py-2">
                                Product Price
                              </label>
                              <input
                                type="phone"
                                className="form-control"
                                id="pprice"
                                placeholder="Enter product price"
                                value={pprice}
                                onChange={(e) =>
                                  setProductprice(e.target.value)
                                }
                              />
                            </div> */}
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
export default AddCountry;
