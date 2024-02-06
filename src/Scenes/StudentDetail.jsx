import React, { useEffect, useMemo, useState } from "react";
import Upload from "../components/Upload";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../Validators/Authentication";
import { student_column } from "../Columns/student_basic";
import axios from "axios";
import Loading from "../widgets/Loading";
import TableMain from "../components/TableMain";
import Modal from "../widgets/Modal";

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

  const handleRowClicked = (row) => {
    setSelectedStudentDetails(row);
    setIsModalOpen(true);
  };
  const handleSearchChange = (newSearchItem) => {
    setSearch(newSearchItem);
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
      return (
        item.full_name.toLowerCase().includes(search.toLowerCase()) ||
        item.reg_no.toLowerCase().includes(search.toLowerCase()) ||
        item.fa.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilter(result);
  }, [search, tableData]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* upload Section */}
      <div className=" flex flex-col sm:flex-row items-center justify-between gap-8 p-2 ml-2 ">
        <Upload />
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
              year={selectedYear}
            />
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              details={selectedStudentDetails}
              year={selectedYear}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetail;
