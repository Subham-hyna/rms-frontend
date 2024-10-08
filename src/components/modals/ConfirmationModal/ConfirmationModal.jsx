import React, { useState } from 'react'
import './ConfirmationModal.css'
import { Modal, Tooltip } from '@mui/material'

const ConfirmationModal = ({heading, subHeading, confirmationHandler,data,style, children}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  function submitHandler(e){
      e.preventDefault();
      if(data.kotId){
        confirmationHandler(data._id,data.kotId);
      }else{
        confirmationHandler(data._id);
      }
  }
  return (<>
    <Tooltip title="Delete">
    {children && <div style={style} onClick={handleOpen} className='delete-btn'>{children}</div>}
    </Tooltip>
    <Modal
    open={open}
    onClose={handleClose}
    >
         <div className='modal'>
        <div className='modal-heading'>
            <p>{heading}</p>
            <p>{subHeading}</p>
        </div>
        <div className='modal-content'>
            <div className='modal-button-group'>
            <button onClick={submitHandler} className='danger-button' >Delete</button>
            <button onClick={handleClose} className='close-button'>Close</button>
            </div>

        </div>
    </div>
    </Modal>
  </>
  )
}

export default ConfirmationModal