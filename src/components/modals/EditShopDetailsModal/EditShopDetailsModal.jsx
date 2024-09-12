import { Modal } from '@mui/material';
import React, { useState } from 'react'
import { SHOP_TYPE } from '../../../constanst';
import { useDispatch, useSelector } from 'react-redux';
import { editShop } from '../../../redux/actions/shopAction';

const EditShopDetailsModal = ({shop,children, className}) => {
    const [name, setName] = useState(shop && shop.name);
    const [phoneNo, setPhoneNo] = useState(shop && shop.phoneNo);
    const [email, setEmail] = useState(shop && shop.email);
    const [gstIn, setGstIn] = useState(shop && shop.gstIn);
    const [shopType, setShopType] = useState(shop && shop.shopType);
    const [line1, setLine1] = useState(shop && shop.address.line1);
    const [line2, setLine2] = useState(shop && shop.address.line2);
    const [pincode, setPincode] = useState(shop && shop.address.pincode);
    const [state, setState] = useState(shop && shop.address.state);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { shopLoading } = useSelector(state=>state.shop);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name",name);
        formData.append("email",email);
        formData.append("phoneNo",phoneNo);
        formData.append("line1",line1);
        formData.append("line2",line2);
        formData.append("pincode",pincode);
        formData.append("state",state);
        formData.append("shopType",shopType);
        formData.append("gstIn",gstIn);

        dispatch(editShop(formData,shop._id));

    }

  return (
   <>
    {children && <div onClick={handleOpen} className={className}>{children}</div>}
    <Modal
    open={open}
    onClose={handleClose}
    >
        <div className='modal'>
        <div className='modal-heading'>
            <p>Edit Shop</p>
            <p>To Edit Shop with name, gstIn, address</p>
        </div>
        <div className='modal-content'>
            <form onSubmit={submitHandler}>
                <div>
                    <p>Shop Name</p>
                    <input type="text" onChange={(e)=>(setName(e.target.value))} value={name} required={true} />
                </div>
                <div>
                    <p>Shop Email</p>
                    <input type="email" onChange={(e)=>(setEmail(e.target.value))} value={email} required={true} />
                </div>
                <div>
                    <p>Shop Phone No</p>
                    <input type="number" onChange={(e)=>(setPhoneNo(e.target.value)) } value={phoneNo} required={true} />
                </div>
                <div>
                    <p>Gst In</p>
                    <input type="number" onChange={(e)=>(setGstIn(e.target.value)) } value={gstIn} required={true} />
                </div>
                <div>
                    <p>Select Shop Type</p>
                     <select value={shopType} onChange={(e)=>(setShopType(e.target.value))} required={true}>
                        <option value="" >Select Shop Type</option>
                        {SHOP_TYPE && SHOP_TYPE.map((b,index)=>(
                        <option key={index} value={b} >{b}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>Shop Address Line 1</p>
                    <input type="text" onChange={(e)=>(setLine1(e.target.value)) } value={line1} required={true} />
                </div>
                <div>
                    <p>Shop Address Line 2</p>
                    <input type="text" onChange={(e)=>(setLine2(e.target.value)) } value={line2} required={true} />
                </div>
                <div>
                    <p>Shop Pincode</p>
                    <input type="text" onChange={(e)=>(setPincode(e.target.value)) } value={pincode} required={true} />
                </div>
                <div>
                    <p>Shop State</p>
                    <input type="text" onChange={(e)=>(setState(e.target.value)) } value={state} required={true} />
                </div>
                <button type='submit' className='success-button'>{shopLoading ? <div className='loader'>asgd</div> :"Update"}</button>
            </form>

            <button onClick={handleClose} className='close-button'>Close</button>
        </div>
    </div>
    </Modal>
   </>
  )
}

export default EditShopDetailsModal