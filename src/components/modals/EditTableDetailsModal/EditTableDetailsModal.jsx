import React from 'react'
import './EditTableDetailsModal.css'
import { Tooltip } from '@mui/material'

const EditTableDetailsModal = ({children}) => {
  return (<>
    <Tooltip title="Edit">
    {children && <div className='edit-btn'>{children}</div>}
    </Tooltip>
  </>
  )
}

export default EditTableDetailsModal