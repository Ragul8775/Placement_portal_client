import React from "react";
import DataTable from "react-data-table-component";
import { MdOutlinePersonSearch } from "react-icons/md";
import AddStudentModal from "../widgets/AddStudentModal";
const TableMain = ({
  column,
  data,
  onRowClicked,
  onSearch,
  search,
  year,
  onSelectedRowsChange,
  section,
  selectedSection,
  onSection
}) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };
  const sectionChange = (e)=>{
onSection(e.target.value)
  }
  return (
    <div className="">
      <DataTable
        columns={column}
        data={data}
        onRowClicked={onRowClicked}
        onSelectedRowsChange={onSelectedRowsChange}
        selectableRows
        fixedHeader
        pagination
        responsive
        className="scrollable-list"
        subHeader
        subHeaderComponent={
          <div className=" w-full flex justify-between">
            <div className="flex"> 
            <AddStudentModal year={year}  />
            <div className="flex justify-end m-4"> 
              <select
              value={selectedSection}
              onChange={sectionChange}
              className="border rounded-md p-1 bg-gray-100 hover:bg-gray-50 ">
                <option value=''>Sections</option>
                {section.map((section)=>(
                  <option key={section} value={section}>{section}</option>
                ))}
              </select>
            </div>

            </div>

            <div className="flex justify-start items-center border gap-1 rounded p-1 w-2/4 sm:w-1/4">
              <MdOutlinePersonSearch className="text-xl m-1" />
              <input
                type="text"
                className="w-full appearance-none bg-transparent border-none focus:outline-none text-gray-700"
                placeholder="Search..."
                value={search}
                onChange={handleChange}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default TableMain;
