import React from "react";
import Header from "../Header/Header";
import cyclist from "../../Images/cyclist.jpg";
import "./Home.css";

const Home = () => {
  let profile =
    "I'm a permanent resident of Kalinchok Rural Municipality -3,Dolakha is a passionate and campaigner cyclist with the theme of Motivation from the Situation has taken the initiative to promote tourism in Nepal through Cycling.";
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="my-3 mx-5  ">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={cyclist}
                  alt=""
                  className="img-fluid"
                  style={{ borderRadius: "2rem" }}
                />
              </div>
              <div className="col-md-6 bg-info">
                <h1>Hello Namaste!</h1>
                <h2>I'm Abhinaya Karki.</h2>
                <div className="words">
                  <h3>Welcome to Nepal</h3>
                  <h3>"Land of Everest"</h3>
                </div>
                {/* <h3>Welcome to
                  Nepal, "Land of Everest"</h3> */}
                <h5>{profile.slice(0, 190)} ..........</h5>
                <div className="d-flex justify-content-right">
                  <button
                    type="button"
                    className="view_btn btn btn-primary"
                    style={{ marginLeft: "auto", marginRight: "10rem" }}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
