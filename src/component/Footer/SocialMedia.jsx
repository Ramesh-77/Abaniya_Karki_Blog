import React from "react";
import "./Footer.css";

export const SocialMedia = () => {
  return (
    <>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a
            href="https://www.youtube.com/@abhinayakarki6312"
            className="me-4 text-reset"
          >
            <i className="fab fa-youtube f-youtube" />
          </a>
          <a
            href="https://www.facebook.com/abhinayakarki500"
            className="me-4 text-reset"
          >
            <i className="fab fa-facebook-f f-facebook" />
          </a>
          <a
            href="https://www.instagram.com/abhinaya_karki/"
            className="me-4 text-reset"
          >
            <i className="fab fa-instagram f-instagram" />
          </a>
          <a
            href="https://twitter.com/abhinayakarki?lang=en"
            className="me-4 text-reset"
          >
            <i className="fab fa-twitter f-twitter" />
          </a>
        </div>
        {/* Right */}
      </section>
    </>
  );
};
