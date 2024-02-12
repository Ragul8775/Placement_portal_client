import React, { useState } from "react";
import { useAuth } from "../Validators/Authentication";
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";
const AddStudentModal = ({ year }) => {
  const [showModal, setShowModal] = useState(false);
  const { values } = useAuth();

  const [fields, setFields] = useState({
    netid: values.netid,
    year: year,
    reg_no: "",
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
    company: "",
    package: "",
  });
  const placementOptions = [
    { label: "Placed", value: "placed" },
    { label: "Intern", value: "intern" },
    { label: "Higher studies", value: "HigherStudies" },
    { label: "Entrepreneur", value: "entrepreneur" },
    { label: "Not Placed", value: "not_placed" },
    // Add more options as needed
  ];
  const handleInput = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/addStudent",
        fields
      );
      console.log(response.data);
      alert("Student Added Succesfully");
      setFields({
        ...fields,
        reg_no: "",
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
        company: "",
        package: "",
      });
      setShowModal(false);
      location.reload();
    } catch (error) {
      console.error(error.response?.data?.message || "Failed to add student");
      // Handle error feedback to the user
    }
  };
  return (
    <div className="my-auto">
      <h2
        className="border font-semibold rounded-md bg-orange-800 hover:bg-orange-600 text-white flex justify-center px-3 py-1"
        onClick={() => setShowModal(true)}
      >
        Add Student
      </h2>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              <div className="border-2 border-gray-300 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100  outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 gap-3 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-2xl font-semibold font-mono">
                    Add New Student
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <IoCloseCircleOutline className="text-3xl hover:bg-gray-300 hover:pointer" />
                  </button>
                </div>
                <div className="relative  flex">
                  <form className=" w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-center px-3 w-full">
                      <p className="p-1 bg-gray-100 rounded w-full flex justify-center">
                        NetId:{values.netid}
                      </p>
                    </div>
                    <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-start">
                          Reg.No:
                        </label>
                        <input
                          type="text"
                          name="reg_no"
                          placeholder="Registration Number"
                          onChange={handleInput}
                          value={fields.reg_no}
                          className="mt-1 block w-full p-1 rounded-md border-gray-300 shadow-md bg-slate-100 focus:outline-none placeholder-opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-start">
                          Full Name:
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          placeholder="Full Name"
                          onChange={handleInput}
                          value={fields.full_name}
                          className="mt-1 block w-full p-1 rounded-md border-gray-300 shadow-md bg-slate-100 focus:outline-none placeholder-opacity-50 "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-start">
                          D.O.B:
                        </label>
                        <input
                          type="text"
                          name="dob"
                          placeholder="Date of Birth"
                          onChange={handleInput}
                          value={fields.dob}
                          className=" focus:outline-none mt-1 block w-full p-1 rounded-md border-gray-300 shadow-md bg-slate-100 placeholder-opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-start">
                          Section:
                        </label>
                        <input
                          type="text"
                          name="section"
                          placeholder="Section"
                          onChange={handleInput}
                          value={fields.section}
                          className="focus:outline-none mt-1 block w-full p-1 rounded-md border-gray-300 shadow-md bg-slate-100 placeholder-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-start">
                          Specialization:
                        </label>
                        <input
                          type="text"
                          name="specialization"
                          placeholder="Specialization"
                          onChange={handleInput}
                          value={fields.specialization}
                          className="focus:outline-none mt-1 block w-full p-1 rounded-md border-gray-300 shadow-md bg-slate-100 placeholder-opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-start">
                          Faculty Advisor:
                        </label>
                        <input
                          type="text"
                          name="fa"
                          placeholder="FA"
                          onChange={handleInput}
                          value={fields.fa}
                          className="focus:outline-none mt-1 block w-full p-1 rounded-md border-gray-300 shadow-md bg-slate-100 placeholder-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col  sm:flex-row mb-1 gap-3  sm:mb-3 justify-between px-3 w-full">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-start">
                          SRM.Mail:
                        </label>
                        <input
                          type="text"
                          name="srm_mail"
                          placeholder="SRM Mail"
                          onChange={handleInput}
                          value={fields.srm_mail}
                          className="focus:outline-none mt-1 block w-full p-1 rounded-md border-gray-300 shadow-md bg-slate-100 placeholder-opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-start">
                          G-mail:
                        </label>
                        <input
                          type="text"
                          name="personal_mail"
                          placeholder="Personal Mail"
                          onChange={handleInput}
                          value={fields.personal_mail}
                          className="focus:outline-none mt-1 block p-1 w-full rounded-md border-gray-300 shadow-md bg-slate-100 placeholder-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col  sm:flex-row mb-1  gap-3  sm:mb-3 justify-between px-3 w-full">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-start">
                          Mobile.No:
                        </label>
                        <input
                          type="text"
                          name="mobile_no"
                          placeholder="Mobile.No"
                          onChange={handleInput}
                          value={fields.mobile_no}
                          className="focus:outline-none mt-1 block w-full p-1  rounded-md border-gray-300 shadow-md bg-slate-100 placeholder-opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-start">
                          Father.No:
                        </label>
                        <input
                          type="text"
                          name="father"
                          placeholder="Father.No"
                          onChange={handleInput}
                          value={fields.father}
                          className="focus:outline-none mt-1 block w-full p-1 rounded-md border-gray-300 shadow-md bg-slate-100 placeholder-opacity-50"
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
                          value={fields.placement}
                          className="focus:outline-none mt-1 block w-full p-1 rounded-md border-gray-300 shadow-md bg-slate-100"
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
                        <label className="block text-sm font-medium text-gray-700 text-start">
                          Package:
                        </label>
                        <input
                          type="text"
                          name="package"
                          placeholder="package"
                          onChange={handleInput}
                          value={fields.package}
                          className="focus:outline-none mt-1 block w-full p-1 rounded-md border-gray-300 shadow-md bg-slate-100 placeholder-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="w-3/4 flex justify-center mx-auto">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 text-start">
                          Company:
                        </label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Company"
                          onChange={handleInput}
                          value={fields.company}
                          className="focus:outline-none mt-1 block w-full p-1 rounded-md border-gray-300 shadow-md bg-slate-100 placeholder-opacity-50"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 hover: background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <input
                        className="text-white bg-blue-800 hover:bg-blue-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AddStudentModal;
