import React, { useState } from "react";
import { useAuth } from "../Validators/Authentication";
import axios from "axios";
const Modal = ({ isOpen, onClose, details, year }) => {
  if (!isOpen) return null;
  const [edit, setEdited] = useState(true);
  function handleEdit() {
    setEdited(!edit);
  }
  const { values } = useAuth();
  const [value, setValue] = useState({
    reg_no: details.reg_no,
    full_name: "",
    section: "",
    specialization: "",
    dob: "",
    personal_mail: "",
    srm_mail: "",
    mobile_no: "",
    father: "",
    fa: "",
    placement: "",
    package: "",
  });
  console.log(value);
  const handleInput = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const placementOptions = [
    { label: "Placed", value: "placed" },
    { label: "Intern", value: "intern" },
    { label: "Higher studies", value: "HigherStudies" },
    { label: "Entrepreneur", value: "entrepreneur" },
    { label: "Not Placed", value: "not_placed" },
    // Add more options as needed
  ];
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8000/updateStudent/${values.netid}/${details.reg_no}`,
        value,
        {
          params: {
            year: year,
          },
        }
      );
      if (response.data.Status === "Success") {
        alert("Student details updated Successfully");
        onClose();
        location.reload();
      }
    } catch (error) {
      console.error("Error in Updating the Student:", error);
      alert("Failed to update Student");
    }
  };
  console.log(details);
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm md:max-w-lg  w-full m-4 "
        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to the backdrop
      >
        <div className="flex justify-between items-center ">
          <button
            className="mb-4  px-2 bg-red-500 text-white rounded font-bold hover:bg-red-700"
            onClick={onClose}
          >
            x
          </button>
          <button
            className={
              edit
                ? "mb-4  px-2 text-white rounded bg-blue-500  hover:bg-blue-700"
                : "mb-4  px-2 text-white rounded bg-red-500  hover:bg-red-700  font-bold"
            }
            onClick={handleEdit}
          >
            {edit ? "Edit" : "Cancel"}
          </button>
        </div>

        <div>
          {edit ? (
            <div>
              <div className="flex flex-col  sm:flex-row mb-1 gap-3 sm:mb-3 justify-between px-3 w-full">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Reg.No:
                  </label>
                  <input
                    type="text"
                    value={details.reg_no}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-default"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={details.full_name}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-default"
                  />
                </div>
              </div>
              <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    D.O.B:
                  </label>
                  <input
                    type="text"
                    value={details.dob}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-default"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Section:
                  </label>
                  <input
                    type="text"
                    value={details.section}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-default"
                  />
                </div>
              </div>
              <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Specialization:
                  </label>
                  <input
                    type="text"
                    value={details.specialization}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-default"
                  />{" "}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Faculty Advisor:
                  </label>
                  <input
                    type="text"
                    value={details.fa}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-default"
                  />
                </div>
              </div>
              <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    SRM.Mail:
                  </label>
                  <input
                    type="text"
                    value={details.srm_mail}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-default"
                  />{" "}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    G-mail
                  </label>
                  <input
                    type="text"
                    value={details.personal_mail}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-default"
                  />
                </div>
              </div>
              <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile.No
                  </label>
                  <input
                    type="text"
                    value={details.mobile_no}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-default"
                  />{" "}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Father.No:
                  </label>
                  <input
                    type="text"
                    value={details.father}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-default"
                  />
                </div>
              </div>
              <div className="flex flex-col  sm:flex-row mb-1 gap-3 sm:mb-3 justify-between px-3 w-full">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Placement:
                  </label>
                  <input
                    type="text"
                    value={details.placement ? details.placement : "N/A"}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-default"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Package:
                  </label>
                  <input
                    type="text"
                    value={details.package ? details.package : "N/A"}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-default"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-center px-3 w-full">
                  <p className="p-1 bg-gray-100 rounded w-full flex justify-center">
                    NetId:{values.netid}
                  </p>
                </div>
                <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Reg.No:
                    </label>
                    <p className="font-semibold underline opacity-80">
                      {details.reg_no}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      placeholder={details.full_name}
                      onChange={handleInput}
                      value={value.full_name}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      D.O.B:
                    </label>
                    <input
                      type="text"
                      name="dob"
                      placeholder={details.dob}
                      onChange={handleInput}
                      value={value.dob}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Section:
                    </label>
                    <input
                      type="text"
                      name="section"
                      placeholder={details.section}
                      onChange={handleInput}
                      value={value.section}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Specialization:
                    </label>
                    <input
                      type="text"
                      name="specialization"
                      placeholder={details.specialization}
                      onChange={handleInput}
                      value={value.specialization}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Faculty Advisor:
                    </label>
                    <input
                      type="text"
                      name="fa"
                      placeholder={details.fa}
                      onChange={handleInput}
                      value={value.fa}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      SRM.Mail:
                    </label>
                    <input
                      type="text"
                      name="srm_mail"
                      placeholder={details.srm_mail}
                      onChange={handleInput}
                      value={value.srm_mail}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      G-mail:
                    </label>
                    <input
                      type="text"
                      name="personal_mail"
                      placeholder={details.personal_mail}
                      onChange={handleInput}
                      value={value.personal_mail}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Mobile.No:
                    </label>
                    <input
                      type="text"
                      name="mobile_no"
                      placeholder={details.mobile_no}
                      onChange={handleInput}
                      value={value.mobile_no}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Father.No:
                    </label>
                    <input
                      type="text"
                      name="father"
                      placeholder={details.father}
                      onChange={handleInput}
                      value={value.father}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-start">
                      Placement:
                    </label>
                    <select
                      name="placement"
                      onChange={handleInput}
                      value={value.placement}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option value="">Select Placement Status</option>{" "}
                      {/* Optional: Placeholder option */}
                      {placementOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Package:
                    </label>
                    <input
                      type="text"
                      name="package"
                      placeholder={details.package ? details.package : "N/A"}
                      onChange={handleInput}
                      value={value.package}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center ">
                  <button
                    type="submit"
                    className="m-2 py-2 px-4 w-2/4 sm:w-3/4 bg-blue-800 text-white rounded hover:bg-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
