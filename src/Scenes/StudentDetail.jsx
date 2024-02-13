import React, { useEffect, useMemo, useState } from "react";
import Upload from "../components/Upload";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../Validators/Authentication";
import { student_column } from "../Columns/student_basic";
import axios from "axios";
import Loading from "../widgets/Loading";
import TableMain from "../components/TableMain";
import Modal from "../widgets/Modal";
import { FaFileDownload } from "react-icons/fa";
import DownloadBtn from "../widgets/DownloadBtn";
import { saveAs } from "file-saver";

const StudentDetail = () => {
  const { values } = useAuth();
  const netid = values.netid;
  const columns = useMemo(() => student_column(), []);
  const [availableYears, setAvailableYears] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [selectedYear, setSelectedYear] = useState();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudentDetails, setSelectedStudentDetails] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showUpdateButton, setShowUpdateButton] = useState(false);
  const [showPlacementModal, setShowPlacementModal] = useState(false);
  const [placementStatus, setPlacementStatus] = useState("");
  const [company, setCompany] = useState("");
  const [packageValue, setPackageValue] = useState("");
  const [section, setSection] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");
  const [isDownloadModal, setIsDownloadModal] = useState(false);

  const handleDownlaod = async ({
    netid,
    selectedSection,
    year,
    placementStatus,
  }) => {
    console.log(netid, year, selectedSection, placementStatus);
    try {
      // Construct request params object dynamically based on available filters
      let params = { netid, year };
      if (selectedSection) params.section = selectedSection;
      if (placementStatus) params.placement = placementStatus;

      const response = await axios.get(
        "http://localhost:8000/student-download",
        {
          params: params,
          responseType: "blob",
        }
      );

      // Construct filename based on available filters
      let filenameParts = ["students"];
      if (selectedSection) filenameParts.push(selectedSection);
      if (placementStatus)
        filenameParts.push(placementStatus.replace(/\s+/g, "_"));
      filenameParts.push(year); // Assume year is always provided
      let filename = filenameParts.join("_") + ".xlsx";

      const blob = new Blob([response.data], {
        type: "application/vnd.ms-excel",
      });
      saveAs(blob, filename);
      setIsDownloadModal(false);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };
  const onSelectedRowsChange = (state) => {
    setSelectedRows(state.selectedRows);
    setShowUpdateButton(state.selectedRows.length > 0);
  };
  useEffect(() => {
    setShowUpdateButton(selectedRows.length > 0);
  }, [selectedRows]);
  const handleUpdatePlacementSubmit = async (e) => {
    e.preventDefault();
    const updatePayload = {
      studentRegNos: selectedRows.map((row) => row.reg_no),
      placement: placementStatus,
      company: company,
      package: packageValue,
      year: selectedYear,
      netid: values.netid,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/studentUpdate/placementDetails",
        updatePayload
      );
      if (response.status === 200) {
        alert("Placement Details updated for the selected Students");
        setPlacementStatus("");
        setCompany("");
        setPackageValue("");
        setShowPlacementModal(false);
        loadData();
      }
    } catch (error) {
      console.error("Failed to update the placement Details", error);
      setShowPlacementModal(false);
      alert("Failed to update student Details");
    }
  };
  const handleRowClicked = (row) => {
    setSelectedStudentDetails(row);
    setIsModalOpen(true);
  };
  const handleSearchChange = (newSearchItem) => {
    setSearch(newSearchItem);
  };
  const handleSectionChange = (newSectionItem) => {
    setSelectedSection(newSectionItem);
  };
  useEffect(() => {
    if (netid) {
      axios
        .get(`http://localhost:8000/availableYears/${netid}`)
        .then((response) => {
          setAvailableYears(response.data);
          setSelectedYear(response.data[0]);
        })
        .catch((error) => {
          console.error("Error in fetching the data:", error);
        });
    }
  }, [netid]);
  const handleYearChange = (event) => {
    const year = event.target.textContent;
    setSelectedYear(year);
  };
  useEffect(() => {
    loadData();
  }, [selectedYear]);
  const loadData = () => {
    setLoading(true);
    setTimeout(async () => {
      await axios
        .get(`http://localhost:8000/studentDetails/${selectedYear}/${netid}`)
        .then((response) => {
          setTableData(response.data);
          setFilter(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error in fetching the data:", error);
        });
    }, 1000);
  };
  useEffect(() => {
    const result = tableData.filter((item) => {
      // Use optional chaining (?.) and nullish coalescing operator (??) to avoid errors
      return (
        item.full_name?.toLowerCase().includes(search.toLowerCase()) ||
        item.reg_no?.toLowerCase().includes(search.toLowerCase()) ||
        item.fa?.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilter(result);
  }, [search, tableData]);
  useEffect(() => {
    const uniqueSections = Array.from(
      new Set(tableData.map((item) => item.section))
    );
    setSection(uniqueSections);
  }, [tableData]);

  useEffect(() => {
    const filteredData = selectedSection
      ? tableData.filter((item) => item.section === selectedSection)
      : tableData;
    setFilter(filteredData);
  }, [selectedSection, tableData]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* upload Section */}
      <div className=" flex flex-col sm:flex-row items-center justify-between gap-2 p-2 ml-2 ">
        <div className="flex gap-2 items-center justify-between">
          <Upload />
          <div>
            {showUpdateButton && (
              <button
                className="px-2 m-1 bg-cyan-800 hover:bg-blue-700 text-white font-bold py-2 rounded"
                onClick={() => setShowPlacementModal(true)}
              >
                Update
              </button>
            )}
          </div>
          <div>
            <button
              onClick={() => setIsDownloadModal(true)}
              className="border rounded flex justify-center items-center px-4 py-2 gap-2 hover:bg-gray-800 hover:text-white"
            >
              <FaFileDownload />
              <h3>Downlaod</h3>
            </button>
            <DownloadBtn
              isOpen={isDownloadModal}
              onClose={() => setIsDownloadModal(!isDownloadModal)}
              netid={netid}
              year={selectedYear}
              section={section}
              handleDownload={handleDownlaod}
            />
          </div>
        </div>
        <div className="border rounded-xl">
          <ul className="scrollable-list flex  rounded-xl flex-row gap-4 max-w-md overflow-x-auto shadow-inner p-1">
            {availableYears.map((item, index) => {
              return (
                <li
                  key={index}
                  value={item}
                  onClick={handleYearChange}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:cursor-pointer hover:bg-gray-600 hover:text-white"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Table Area */}
      <div>
        {loading ? (
          <div className="">
            <Loading type={"spinningBubbles"} color={"#1E40AF"} />
          </div>
        ) : (
          <div className="">
            <TableMain
              column={columns}
              data={filter || []}
              onRowClicked={handleRowClicked}
              search={search}
              onSearch={handleSearchChange}
              onSelectedRowsChange={onSelectedRowsChange}
              year={selectedYear}
              section={section}
              selectedSection={selectedSection}
              onSection={handleSectionChange}
            />
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              details={selectedStudentDetails}
              year={selectedYear}
            />
            {showPlacementModal && (
              <div
                className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20"
                onClick={() => setShowPlacementModal(false)}
              >
                <div
                  className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="mt-3 text-center">
                    <div className="mx-auto flex items-center justify-between">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Update Placement Details
                      </h3>
                      <button
                        onClick={() => setShowPlacementModal(false)}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <form
                      onSubmit={handleUpdatePlacementSubmit}
                      className="mt-2 px-7 py-3"
                    >
                      <label className="block text-sm font-medium text-gray-700">
                        Placement Status:
                      </label>
                      <select
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={placementStatus}
                        onChange={(e) => setPlacementStatus(e.target.value)}
                      >
                        <option value="">Select Status</option>
                        <option value="Placed">Placed</option>
                        <option value="Unplaced">Unplaced</option>
                        <option value="Intern">Intern</option>
                        <option value="HigherStudies">Higher Studies</option>
                      </select>

                      {(placementStatus === "Placed" ||
                        placementStatus === "Intern") && (
                        <>
                          <label className="block text-sm font-medium text-gray-700 mt-4">
                            Company:
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />

                          <label className="block text-sm font-medium text-gray-700 mt-4">
                            Package:
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={packageValue}
                            onChange={(e) => setPackageValue(e.target.value)}
                          />
                        </>
                      )}

                      <div className="mt-5 sm:mt-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetail;
