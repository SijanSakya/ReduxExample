import React from "react";
import { useTable } from "react-table";

type TableProps = {
  columns: any;
  data: any;
};

const TableData: React.FC<TableProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
  } = useTable({ columns, data });
  return (
    <div>
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="py-2 text-xs uppercase pl-4 pr-3 text-left whitespace-nowrap font-bold text-gray-500 sm:pl-6 lg:pl-8"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr key={i} {...row.getRowProps()}>
                  {row.cells.map((cell, i) => {
                    return (
                      <td
                        className="whitespace-nowrap text-left text-sm px-3 py-3 pl-4 sm:pl-6 lg:pl-8 text-slate-900"
                        key={i}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
