import { Modal, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editOrderItem } from '../../../redux/actions/orderAction';
import toast from 'react-hot-toast';

const EditOrderItemsModal = ({children,orderItem,kotId}) => {
    const [quantity, setQuantity] = useState(orderItem && orderItem.quantity);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);};

  const dispatch = useDispatch();
  const { orderLoading } = useSelector((state) => state.order);

  const { shop } = useSelector(state=>state.shop)

  const submitHandler = (e) => {
    e.preventDefault();
    if(quantity < 1){
        toast.error("Quantity invalid")
        return 
    }
    dispatch(editOrderItem(kotId,quantity,orderItem._id,shop._id))

  };
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
            <p>Edit Order item</p>
            <p>To edit the item quantity</p>
        </div>
        <div className='modal-content'>
        <form onSubmit={submitHandler}>
              <div>
                <p>Quantity</p>
                <input type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity} required={true} />
              </div>
              <button type='submit' className='success-button'>{orderLoading ? <div className='loader'></div> :"Update"}</button>
            </form>
            <button onClick={handleClose} className='close-button'>Close</button>
        </div>
    </div>
    </Modal>
  </>
  )
}

export default EditOrderItemsModal