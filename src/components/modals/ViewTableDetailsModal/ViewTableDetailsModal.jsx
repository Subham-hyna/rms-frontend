import React from 'react'
import './ViewTableDetailsModal.css'
import { Tooltip } from '@mui/material'

const ViewTableDetailsModal = ({children}) => {
  return (<>
    <Tooltip title="View">
    {children && <div className='view-btn'>{children}</div>}
    </Tooltip>
  </>
  )
}

export default ViewTableDetailsModal