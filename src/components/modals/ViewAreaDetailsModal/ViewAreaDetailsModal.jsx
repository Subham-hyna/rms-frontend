import React from 'react'
import { Tooltip } from '@mui/material'

const ViewAreaDetailsModal = ({children}) => {
  return (<>
    <Tooltip title="View">
    {children && <div className='view-btn'>{children}</div>}
    </Tooltip>
  </>
  )
}

export default ViewAreaDetailsModal