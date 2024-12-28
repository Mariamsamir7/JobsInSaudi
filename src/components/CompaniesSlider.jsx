import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingScreen from "../components/LoadingScreen";  

const CompaniesSlider = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jobsinsaudi.me/api/jobs/companies"
        );
        const result = await response.json();
        if (response.ok && result.data) {
          setCompanies(result.data);
        } else {
          console.error("Error fetching data:", result.message);
        }
      } catch (error) {
        console.error("Error fetching API:", error);
      } finally {
        setLoading(false);  
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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

  if (loading) {
    return <LoadingScreen />;  
  }

  return (
    <div className="container mt-5">
      <h5>Recruitment Companies</h5>
      {companies.length > 0 ? (
        <Slider {...settings}>
          {companies.map((company) => (
            <div key={company.id} className="mt-4 px-2">
              <div className="card col-md-3 w-100 bg-light flex align-items-center justify-content-center py-4">
                <img
                  src={company.logo}
                  className="card-img w-50 h-50"
                  alt={company.name}
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title">
                    {company.company?.company_name_en ||
                      "Company Name Not Available"}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center">No companies found.</p>
      )}
    </div>
  );
};

export default CompaniesSlider;
