import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Banner from "../components/Banner";
import LoadingScreen from "../components/LoadingScreen";

const LoginPage = () => {
  const [phoneCodes, setPhoneCodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    phoneCode: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhoneCodes = async () => {
      try {
        const response = await fetch(
          "https://jobsinsaudi.me/api/jobs/latest-resumes",
          {
            headers: { "Accept-Language": "en" },
          }
        );
        const data = await response.json();
        if (data?.data?.length) {
          const filteredCodes = data.data
            .map((item) => item.user.phone_code)
            .filter((code) => code && code.startsWith("+"));
          setPhoneCodes([...new Set(filteredCodes)]);
        }
      } catch (error) {
        console.error("Error fetching phone codes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhoneCodes();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.phone && !formData.email) {
      newErrors.general = "You must fill either Phone Number or Email.";
    }

    if (formData.phone) {
      if (!formData.phoneCode || formData.phone.length < 10) {
        newErrors.phone =
          "Please enter a valid phone number with country code.";
      }
    }

    if (
      formData.email &&
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const userInput = formData.phone || formData.email;
      navigate("/verification", { state: { phoneOrEmail: userInput } });
    }
  };

  return (
    <main>
      {/* Banner Section */}
      <Banner
        title="Sign In"
        description="Unlock exclusive access to your account"
        showButton={false}
      />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <section className="auth_section">
          <div className="container">
            <div className="row m-0 justify-content-center">
              <div className="col-lg-7 col-12 p-2">
                <div className="auth_form">
                  <div className="title">
                    <h1>Welcome Back</h1>
                    <p className="text-secondary fs-5">
                      Please enter your mobile number or email to complete the
                      login process.
                    </p>
                  </div>
                  {/* Login Form */}
                  <form id="phoneFormRegister" onSubmit={handleSubmit}>
                    {errors.general && (
                      <p className="text-danger">{errors.general}</p>
                    )}

                    <ul
                      className="nav nav-pills mb-3 border-bottom"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link nav-link-auth fw-semibold fs-5 bg-transparent active rounded-0"
                          id="pills-phone-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-phone"
                          type="button"
                          role="tab"
                          aria-controls="pills-phone"
                          aria-selected="true"
                        >
                          Phone Number
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link nav-link-auth fw-semibold fs-5 bg-transparent rounded-0"
                          id="pills-email-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-email"
                          type="button"
                          role="tab"
                          aria-controls="pills-email"
                          aria-selected="false"
                        >
                          Email Address
                        </button>
                      </li>
                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-phone"
                        role="tabpanel"
                        aria-labelledby="pills-phone-tab"
                      >
                        <div className="d-flex gap-2">
                          <div className="input_field">
                            <label htmlFor="country">Country</label>
                            <select
                              name="phoneCode"
                              id="country"
                              className="form-select py-3 rounded-4"
                              onChange={handleInputChange}
                              disabled={isLoading}
                            >
                              <option value="" hidden>
                                +
                              </option>
                              {phoneCodes.map((code, index) => (
                                <option key={index} value={code}>
                                  {code}
                                </option>
                              ))}
                            </select>
                            {errors.phone && (
                              <p className="text-danger">{errors.phone}</p>
                            )}
                          </div>
                          <div className="input_field w-100">
                            <label htmlFor="phone"></label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              className="form-control py-3 rounded-4"
                              placeholder="Phone Number"
                              onChange={handleInputChange}
                              pattern="[0-9]*"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-email"
                        role="tabpanel"
                        aria-labelledby="pills-email-tab"
                      >
                        <div className="input_field">
                          <label htmlFor="email"></label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control py-3 rounded-4"
                            placeholder="Email Address"
                            onChange={handleInputChange}
                          />
                          {errors.email && (
                            <p className="text-danger">{errors.email}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-danger fw-semibold">
                      NOTE: The employment agreement must be through the
                      approved official offices and agencies.
                    </p>

                    <p className="continue text-secondary fs-5 fw-semibold">
                      By continuing, you agree to the{" "}
                      <a
                        href="https://jobsinsaudi.me/en/terms"
                        className="text-decoration-none text-success"
                      >
                        terms of use
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://jobsinsaudi.me/en/privacy"
                        className="text-decoration-none text-success"
                      >
                        privacy policy
                      </a>{" "}
                      of the application
                    </p>

                    <button className="btn btn-success w-100 p-2 fs-5 rounded-4">
                      Login
                    </button>
                    <div className="orSignwith text-center my-3">
                      <span>or sign with</span>
                    </div>

                    <div className="platForms text-center ">
                      <a
                        href="https://jobsinsaudi.me/en/login/google"
                        className="btn btn-light border rounded-4 d-flex align-items-center justify-content-center gap-2"
                      >
                        <img
                          src="https://jobsinsaudi.me/website/assets/images/google.svg"
                          alt="Google"
                          className="img-fluid"
                        />
                        <p className="mb-0 p-2 fs-5 ">Continue with Google</p>
                      </a>
                    </div>
                  </form>
                </div>
              </div>

              {/* Image Section */}
              <div className="col-lg-5 col-12 p-2 d-lg-block d-none">
                <div className="img">
                  <img
                    src="https://jobsinsaudi.me/website/assets/images/login.svg"
                    alt="Login Illustration"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default LoginPage;
