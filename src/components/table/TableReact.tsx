"use client"
import React, { useMemo } from "react";
import data1 from "@/data/MOCK_DATA.json";
// import { useTable } from "react-table";
import TableData from "./tableData";

const TableReact = () => {
  const data = useMemo(() => data1, []);

  const newDataKeys = Object.keys(data[0])
  
  const columns = useMemo(
    () => 
    newDataKeys?.map((aData ,i)=>{
        return{
            Header: aData,
            accessor: aData,
        }
      }
       
      ),
    
    []
  );
  console.log(columns)
  return (
    <div>
      <TableData columns={columns} data={data} />
    </div>
  );
};

export default TableReact;
