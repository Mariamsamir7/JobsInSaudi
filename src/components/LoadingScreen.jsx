const LoadingScreen = () => {
  return (
    <div
      className=" position-fixed top-0 left-0 w-100 h-100 bg-light d-flex align-items-center justify-content-center "
      style={{left: 0,zIndex: 1000}}
    >
      <div className="text-center position-relative">
        <img
          src="https://jobsinsaudi.me/storage/images/Setting/H3OIcu7C561719990499.webp.svg"
          alt="Loading..."
          style={{ objectFit: "contain", width: "153px", height: "153px" }}
        />

        <div
          className="spinner-grow  position-absolute top-0 start-0 mt-4 "
          style={{color:"#009640", marginLeft:"0.4rem"}}
          role="status"
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
