import { useState } from "react";
import "../styles/ToggleJobs.css";
const ToggleJobs = () => {
  const formData = [
    {
      id: "country",
      value: "choose",
      label: "Country",
      options: ["Saudi Arabia", "Outside Saudi", "Arabia"],
    },
    {
      id: "nationality",
      value: "all",
      label: "Nationality",
      options: ["Afghan", "Albanian", "Algerian", "Andorran"],
    },
    {
      id: "age",
      value: "all",
      label: "Age",
      options: ["from 19-25", "from 26-45", "from 45+"],
    },
    {
      id: "gender",
      value: "all",
      label: "Gender",
      options: ["Male", "Female"],
    },
    {
      id: "religion",
      value: "all",
      label: "Religion",
      options: ["Muslim", "Non Muslim"],
    },
  ];
  const toggle = [
    { id: "individual", value: "By Individual" },
    { id: "company", value: "By Company" },
  ];
  const [activeToggle, setActiveToggle] = useState("");

  return (
    <div className="d-flex flex-nowrap align-items-center justify-content-between overflow-x-auto">
      {formData.map((field) => (
        <div
          key={field.id}
          className="form-group position-relative mb-4 flex-shrink-0 mx-1 "
        >
          <label
            htmlFor={field.id}
            className="form-label fw-semibold position-absolute top-0 start-0 ms-2 mt-2 bg-white px-2"
          >
            {field.label}
          </label>
          <select
            id={field.id}
            className="form-select mt-3 rounded-4 mx-1 py-3"
            aria-label={`choose ${field.label.toLowerCase()}`}
          >
            <option value="" hidden>
              {field.value}
            </option>
            {field.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      {toggle.map((togglebtn) => (
        <div key={togglebtn.id} className="col-auto mb-3 flex-shrink-0">
          <button
            className={`mx-1 py-3 rounded-4 fw-semibold btn ${
              activeToggle === `${togglebtn.id}`
                ? "bg-success bg-opacity-10 border-success"
                : "bg-light"
            }`}
            onClick={() => setActiveToggle(`${togglebtn.id}`)}
          >
            {togglebtn.value}
          </button>
        </div>
      ))}
    </div>
  );
};

ToggleJobs.propTypes = {};

export default ToggleJobs;
