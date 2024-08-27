import React from 'react'
import './DeleteTableModal.css'
import { Tooltip } from '@mui/material'

const DeleteTableModal = ({children}) => {
  return (<>
    <Tooltip title="Delete">
    {children && <div className='delete-btn'>{children}</div>}
    </Tooltip>
  </>
  )
}

export default DeleteTableModal