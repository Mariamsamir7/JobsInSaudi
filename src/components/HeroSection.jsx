import "../styles/HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="container w-100 ">
      <div className="hero-container mt-4 m-auto ">
      <Link to="/Login" className="hero-link h-100  position-relative text-decoration-none"
        >
          <img
            src="https://jobsinsaudi.me/website/assets/images/Group.jpg"
            alt="Apply for a Job"
            className="hero-image w-100 h-100 rounded-4"
          />
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white fs-3 fw-bold text-uppercase">
            APPLY FOR A JOB
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
