import PropTypes from "prop-types";

const Banner = ({
  title,
  description,
  buttonLabel = "Default Button",
  onButtonClick = () => {},
  showButton = false,
}) => {
  return (
    <section className="banner_section container-fluid ">
      <div className="container content p-4 d-flex justify-content-between align-items-center flex-wrap flex-sm-nowrap">
        <div>
          <h1>{title}</h1>
          <p className="text-secondary fs-5">{description}</p>
        </div>
        {showButton && (
          <button className="btn btn-success fs-4 p-2" onClick={onButtonClick}>
            {buttonLabel}
          </button>
        )}
      </div>
    </section>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
  showButton: PropTypes.bool,
};

export default Banner;
