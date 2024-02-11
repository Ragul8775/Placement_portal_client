import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useAuth } from "../Validators/Authentication";
import axios from "axios";

const Upload = () => {
  const [showModal, setShowModal] = useState(false);
  const currentYear = new Date().getFullYear(); // Get the current year
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const { values } = useAuth();

  const [file, setFile] = useState();
  const years = Array.from(
    new Array(currentYear - 2017),
    (val, index) => 2019 + index
  );
  function handleChange(e) {
    setFile(e.target.files[0]);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please Select the file.");
      return;
    }
    const formData = new FormData();
    formData.append("year", selectedYear);
    formData.append("netid", values.netid);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/basicDetail",
        formData
      );
      // Assuming the server sends back a JSON response with a Status property
      if (response.data.Status === "Success") {
        setShowModal(!showModal);
        alert("Upload Successful");
        window.location.reload(); // Use window.location.reload() for clarity
      } else {
        // Handle server-side failure (if any specific logic is needed)
        throw new Error("Error in uploading file");
      }
    } catch (error) {
      console.error(
        "Error uploading File",
        error.response ? error.response.data : error
      );
      // Optionally, handle different types of errors separately
      if (error.response && error.response.status === 400) {
        alert("File not accepted.");
      } else {
        alert("An error occurred during file upload.");
      }
    }
  };
  return (
    <>
      <button
        className="bg-blue-800 text-white active:bg-blue-500 
      font-bold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        New Students
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              <div className="border-2 border-gray-300 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 gap-3 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-2xl font=semibold">Upload Details</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <IoCloseCircleOutline className="text-3xl hover:bg-gray-700 hover:pointer" />
                  </button>
                </div>
                <div className="relative p-4 flex-auto">
                  <form className=" w-full" onSubmit={handleSubmit}>
                    <div className="  my-2  p-2  rounded border-2 shadow-sm">
                      <p>
                        NetId:<span>{values.netid}</span>
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <p className="font-semibold">Year:</p>
                      <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="p-1 font-semibold rounded border-2"
                      >
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="p-2">
                      <input
                        type="file"
                        accept=".xlsx"
                        onChange={handleChange}
                        className="text-sm font-semibold  hover:text-gray-400"
                      />
                    </div>

                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
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
    </>
  );
};

export default Upload;
