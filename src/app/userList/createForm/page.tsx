import Create from '@/components/userList/create'
import React, { ReactNode } from 'react'

const CreateForm = ({data}:{data:ReactNode}) => {
     
 
  return (
    <div>
        <Create />
        {/* {(data) => <Create data={data} />} */}
    </div>
  )
}

export default CreateForm