import React from 'react'
import './PrintTableModal.css'
import { Tooltip } from '@mui/material'

const PrintTableModal = ({children}) => {
  return (<>
    <Tooltip title="Print">
    {children && <div className='print-btn'>{children}</div>}
    </Tooltip>
  </>
  )
}

export default PrintTableModal