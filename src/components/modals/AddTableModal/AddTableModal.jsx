import { Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { tableShape } from '../../../constanst';
import { addTable } from '../../../redux/actions/tableAction';
import { useDispatch, useSelector } from 'react-redux';
import { getAreas } from '../../../redux/actions/areaAction';
import toast from 'react-hot-toast';

const AddTableModal = ({buttonIcon,buttonText}) => {

  const [name, setName] = useState("");
  const [areaId, setAreaId] = useState("");
  const [noOfSeats, setNoOfSeats] = useState("");
  const [shape, setShape] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

const { areas } = useSelector((state)=>state.area);

  const submitHandler = (e) => {
    e.preventDefault();

    if(name === "" || areaId === "" || noOfSeats === "" || shape === ""){
        return toast.error("Fill all the fields");
    }

    const formData = new FormData();

    formData.append("name",name.trim())
    formData.append("areaId",areaId.trim())
    formData.append("noOfSeats",noOfSeats)
    formData.append("shape",shape.trim())

    dispatch(addTable(formData,shop._id));

    setName("");
    setAreaId("");
    setNoOfSeats("");
    setShape("");
  }

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

useEffect(()=>{
    dispatch(getAreas(shop._id))
  },[dispatch,shop._id])

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
            <p>Add Table</p>
            <p>To Add Book with name, seats, shape</p>
        </div>
        <div className='modal-content'>
            <form onSubmit={submitHandler}>
                <div>
                    <p>Name</p>
                    <input type="text" onChange={(e)=>(setName(e.target.value))} value={name} required={true} />
                </div>
                <div>
                    <p>No of Seats</p>
                    <input type="number" onChange={(e)=>(setNoOfSeats(e.target.value)) } value={noOfSeats} required={true} />
                </div>
                <div>
                    <p>Select Area</p>
                     <select value={areaId} onChange={(e)=>(setAreaId(e.target.value))} required={true}>
                        <option value="" >Select Area</option>
                        {areas && areas.map((b,index)=>(
                        <option key={index} value={b._id} >{b.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>Select Shape</p>
                     <select value={shape} onChange={(e)=>(setShape(e.target.value))} required={true}>
                        <option value="" >Select Shape</option>
                        {tableShape && tableShape.map((b,index)=>(
                        <option key={index} value={b} >{b}</option>
                        ))}
                    </select>
                </div>
                <button type='submit' className='success-button'>Submit</button>
            </form>

            <button onClick={handleClose} className='close-button'>Close</button>
        </div>
    </div>
    </Modal>
    </>
  )
}

export default AddTableModal