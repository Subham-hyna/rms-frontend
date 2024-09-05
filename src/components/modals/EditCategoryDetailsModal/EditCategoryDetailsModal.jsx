import React, { useState } from 'react'
import { Modal, Tooltip } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { editCategory } from '../../../redux/actions/categoryAction';

const EditCategoryDetailsModal = ({category,children}) => {
  
  const [name, setName] = useState(category && category.name);
  // eslint-disable-next-line
  const [priority, setPriority] = useState(category && category.priority || 0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const { categoryLoading } = useSelector((state)=>state.category);

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

    formData.append("name",name.toUpperCase().trim())
    formData.append("priority",priority)

    dispatch(editCategory(formData,category._id,shop._id));

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
            <p>Edit Category</p>
            <p>To Edit Category with name, priority of viewing</p>
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
                <button type='submit' className='success-button'>{categoryLoading?<span className='loader'>sdf</span>:"Update"}</button>
            </form>

            <button onClick={handleClose} className='close-button'>Close</button>
        </div>
    </div>
    </Modal>
  </>
  )
}

export default EditCategoryDetailsModal