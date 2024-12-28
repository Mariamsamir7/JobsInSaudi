import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResumeCard from "../components/ResumeCard";
import LoadingScreen from "../components/LoadingScreen";

const ResumesSection = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jobsinsaudi.me/api/jobs/resumes", {
      method: "GET",
      headers: {
        "Accept-Language": "en",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setUsers(data.data);
        } else {
          setError("Error: Data is not in the expected format.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data.");
        setLoading(false);
      });
  }, []);

  const handleViewMore = () => {
    navigate("/explore");
  };

  const handleHeartClick = () => {
    if (!isLoggedIn) {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000);
    }
  };

  if (loading) {
    return <LoadingScreen />; 
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {users.slice(0, 12).map((user) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={user.id}>
            <ResumeCard user={user} onHeartClick={handleHeartClick} />
          </div>
        ))}
      </div>

      <div className="text-center mt-2">
        <button
          className="btn btn-success rounded-pill fs-5 px-4 py-2"
          onClick={handleViewMore}
        >
          View More
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal d-block bg-light p-2 bg-opacity-10">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center py-3 fs-3">
              <i className="bi bi-exclamation-circle text-danger"></i>
              <h5 className="modal-title text-center">Login Required</h5>
              <div className="modal-body">
                <p>Please log in first.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumesSection;
