import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";

const SingleCountryInfo = () => {
  const { id } = useParams();
  const [singleCountryData, setSingleCountryData] = useState({});

  //   function parseJwt(token) {
  //     if (!token) {
  //       return;
  //     }
  //     const base64Url = token.split(".")[1];
  //     const base64 = base64Url.replace("-", "+").replace("_", "/");
  //     return JSON.parse(window.atob(base64));
  //   }
  // get user form the token
  //   const token_data = localStorage.getItem("token");
  //   const token = parseJwt(token_data);
  //   const user = token?.user._id;

  useEffect(() => {
    axios
      .get("http://localhost:5000/singlecountry/" + id)
      .then((result) => {
        // console.log(result.data);
        setSingleCountryData(result.data);
      })
      .catch((e) => {
        console.log("Something Went Wrong!!");
      });
  }, []);

  return (
    <>
   <Header />
      <div className="container-fluid">
        <div className="row justify-content-center my-5">
          {/* <div className="col-md-6">
            <div className=" mt-4">
              <img
                style={{ height: "500px", minWidth: "100%" }}
                src={"http://localhost:5000/" + singleproductdata.pic}
                alt=""
                className="img-fluid rounded-4"
              />
            </div>
          </div> */}
          <h1>{singleCountryData.countryName}</h1>
          <div className="col-md-4">
            <div className="card my-4 shadow-lg">
              <div
                className="pname-favourite-icon"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
              </div>

              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleCountryInfo;
