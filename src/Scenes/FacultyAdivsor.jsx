import React, { useEffect, useMemo, useState } from "react";
import { Navbar } from "../components/Navbar";
import Loading from "../widgets/Loading";
import DataTable from "react-data-table-component";
import { Fa_column } from "../Columns/Fa_table";
import { useAuth } from "../Validators/Authentication";
import axios from "axios";
const FacultyAdivsor = () => {
  const { values } = useAuth();
  const netid = values.netid;
  const columns = useMemo(() => Fa_column(), []);
  const [faData, setFaData] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState();
  const [loading, setLoading] = useState(false);

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
        .get(
          `http://localhost:8000/fa-data?year=${selectedYear}&netid=${netid}`
        )
        .then((response) => {
          setFaData(response.data);

          setLoading(false);
        })
        .catch((error) => {
          console.error("Error in fetching the data:", error);
        });
    }, 1000);
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 p-2 ml-2 ">
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
      {/* Table SEction */}
      <div>
        {loading ? (
          <div className="">
            <Loading type={"spinningBubbles"} color={"#1E40AF"} />
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={faData}
            fixedHeader
            pagination
            defaultSortFieldId={1}
            responsive
            className="scrollable-list"
          />
        )}
      </div>
    </div>
  );
};

export default FacultyAdivsor;
