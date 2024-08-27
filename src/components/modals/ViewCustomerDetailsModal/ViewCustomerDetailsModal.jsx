import React from 'react'
import { Tooltip } from '@mui/material'

const ViewCustomerDetailsModal = ({children}) => {
  return (<>
    <Tooltip title="View">
    {children && <div className='view-btn'>{children}</div>}
    </Tooltip>
  </>
  )
}

export default ViewCustomerDetailsModal