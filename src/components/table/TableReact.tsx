import React, { useMemo } from "react";
import data1 from "@/data/MOCK_DATA.json";
import { useTable } from "react-table";
import TableData from "./tableData";

const TableReact = () => {
  const data = useMemo(() => data1, []);
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
    ],
    []
  );
  
  return (
    <div>
      <TableData columns={columns} data={data} />
    </div>
  );
};

export default TableReact;
