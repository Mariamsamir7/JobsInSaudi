import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import "../styles/Aboutus.css";
const AboutUsPage = () => {
  return (
    <main>
      {/* Banner Section */}
      <Banner
        title="Discover Our Story"
        description="Unveil the narratives behind exceptional talent and expertise"
        showButton={false}
      />
      {/* About Us  */}
      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-start ">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
            <span className="fs-3 text-success">find your dream job</span>
            <h3 className="fs-1 py-2 fw-semibold">Easily get job offers</h3>
            <p className="text-secondary fs-5 mt-3">
              Introducing Jobs In Saudi- the game-changing app for job seekers
              in Saudi Arabia. Find your dream job with ease, stay updated with
              the latest listings, and kickstart your career journey like never
              before. Join us today and unlock endless possibilities.
            </p>
            <Link to="/explore" className="btn btn-success fs-5 mt-2">
              Explore Resumes
            </Link>
          </div>
          <div className="col-lg-6 d-none d-md-block mx-5">
            <img
              src="https://jobsinsaudi.me/website/assets/images/banner-online-marketing.png"
              className="img-about w-75 h-75"
              alt="Animated"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
