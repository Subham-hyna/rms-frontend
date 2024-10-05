import React, { useEffect, useRef, useState } from 'react'
import './PrintKotBillModal.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCharges, clearMessages, generateSingleInvoice, paidInvoice } from '../../../redux/actions/invoiceAction';
import { Modal, Tooltip } from '@mui/material';
import { billPaymentMode } from '../../../constanst';
import toast from 'react-hot-toast';
import TableLoader from '../../ui/Loader/TableLoader/TableLoader';
import { useReactToPrint } from "react-to-print"

const PrintKotBillModal = ({kotId, children}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnClick = () => {
    handleOpen();
    dispatch(generateSingleInvoice(kotId,shop._id));
  }

  const { shop } = useSelector(state=>state.shop);
  const { invoice, invoiceLoading, invoiceMessage } = useSelector(state=>state.invoice);
  const dispatch = useDispatch();

  const invoiceRef = useRef();
  const handleBillPrint = 
      useReactToPrint({
         contentRef: invoiceRef
      })
  

  useEffect(()=>{
    if(invoiceMessage){
      dispatch(clearMessages());
    }
  },[dispatch,invoiceMessage])
  return (
    <>
          <Tooltip title="Print">
            {children && <button onClick={handleOnClick}>{children}</button>}
          </Tooltip>
          <Modal
    open={open}
    onClose={handleClose}
    >
        <div className='modal'>
        <div className='modal-heading'>
            <p>Print Bill</p>
            <p>To print Bill of this Order</p>
        </div>
        <div className='modal-content'>
        {invoiceLoading ? 
        <TableLoader column={3} />
        :
       <>
         <div className="modal-print-bill" ref={invoiceRef}>
    <div className="modal-print-bill-header">
        <h1>{shop?.name}</h1>
        <p>{shop.address.line1}, {shop.address.line2}, {shop.address.pincode}, {shop.address.state}</p>
        <p>Phone: {shop?.phoneNo}</p>
        <p>{shop?.gstIn !== undefined && "GSTIN:"} {shop?.gstIn}</p>
    </div>

    <div class="modal-print-bill-middle">
        <p><strong>Bill No:</strong> #{invoice?.invoiceNo}</p>
        <p><strong>Date:</strong> <span> {new Date(invoice?.createdAt).toLocaleString()}</span></p>
        {invoice?.customerId && <p><strong>Customer Phone:</strong> <span>{invoice?.customerId.phoneNo}</span></p>}
    </div>

    <div className="modal-print-bill-items">
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {invoice?.items?.map((item,i)=>
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>Rs.{item.price}</td>
                  </tr>
                )}
            </tbody>
        </table>
    </div>
    <div className="modal-print-bill-summary">
        <table>
            <tbody>
                <tr>
                    <td><strong>Subtotal:</strong></td>
                    <td>Rs. {invoice?.totalPayment + invoice?.discount - invoice?.packingFee - invoice?.deliveryCharges}</td>
                </tr>
                <tr>
                    <td><strong>Discount({((invoice?.discount * 100)/(invoice?.totalPayment - invoice?.packingFee - invoice?.deliveryCharges + invoice?.discount)).toFixed(0)}%):</strong></td>
                    <td>Rs. {invoice?.discount}</td>
                </tr>
                <tr>
                    <td><strong>Packing Fee:</strong></td>
                    <td>Rs. {invoice?.packingFee}</td>
                </tr>
                <tr>
                    <td><strong>Delivery Fee:</strong></td>
                    <td>Rs. {invoice?.deliveryCharges}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="modal-print-bill-payment">
        <span><strong>Total Amount({invoice?.totalItems} items)</strong></span>
        <span><strong>Rs. {invoice?.totalPayment}</strong></span>
    </div>

    <div className="modal-print-bill-footer" >
        <p>Thank you for dining with us!</p>
        <p>Visit Again!</p>
    </div>
</div>
        <div className='modal-button-group'>
            <PaidBillModal invoice={invoice} >Paid</PaidBillModal>
            <button className='success-button' onClick={handleBillPrint} ><pre>Print Bill</pre></button>
            <EditChargeModal invoice={invoice} style={{backgroundColor:"var(--green)"}} ><pre>Add Charges</pre></EditChargeModal>
            <button onClick={handleClose} className='close-button'>Close</button>
          </div>
       </>
}
        </div>
    </div>
    </Modal>
    </>
  )
}

