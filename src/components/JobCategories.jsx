import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ToggleJobs from "./ToggleJobs";
import "../styles/JobCategories.css";
import ResumesSection from "./ResumesSection";

const Category = ({ img, name, className, onClick }) => (
  <div
    className={`category d-flex align-items-center m-2 rounded-4 ${className}`}
    onClick={onClick}
  >
    <div className="category-img d-flex align-items-center justify-content-center">
      {img ? (
        <img className="rounded-circle w-75 h-75" src={img} alt={name} />
      ) : (
        <span>No Image</span>
      )}
    </div>
    <p className="category-title mt-3 fw-semibold">{name}</p>
  </div>
);

Category.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

// ResumeCard Component
const ResumeCard = ({ image, name }) => (
  <div className="card mb-3 mx-2 mt-4 border-light rounded-4">
    <div className="card-body text-center bg-light rounded-4">
      <img src={image} alt={name} className="Resume-Card-img rounded-4 mb-3" />
      <h6 className="Resume-Card-title card-title">{name}</h6>
    </div>
  </div>
);

ResumeCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
};

// FavoriteCard Component
const FavoriteCard = ({ img, name, nationality }) => (
  <div className="card mb-3">
    <div className="card-body text-center">
      <img src={img} alt={name} className="rounded-circle mb-3 w-75 h-75" />
      <h6 className="card-title">{name}</h6>
      <p>{nationality}</p>
    </div>
  </div>
);

FavoriteCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
};

// Jobs Component
const Jobs = () => {
  const [categories, setCategories] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Jobs");
  const categoryCardRef = useRef(null);
  const resumeCardRef = useRef(null);
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://jobsinsaudi.me/api/jobs/categories",
        {
          headers: {
            "Accept-Language": "en",
          },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch categories");

      const result = await response.json();
      if (Array.isArray(result.data)) {
        setCategories(result.data);
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError("Failed to load job categories");
    }
  };

  const fetchResumes = useCallback(async () => {
    const endpoint =
      selectedCategory === "All Jobs"
        ? "https://jobsinsaudi.me/api/jobs/jobs"
        : `https://jobsinsaudi.me/api/jobs/jobs?category_id=${selectedCategory}`;

    try {
      setLoading(true);
      const response = await fetch(endpoint, {
        headers: {
          "Accept-Language": "en",
        },
      });
      if (!response.ok) throw new Error("Failed to fetch resumes");

      const result = await response.json();
      if (Array.isArray(result.data)) {
        setResumes(result.data);
      } else {
        throw new Error("Unexpected API response structure");
      }
    } catch (error) {
      console.error("Error fetching resumes:", error);
      setError("Failed to load resumes");
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchResumes();
  }, [fetchResumes]);
  /////
  //  scrolling functionality
  const enableDragScroll = (ref) => {
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const mouseDownHandler = (e) => {
      isDragging = true;
      ref.current.classList.add("active");
      startX = e.pageX - ref.current.offsetLeft;
      scrollLeft = ref.current.scrollLeft;
    };

    const mouseMoveHandler = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - ref.current.offsetLeft;
      const walk = (x - startX) * 2; 
      ref.current.scrollLeft = scrollLeft - walk;
    };

    const mouseUpHandler = () => {
      isDragging = false;
      ref.current.classList.remove("active");
    };

    ref.current.addEventListener("mousedown", mouseDownHandler);
    ref.current.addEventListener("mousemove", mouseMoveHandler);
    ref.current.addEventListener("mouseup", mouseUpHandler);
    ref.current.addEventListener("mouseleave", mouseUpHandler);
    return () => {
      ref.current.removeEventListener("mousedown", mouseDownHandler);
      ref.current.removeEventListener("mousemove", mouseMoveHandler);
      ref.current.removeEventListener("mouseup", mouseUpHandler);
      ref.current.removeEventListener("mouseleave", mouseUpHandler);
    };
  };

  useEffect(() => {
    if (categoryCardRef.current) enableDragScroll(categoryCardRef);
    if (resumeCardRef.current) enableDragScroll(resumeCardRef);
  }, []);
  //////
  return (
    <main>
    <div className="container">
      <div className="row mt-3">
        <div className="col-lg-9 col-md-12 col-sm-12">
          <div className="mb-3 w-100 text-end">
            <Link to="/login">
              <button className="resume-btn btn btn-success fs-5">
                + Apply Your Resume Now
              </button>
            </Link>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="alert alert-danger">{error}</div>
          ) : (
            <div
              className="category-card d-flex align-items-center justify-content-start bg-light rounded-4 overflow-x-auto" ref={categoryCardRef}>
              <Category
                img="https://jobsinsaudi.me/website/assets/images/all.svg"
                name="All Jobs"
                className={
                  selectedCategory === "All Jobs"
                    ? "bg-success bg-opacity-25"
                    : ""
                }
                onClick={() => setSelectedCategory("All Jobs")}
              />
              {categories.map((category) => (
                <Category
                  key={category.id}
                  img={category.image || "placeholder.png"}
                  name={category.name || "Unknown Category"}
                  className={
                    selectedCategory === category.id
                      ? "bg-success bg-opacity-25"
                      : ""
                  }
                  onClick={() => setSelectedCategory(category.id)}
                />
              ))}
            </div>
          )}

          {/* Resume Cards */}
          <div
            className="Resume-Card d-flex align-items-center justify-content-start overflow-x-auto"
            ref={resumeCardRef}
          >
            {resumes.map((resume, index) => (
              <ResumeCard key={index} {...resume} />
            ))}
          </div>

          {/* Filter Dropdowns */}
          <ToggleJobs />
          <ResumesSection />
        </div>

        <div className="Favorites-Resumes col-lg-3 col-md-12  rounded-4 bg-success bg-opacity-10">
          <h5 className="  mt-4 fw-bold">Favorites Resumes</h5>
          {/* Ex Favorite Data */}
          {/* <FavoriteCard img="profile4.jpg" name="Eng Adnan Ahmad" nationality="Pakistani" /> */}
        </div>
      </div>{" "}
    </div>
    </main>
  );
};

export default Jobs;
