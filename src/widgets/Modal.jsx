import React, { useState } from "react";

const Modal = ({ isOpen, onClose, details }) => {
  if (!isOpen) return null;
  const [edit, setEdited] = useState(true);
  function handleEdit() {
    setEdited(!edit);
  }
  const [values, setValues] = useState({
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
  });
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(values);
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
            className="mb-4  px-2 bg-blue-500 text-white rounded hover:bg-blue-700 font-bold"
            onClick={handleEdit}
          >
            Edit
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
            </div>
          ) : (
            <div>
              <form>
                <label className="block text-sm font-medium text-gray-700">
                  Reg.No:
                </label>
                <input
                  type="text"
                  name="reg_no"
                  placeholder={details.reg_no}
                  onChange={handleInput}
                  value={values.reg_no}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  placeholder={details.full_name}
                  onChange={handleInput}
                  value={values.full_name}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <label className="block text-sm font-medium text-gray-700">
                  D.O.B:
                </label>
                <input
                  type="text"
                  name="dob"
                  placeholder={details.dob}
                  onChange={handleInput}
                  value={values.dob}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <label className="block text-sm font-medium text-gray-700">
                  Section:
                </label>
                <input
                  type="text"
                  name="section"
                  placeholder={details.section}
                  onChange={handleInput}
                  value={values.section}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <label className="block text-sm font-medium text-gray-700">
                  Specialization:
                </label>
                <input
                  type="text"
                  name="specialization"
                  placeholder={details.specialization}
                  onChange={handleInput}
                  value={values.specialization}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <label className="block text-sm font-medium text-gray-700">
                  G-mail:
                </label>
                <input
                  type="text"
                  name="personal_mail"
                  placeholder={details.personal_mail}
                  onChange={handleInput}
                  value={values.personal_mail}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <label className="block text-sm font-medium text-gray-700">
                  SRM.Mail:
                </label>
                <input
                  type="text"
                  name="srm_mail"
                  placeholder={details.srm_mail}
                  onChange={handleInput}
                  value={values.srm_mail}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <label className="block text-sm font-medium text-gray-700">
                  Mobile.No:
                </label>
                <input
                  type="text"
                  name="mobile_no"
                  placeholder={details.mobile_no}
                  onChange={handleInput}
                  value={values.mobile_no}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <label className="block text-sm font-medium text-gray-700">
                  Father.No:
                </label>
                <input
                  type="text"
                  name="father"
                  placeholder={details.father}
                  onChange={handleInput}
                  value={values.father}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <label className="block text-sm font-medium text-gray-700">
                  Faculty Advisor:
                </label>
                <input
                  type="text"
                  name="fa"
                  placeholder={details.fa}
                  onChange={handleInput}
                  value={values.fa}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />

                <button
                  type="submit"
                  className="mt-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700"
                >
                  Save Changes
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
