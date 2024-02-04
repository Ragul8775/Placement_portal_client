import React from "react";
import DataTable from "react-data-table-component";
const TableMain = ({ column, data, onRowClicked }) => {
  return (
    <div>
      <DataTable
        columns={column}
        data={data}
        onRowClicked={onRowClicked}
        fixedHeader
        pagination
        responsive
        className="scrollable-list"
      ></DataTable>
    </div>
  );
};

export default TableMain;
