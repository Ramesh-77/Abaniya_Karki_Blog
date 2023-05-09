import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AdminHeader from "../AdminDashboard/AdminHeader";
import { AdminSidebar } from "../AdminDashboard/AdminSidebar";

// use reducer

const AdminUpdateNews = () => {
  const { id } = useParams();
  const [newslink, setNewsLink] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const [ndata, setNewsData] = useState([]);

  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: false });

  useEffect(() => {
    axios
      .get("http://localhost:5000/singlenews/" + id)
      .then((result) => {
        setNewsData(result.data);
        setNewsLink(result.data.newslink);
        setTitle(result.data.title);
        setImage(result.data.image);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitNewsForm = (data, e) => {
    e.preventDefault();
    const newsData = new FormData();
    newsData.append("id", id);
    newsData.append("newslink", newslink);
    newsData.append("title", title);
    newsData.append("image", image);

    axios
      .put(`http://localhost:5000/edit-news/${id}`, newsData)
      .then((result) => {
        toast.success(<UpdateToast />, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
        });
        setNewsLink("");
        setTitle("");
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
                  <h1>Update News</h1>
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
                            onSubmit={handleSubmit(onSubmitNewsForm)}
                            encType="multipart/form-data"
                          >
                            {/* input field for country name */}
                            <div className="form-group">
                              <label
                                htmlFor="newslink"
                                className="fw-bold py-2"
                              >
                                News Link
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="newslink"
                                placeholder="Enter News Link"
                                value={newslink}
                                onChange={(e) => setNewsLink(e.target.value)}
                              />
                            </div>
                            {/* input field for title*/}
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
export default AdminUpdateNews;
const UpdateToast = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center bg-gradient">
            <p className="text-dark">
              You have successfully updated news!!! Click "OK" to continue..
            </p>
            <Link
              to="/view-admin-news"
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
