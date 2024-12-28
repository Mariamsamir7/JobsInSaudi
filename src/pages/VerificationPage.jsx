import React, { useState } from "react";
import Banner from '../components/Banner';
import { useLocation } from "react-router-dom";

const VerificationPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(120); 
  const location = useLocation();
  const { phoneOrEmail } = location.state;


  // Handle OTP input change
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically move to the next input if not the last
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  // Resend Code Handler
  const resendCode = () => {
    alert("Code resent!");
    setTimer(120);
  };

  // Timer logic
  React.useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  // Format timer 
  const formatTimer = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <main>
       <Banner 
        title="Sign In" 
        description="Unlock exclusive access to your account" 
        showButton={false} 
      />
      <section className="auth_section">
        <div className="container">
          <div className="row m-0 justify-content-center">
            <div className="col-lg-6 col-12 p-2 d-flex align-items-center">
              <div className="auth_form">
                <div className="title">
                  <h1>Enter Verification Code</h1>
                  <h5 className="text-secondary ">
                  Code sent to your Phone or Email: <span className="text-success">{phoneOrEmail}</span>                 
                   </h5>
                </div>
                <form id="otpFormRegister">
                  <div className="otp-container d-flex  ">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        className="otp-input bg-light border-0 m-3 p-3 rounded-1 w-50"
                        type="text"
                        value={digit}
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength="1"
                      />
                    ))}
                  </div>
                  <div className="d-flex justify-content-between w-100 resend">
                    {timer === 0 ? (
                      <a href="#" id="resendLink" onClick={resendCode}>
                        Resend the code
                      </a>
                    ) : (
                      <p id="timer">{formatTimer(timer)}</p>
                    )}
                  </div>
                  <button type="submit" className="btn btn-success w-100  fs-4 rounded-4">
                    Confirm
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2 d-lg-block d-none">
              <div className="img">
                <img
                  src="https://jobsinsaudi.me/website/assets/images/otp.svg"
                  alt="login"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VerificationPage;
