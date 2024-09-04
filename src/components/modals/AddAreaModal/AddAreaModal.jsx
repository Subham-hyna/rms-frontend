import { Modal } from '@mui/material';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addArea } from '../../../redux/actions/areaAction';

const AddAreaModal = ({buttonIcon,buttonText}) => {

  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");
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

    if(name === "" || priority === ""){
        return toast.error("Fill all the fields");
    }

    const formData = new FormData();

    formData.append("name",name.trim())
    formData.append("priority",priority.trim())

    dispatch(addArea(formData,shop._id));

    setName("");
    setPriority("");
  }

  return (
    <>
        <button className='page-heading-add-button' onClick={handleOpen}>
            <p><pre>{buttonText}</pre></p>
            {buttonIcon}
        </button>
        <Modal
    open={open}
    onClose={handleClose}
    >
        <div className='modal'>
        <div className='modal-heading'>
            <p>Add Area</p>
            <p>To Add Area with name, priority of viewing</p>
        </div>
        <div className='modal-content'>
            <form onSubmit={submitHandler}>
                <div>
                    <p>Name</p>
                    <input type="text" onChange={(e)=>(setName(e.target.value))} value={name} required={true} />
                </div>
                <div>
                    <p>Priority</p>
                    <input type="number" onChange={(e)=>(setPriority(e.target.value)) } value={priority} required={true} />
                </div>
                <button type='submit' className='success-button'>{areaLoading?<span className='loader'>sdf</span>:"Submit"}</button>
            </form>

            <button onClick={handleClose} className='close-button'>Close</button>
        </div>
    </div>
    </Modal>
    </>
  )
}

export default AddAreaModal