export default PrintKotBillModal




function PaidBillModal({invoice,children}) {
  const[paymentMode, setPaymentMode] = useState("");
  const [amountReceived, setAmountReceived] = useState(invoice.totalPayment);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const{ shop } = useSelector(state=>state.shop)
  const{ invoiceLoading } = useSelector(state=>state.invoice)
  const dispatch = useDispatch();

  const handlePaidBill = (e) => {
    e.preventDefault();
    if(paymentMode === ""){
      return toast.error("Select Payment mode")
    }
    if(invoice.totalPayment < amountReceived){
      return toast.error("Amount Received can't be more than invoice payment")
    }
    dispatch(paidInvoice(invoice._id,paymentMode,amountReceived,shop._id));
  }

  return (
    <>
      <button onClick={handleOpen} className="success-button" >{children}</button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className='modal' style={{width:"500px"}}>
        <div className='modal-heading'>
            <p>Print Kot</p>
            <p>To print Kot of this Order</p>
        </div>
        <div className='modal-content'>
        <form onSubmit={handlePaidBill}>
                <div>
                    <p>Select Payment Mdoe</p>
                     <select value={paymentMode} onChange={(e)=>(setPaymentMode(e.target.value))}>
                        <option value="" >Select Mode</option>
                        {billPaymentMode && billPaymentMode.map((b,index)=>(
                        <option key={index} value={b} >{b}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>Amount Received</p>
                    <input type="number" onChange={(e)=>(setAmountReceived(e.target.value)) } value={amountReceived} />
                </div>
                <button type='submit' className='success-button'>{invoiceLoading?<span className='loader'></span>:"Paid"}</button>
            </form>
            <button onClick={handleClose} className='close-button'>Close</button>
        </div>
    </div>
      </Modal>
    </>
  );
}

function EditChargeModal({invoice,style,children}) {
  const [discount, setDiscount] = useState(invoice?.discount);
  const [discountPercentage, setDiscountPercentage] = useState(() => {
    const totalAfterCharges = invoice?.totalPayment - invoice?.packingFee - invoice?.deliveryCharges + invoice?.discount;
    return totalAfterCharges ? (discount * 100) / totalAfterCharges : 0;
  });
  const [deliveryCharges, setDeliveryCharges] = useState(invoice?.deliveryCharges);
  const [packingFee, setPackingFee] = useState(invoice?.packingFee);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const{ shop } = useSelector(state=>state.shop)
  const{ invoiceLoading } = useSelector(state=>state.invoice)
  const dispatch = useDispatch();

  const handleAddCharges = (e) => {
    e.preventDefault();
    if(deliveryCharges < 0 || packingFee < 0 || discount < 0 || discountPercentage < 0 || discountPercentage >= 100){
      return toast.error("Charges not allowed")
    }
    dispatch(addCharges(invoice?._id,deliveryCharges,packingFee,discount,shop?._id));
  }

  
  useEffect(()=>{
    setDiscount((discountPercentage*(invoice?.totalPayment - invoice?.packingFee - invoice?.deliveryCharges + invoice?.discount))/100)
  },[discountPercentage,invoice])


  return (
    <>
      <button onClick={handleOpen} style={style} className="success-button" >{children}</button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className='modal' style={{width:"500px"}}>
        <div className='modal-heading'>
            <p>Print Kot</p>
            <p>To print Kot of this Order</p>
        </div>
        <div className='modal-content'>
        <form onSubmit={handleAddCharges}>
                <div>
                    <p>Delivery Fee</p>
                    <input type="number" onChange={(e)=>(setDeliveryCharges(e.target.value)) } value={deliveryCharges} />
                </div>
                <div>
                    <p>Packing Fee</p>
                    <input type="number" onChange={(e)=>(setPackingFee(e.target.value)) } value={packingFee} />
                </div>
                <div>
                    <p>Discount</p>
                    Rs. <input type="number" placeholder='Discount Amount' onChange={(e)=>(setDiscount(e.target.value)) } value={discount} />
                    % <input type="number" placeholder='Discount Percentage' onChange={(e)=>(setDiscountPercentage(e.target.value)) } value={discountPercentage} />
                </div>
                <button type='submit' className='success-button'>{invoiceLoading?<span className='loader'></span>:"Add Charges"}</button>
            </form>
            <button onClick={handleClose} className='close-button'>Close</button>
        </div>
    </div>
      </Modal>
    </>
  );
  }