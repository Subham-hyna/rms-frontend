import React, { useState } from 'react'
import { Modal, Tooltip } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { editArea } from '../../../redux/actions/areaAction';

const EditAreaDetailsModal = ({area,children}) => {
  
  const [name, setName] = useState(area && area.name);
  const [priority, setPriority] = useState(area && area.priority);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const { areaLoading } = useSelector((state)=>state.area);

  const shop = 
  {
    "_id": "66d7375fb62d65233df4ce36",
    "name": "Desi Eshas",
    "ownerId": "66d6d7070daa1cc6896b5aae",
    "phoneNo": 6002576479,
    "email": "dsubham490@gmail.com",
    "gstIn": "1234567890224",
    "shopType": "DHABA",
    "employeesId": [],
    "noOfemployees": 0,
    "status": "ACTIVE",
    "address": [
        "sdgds"
    ],
    "createdAt": "2024-09-03T16:20:47.623Z",
    "updatedAt": "2024-09-03T16:20:47.623Z",
    "__v": 0
}

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name",name.trim())
    formData.append("priority",priority.trim())

    dispatch(editArea(formData,area._id,shop._id));

  }

  return (<>
    <Tooltip title="Edit">
    {children && <div onClick={handleOpen} className='edit-btn'>{children}</div>}
    </Tooltip>
    <Modal
    open={open}
    onClose={handleClose}
    >
        <div className='modal'>
        <div className='modal-heading'>
            <p>Edit Area</p>
            <p>To Edit Area with name, priority of viewing</p>
        </div>
        <div className='modal-content'>
            <form onSubmit={submitHandler}>
                <div>
                    <p>Name</p>
                    <input type="text" onChange={(e)=>(setName(e.target.value))} value={name}/>
                </div>
                <div>
                    <p>Priority</p>
                    <input type="number" onChange={(e)=>(setPriority(e.target.value)) } value={priority} />
                </div>
                <button type='submit' className='success-button'>{areaLoading?<span className='loader'>sdf</span>:"Update"}</button>
            </form>

            <button onClick={handleClose} className='close-button'>Close</button>
        </div>
    </div>
    </Modal>
  </>
  )
}

export default EditAreaDetailsModal