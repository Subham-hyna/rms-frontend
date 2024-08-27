import React from 'react'
import { Tooltip } from '@mui/material'

const EditCustomerDetailsModal = ({children}) => {
  return (<>
    <Tooltip title="Edit">
    {children && <div className='edit-btn'>{children}</div>}
    </Tooltip>
  </>
  )
}

export default EditCustomerDetailsModal