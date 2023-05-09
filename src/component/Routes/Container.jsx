import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import DonationHistory from "../Donation/DonationHistory";
import Donation from "../Donation/Donation";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import { parseJwt } from "../Utils/Utils";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import AddCountry from "../Country/AddCountry";
import AdminViewCountry from "../Country/AdminViewCountry";
import AdminUpdateCountry from "../Country/UpdateCountry";
import { ToastContainer } from "react-toastify";
import SingleCountryInfo from "../Country/SingleCountryInfo";
import AddDonationHistory from "../Donation/AddDonationHistory";
import AdminViewDonation from "../Donation/AdminViewDonation";
import AdminUpdateDonation from "../Donation/UpdateDonationHistory";
import AdminViewCertificate from "../Certificates and News/AdminViewCertificate";
import AddCertificate from "../Certificates and News/AddCertificate";
import AdminUpdateCertificate from "../Certificates and News/UpdateCertificate";
import AdminViewNews from "../Certificates and News/AdminViewNews";
import AddNews from "../Certificates and News/AddNews";
import AdminUpdateNews from "../Certificates and News/UpdateNews";
const Container = () => {
  const token = localStorage.getItem("admin_token");
  const decodeUser = parseJwt(token);
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/donation_history" element={<DonationHistory />}></Route>
        <Route path="/donate_now" element={<Donation />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* for admin only */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        <Route path="/add-country" element={<AddCountry />}></Route>
        <Route
          path="/view-admin-country"
          element={<AdminViewCountry />}
        ></Route>
        <Route
          path="/update-country/:id"
          element={<AdminUpdateCountry />}
        ></Route>
        <Route
          path="/single-country/:id"
          element={<SingleCountryInfo />}
        ></Route>

        {/* for donation */}
        <Route
          path="/add-donation-history"
          element={<AddDonationHistory />}
        ></Route>

        <Route
          path="/view-admin-donation"
          element={<AdminViewDonation />}
        ></Route>
        <Route
          path="/update-donation-history/:id"
          element={<AdminUpdateDonation />}
        ></Route>

        {/* for certificate */}
        <Route
          path="/view-admin-certificate"
          element={<AdminViewCertificate />}
        ></Route>
        <Route path="/add-certificate" element={<AddCertificate />}></Route>
        <Route
          path="/update-certificate/:id"
          element={<AdminUpdateCertificate />}
        ></Route>


        {/* for news */}
        <Route
          path="/view-admin-news"
          element={<AdminViewNews />}
        ></Route>
        <Route path="/add-news" element={<AddNews />}></Route>
        <Route
          path="/update-news/:id"
          element={<AdminUpdateNews />}
        ></Route>

        {/* for admin purpose only */}
        {token && decodeUser && (
          <>
            {/* <Route
            path="/admin-dashboard"
            element={<AdminDashboard adminData={decodeUser} />}
          ></Route> */}
            {/* <Route
            path="/add-product-category"
            element={<ProductCategory adminData={decodeUser} />}
          ></Route>

          <Route
            path="/view-product-category"
            element={<ViewProductCategory adminData={decodeUser} />}
          ></Route>

          <Route
            path="/add-product"
            element={<AddProduct adminData={decodeUser} />}
          ></Route>
          <Route
            path="/view-admin-products"
            element={<AdminViewProduct adminData={decodeUser} />}
          ></Route> */}
          </>
        )}
      </Routes>
    </>
  );
};

export default Container;
