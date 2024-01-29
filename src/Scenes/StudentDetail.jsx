import React from "react";
import Upload from "../components/Upload";
import { Navbar } from "../components/Navbar";

const StudentDetail = () => {
  const list = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"];
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=" flex flex-col sm:flex-row items-center justify-between gap-8 p-2 ml-2 ">
        <Upload />
        <div className="border rounded-xl">
          <ul className="scrollable-list flex  rounded-xl flex-row gap-4 max-w-md overflow-x-auto shadow-inner ">
            {list.map((item, index) => {
              return (
                <li
                  key={index}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full "
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
