import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../redux/actions/itemAction';
import { getCategories } from '../../../redux/actions/categoryAction';
import toast from 'react-hot-toast';
import { Modal } from '@mui/material';
import { veg_nonNeg } from '../../../constanst';

const AddItemModal = ({buttonIcon,buttonText}) => {

  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [mealType, setMealType] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

const { categories } = useSelector((state)=>state.category);

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

  if(name === "" || categoryId === "" || price === "" || mealType === ""){
      return toast.error("Fill all the fields");
  }

  const formData = new FormData();

  formData.append("name",name.trim())
  formData.append("price",price.trim())
  formData.append("categoryId",categoryId.trim())
  formData.append("mealType",mealType.trim())

  dispatch(addItem(formData,shop._id));

  setName("");
  setPrice("");
  setCategoryId("");
  setMealType("");
}

useEffect(()=>{
  dispatch(getCategories(shop._id))
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
            <p>Add Item</p>
            <p>To Add Item with name, price, mealType</p>
        </div>
        <div className='modal-content'>
            <form onSubmit={submitHandler}>
                <div>
                    <p>Name</p>
                    <input type="text" onChange={(e)=>(setName(e.target.value))} value={name} required={true} />
                </div>
                <div>
                    <p>Price</p>
                    <input type="number" onChange={(e)=>(setPrice(e.target.value)) } value={price} required={true} />
                </div>
                <div>
                    <p>Select Category</p>
                     <select value={categoryId} onChange={(e)=>(setCategoryId(e.target.value))} required={true}>
                        <option value="" >Select Area</option>
                        {categories && categories.map((b,index)=>(
                        <option key={index} value={b._id} >{b.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>Select Meal Type</p>
                     <select value={mealType} onChange={(e)=>(setMealType(e.target.value))} required={true}>
                        <option value="" >Select Shape</option>
                        {veg_nonNeg && veg_nonNeg.map((b,index)=>(
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

export default AddItemModal