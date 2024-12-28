import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import ToggleJobs from "../components/ToggleJobs";
import ResumeCard from "../components/ResumeCard";
import LoadingScreen from "../components/LoadingScreen";

const ExplorePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 30;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await fetch(
          "https://jobsinsaudi.me/api/jobs/resumes",
          {
            method: "GET",
            headers: { "Accept-Language": "en" },
          }
        );
        const data = await response.json();
        if (Array.isArray(data.data)) {
          setUsers(data.data);
        } else {
          throw new Error("Data is not in the expected format.");
        }
      } catch (error) {
        setError(error.message || "Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const handleHeartClick = (userId) => {
    console.log(`Heart clicked for user ID: ${userId}`);
    // adding to favorites later
  };
  if (loading) return <LoadingScreen />;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      {/* Banner Section */}
      <Banner
        title="Explore Resumes"
        description="Unlock hidden talent and find skilled professionals"
        buttonLabel="+ APPLY FOR A JOB"
        onButtonClick={() => navigate("/login")}
        showButton
      />
     <main>
      <div className="container">
        <ToggleJobs />
        <div className="row mt-4">
          {currentUsers.map((user) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={user.id}>
              <ResumeCard user={user} onHeartClick={handleHeartClick} />
            </div>
          ))}
        </div>
        {/* Pagination */}
        <nav className="mt-4">
          <ul className="pagination justify-content-center flex-wrap flex-sm-nowrap">
            {/* Previous Button */}
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {/* Page Numbers */}
            {Array.from(
              { length: Math.ceil(users.length / usersPerPage) },
              (_, i) => (
                <li
                  key={i + 1}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button className="page-link" onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              )
            )}

            {/* Next Button */}
            <li
              className={`page-item ${
                currentPage === Math.ceil(users.length / usersPerPage)
                  ? "disabled"
                  : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(users.length / usersPerPage)
                }
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      </main>
    </div>
  
  );
};

export default ExplorePage;
