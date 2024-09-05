import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editItem, editItemCategory } from '../../../redux/actions/itemAction';
import { Modal, Tooltip } from '@mui/material';
import { veg_nonNeg } from '../../../constanst';

const EditItemDetailsModal = ({item,children}) => {
    const [name, setName] = useState(item && item.name);
    const [categoryId, setCategoryId] = useState(item && item.categoryId._id);
    const [price, setPrice] = useState(item && item.price);
    const [mealType, setMealType] = useState(item && item.mealType);
    // eslint-disable-next-line
    const [isStar, setIsStar] = useState(item && item.isStar);
    const [isAvailable, setIsAvailable] = useState(item && item.isAvailable);
    const [shortCode, setShortCode] = useState(item && (item.shortCode || ""))

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

    const formData = new FormData();

    formData.append("name",name.trim())
    formData.append("categoryId",categoryId)
    formData.append("price",price)
    formData.append("mealType",mealType.trim())
    formData.append("isStar",isStar)
    formData.append("isAvailable",isAvailable)
    if(shortCode !== ""){
        formData.append("shortCode",shortCode)
    }

    dispatch(editItem(formData,item._id,shop._id));
    dispatch(editItemCategory(categoryId,item._id,shop._id));
  }

  return (
    <>
    <Tooltip title="Edit">
    {children && <div onClick={handleOpen} className='edit-btn'>{children}</div>}
    </Tooltip>
    <Modal
    open={open}
    onClose={handleClose}
    >
        <div className='modal'>
        <div className='modal-heading'>
            <p>Edit Item</p>
            <p>To Item Book with name, price, mealType</p>
        </div>
        <div className='modal-content'>
            <form onSubmit={submitHandler}>
                <div>
                    <p>Item Name</p>
                    <input type="text" onChange={(e)=>(setName(e.target.value))} value={name} />
                </div>
                <div>
                    <p>Price</p>
                    <input type="number" onChange={(e)=>(setPrice(e.target.value)) } value={price} />
                </div>
                <div>
                    <p>Short Code</p>
                    <input type="text" onChange={(e)=>(setShortCode(e.target.value)) } value={shortCode} />
                </div>
                <div>
                    <p>Select Category</p>
                     <select value={categoryId} onChange={(e)=>(setCategoryId(e.target.value))}>
                        <option value="" >Select Area</option>
                        {categories && categories.map((b,index)=>(
                        <option key={index} value={b._id} >{b.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>Meal Type</p>
                     <select value={mealType} onChange={(e)=>(setMealType(e.target.value))}>
                        <option value="" >Select Meal Type</option>
                        {veg_nonNeg && veg_nonNeg.map((b,index)=>(
                        <option key={index} value={b} >{b}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>Meal Type</p>
                     <select value={isAvailable} onChange={(e)=>(setIsAvailable(e.target.value))}>
                        <option value="" >Select Availability</option>
                        <option value="true" >Available</option>
                        <option value="false" >Not Available</option>
                    </select>
                </div>
                <button type='submit' className='success-button'>Update</button>
            </form>

            <button onClick={handleClose} className='close-button'>Close</button>
        </div>
    </div>
    </Modal>
  </>
  )
}

export default EditItemDetailsModal