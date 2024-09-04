import React, { useState } from 'react'
import './ConfirmationModal.css'
import { Modal, Tooltip } from '@mui/material'
import { useSelector } from 'react-redux';

const ConfirmationModal = ({heading, subHeading, confirmationHandler,data, children}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { areaLoading } = useSelector((state)=>state.area);

  function submitHandler(e){
      e.preventDefault();
      confirmationHandler(data._id);
  }
  return (<>
    <Tooltip title="Delete">
    {children && <div onClick={handleOpen} className='delete-btn'>{children}</div>}
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
            <button onClick={submitHandler} className='danger-button' >{areaLoading?<span className='loader'>"sgfhf"</span>:"Confirm"}</button>
            <button onClick={handleClose} className='close-button'>Close</button>
            </div>

        </div>
    </div>
    </Modal>
  </>
  )
}

export default ConfirmationModal