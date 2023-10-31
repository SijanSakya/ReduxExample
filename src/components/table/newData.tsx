import React, { useMemo } from 'react'
import data12 from "@/data/data.json"
import TableData from './tableData';
const NewData = () => {
    const data = useMemo(() => data12, []);
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
          Header: "Age",
          accessor: "Age",
        },
      ],
      []
    );

    
  return (
    <div>
           <TableData columns={columns} data={data} />
    </div>
  )
}

export default NewData