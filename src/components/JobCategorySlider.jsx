import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JobCategorySlider = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jobsinsaudi.me/api/jobs/categories-limit", {
          headers: {
            "Accept-Language": "en",
          },
        });
        const result = await response.json();
        if (response.ok && result.data) {
          setJobs(result.data);
        } else {
          throw new Error(result.message || "Failed to fetch data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h5>Job By Category</h5>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p> 
      ) : jobs.length > 0 ? (
        <Slider {...settings}>
          {jobs.map((job) => (
            <div key={job.id} className="px-2">
              <div
                className="card w-100 bg-light text-white flex flex-column justify-content-end align-items-start"
                style={{
                  backgroundImage: `url(${job.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "250px",
                  padding: "10px",
                }}
              >
                <h6 className="card-title fs-5 w-100">{job.name}</h6>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center">No jobs available</p>
      )}
    </div>
  );
};

export default JobCategorySlider;
