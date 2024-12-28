import { Link } from "react-router-dom";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="border-top py-4 mt-5">
      <div className="container p-2 ">
        <div className="row gy-4">
          {/* Logo and About Section */}
          <div className="col-lg-4 col-12">
            <div className="about_company">
              <div className="logo mb-3">
                <Link to="/">
                  <img
                    loading="lazy"
                    src="https://jobsinsaudi.me/storage/images/Setting/H3OIcu7C561719990499.webp.svg"
                    alt="logo"
                    className="img-fluid"
                    style={{ maxWidth: "150px" }}
                  />
                </Link>
              </div>
              <p className="text-secondary fs-5">
                Jobsin Saudi is the heart of the design community and the best
                resource to discover and connect with designers and jobs
                worldwide.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="mb-3">Company</h4>
            <ul className="list-unstyled fs-5">
              <li>
                <a href="#" className="text-decoration-none footer-links">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none footer-links">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none footer-links">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none footer-links">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none footer-links">
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="mb-3">Popular Categories</h4>
            <ul className="list-unstyled fs-5">
              <li>
                <a href="#" className="text-decoration-none footer-links">
                  Technical and Design
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none footer-links">
                  Administrative
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none footer-links">
                  Engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none footer-links">
                  Medical and Nursing
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none footer-links">
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="col-lg-2 col-12">
            <h4 className="mb-3">Download App</h4>
            <ul className="list-unstyled fs-5">
              <li className="Download-App-icon d-flex align-items-center mb-2 justify-content-center rounded-4 p-2 ">
                <i className="bi bi-apple"></i>
                <a
                  href="https://www.apple.com/eg/app-store/"
                  className="text-decoration-none Download-App-text mx-2"
                >
                  App Store
                </a>
              </li>
              <li className="Download-App-icon d-flex align-items-center mb-2 justify-content-center rounded-4 p-2">
                <i className="bi bi-google-play"></i>
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.jobsinsaudi"
                  className="text-decoration-none Download-App-text mx-2"
                >
                  Google Play
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="mt-4 border-top">
          <div className="d-flex justify-content-between align-items-center mt-4">
            {/* Paragraph */}
            <p className="fs-5 mb-0">
              Copyright &copy; {new Date().getFullYear()}. All Rights Reserved
              to
              <Link to="/" className="text-success text-decoration-none">
                {" "}
                Jobs in Saudi
              </Link>
              .
            </p>

            {/* Social Media List */}
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-3 ">
                <a
                  href="https://www.facebook.com/share/WQSTh3K1ifL5JHTp/?mibextid=LQQJ4d"
                  className="text-secondary"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a
                  href="https://www.instagram.com/jobsin.saudi"
                  className="text-secondary"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a
                  href="https://www.linkedin.com/in/jobsinsaudi"
                  className="text-secondary"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://x.com/jobsin_saudi" className="text-secondary">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
