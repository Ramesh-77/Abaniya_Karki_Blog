import React from "react";
import Header from "../Header/Header";
import qr_code from "../../Images/QR_code.jpg";
import gofundme from "../../Images/gofundme.png";
import "./Donation.css"

const Donation = () => {
  return (
    <div>
      <Header />
      <div className="container my-2">
        <div className="row">
          <h2
            className="text-center fw-bold text-danger py-3 text-uppercase"
            style={{ letterSpacing: "2px" }}
          >
            Donation
          </h2>

          <div className="col-md-6">
            <div className="card" style={{ marginTop: "7rem" }}>
              <div className="card-body">
                <p className="text-center fs-4">
                  You can also donate me through{" "}
                  <a href="https://www.gofundme.com/">GOFUNDME</a> site
                </p>
                <a href="https://www.gofundme.com/">
                  <img
                    src={gofundme}
                    alt=""
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="row">
                <div className="thank_you col-md-10">
                    <h3 className="text-center py-5">Thank You For Supporting Us.</h3>
                </div>
              </div>
          </div>
          <div className="col-md-5">
            <div className="card" style={{ border: "1px solid green" }}>
              <div className="card-body">
                <div className="justify-content-center">
                  <p className="text-center fs-4">
                    If you want to help this site to grow more, <br />
                    Donate through the below given{" "}
                    <span className="fw-bold">QR Code</span>{" "}
                  </p>
                  <img
                    src={qr_code}
                    alt=""
                    className="img-fluid w-75"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      //   width: "60%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
