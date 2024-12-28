import PropTypes from "prop-types";
import { FaMale, FaFemale } from "react-icons/fa"; 

const ResumeCard = ({
  user,
  onHeartClick = () => console.log("Default heart click handler") 
}) => {
  return (
    <div
      className="card d-flex flex-row position-relative"
      style={{
        height: "auto",
        width: "auto",
        borderRadius: "55px 0 0 55px",
        overflow: "hidden",
      }}
    >
      <img
        className="rounded-circle m-2"
        src={user.image || "/default-avatar.png"}
        alt={user.name}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
        }}
      />
      <div className="ms-1 d-flex flex-column">
        <h6 className="fs-5">
          {user.name.length > 12 ? `${user.name.slice(0, 11)}...` : user.name}
        </h6>
        <div
          className="fs-6 text-secondary"
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "120px",
          }}
        >
          {user.job?.name} <br />
          {user.years || "N/A"} years old
        </div>
        <p>{user.nationality || "N/A"}</p>
      </div>

      <i
        className="bi bi-heart position-absolute top-0 end-0 m-1"
        style={{ cursor: "pointer" }}
        onClick={() => onHeartClick(user.id)} 
      ></i>

      <div className="position-absolute bottom-0 end-0 m-1">
        {user.gender === "male" ? (
          <FaMale className="text-primary" size={20} />
        ) : (
          <FaFemale className="text-danger" size={20} />
        )}
      </div>
    </div>
  );
};

ResumeCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    nationality: PropTypes.string,
    years: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gender: PropTypes.string,
    job: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  onHeartClick: PropTypes.func, 
};

export default ResumeCard;
