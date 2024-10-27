import React, { useEffect, useState } from 'react'
import { Modal, Tooltip } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import './InvoiceSummaryModal.css'
import { clearMessages, getInvoiceSummary } from '../../../redux/actions/invoiceAction';
import TableLoader from '../../ui/Loader/TableLoader/TableLoader';

const InvoiceSummaryModal = ({startDate, endDate, children}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        if(!startDate || !endDate ){
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1)
            dispatch(getInvoiceSummary(shop._id,shop.createdAt,tomorrow))
        }
        else{
            dispatch(getInvoiceSummary(shop._id,startDate,endDate))
        }
    };
    const handleClose = () => setOpen(false);

    const { shop } = useSelector(state=>state.shop);
    const { invoiceLoading, invoiceSummary, invoiceMessage } = useSelector(state=>state.invoice)
    const dispatch = useDispatch();


    const formatIndianNumber = (number) => {
        const numStr = number.toString();
        const [integerPart, decimalPart] = numStr.split(".");
        const lastThree = integerPart.slice(-3);
        const otherNumbers = integerPart.slice(0, -3);
        const formattedIntegerPart = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + (otherNumbers ? "," : "") + lastThree;
        return decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
    }

    const convertUTCToISTDateOnly = (utcDateStr) => {
        const date = new Date(utcDateStr);
        const options = { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit" };
        return new Intl.DateTimeFormat("en-IN", options).format(date);
    }

    useEffect(()=>{
        if(invoiceMessage){
          dispatch(clearMessages());
        }
      },[dispatch,invoiceMessage])

  return (
    <>
    <Tooltip title="Summary">
    {children && <span className='invoice-summary-btn' onClick={handleOpen}>{children}</span>}
    </Tooltip>
    <Modal
    open={open}
    onClose={handleClose}
    >
        <div className='modal' style={{width:"500px"}}>
        <div className='modal-heading'>
            <p style={{fontSize:"30px", fontWeight:"600"}}>Invoice Summary</p>
            {(startDate && endDate) ? <p style={{fontSize:"16px"}}>From {convertUTCToISTDateOnly(startDate)} to {convertUTCToISTDateOnly(endDate)}</p> : <p style={{fontSize:"16px"}}>All Invoices</p>}
        </div>
        <div className='modal-content' style={{alignItems:"normal"}}>
        {invoiceLoading ? 
        <TableLoader column={3} />
        :
        <>
        <>
        <div className="invoice-summary">
            <h2>Total Summary</h2>
            <div className="invoice-summary-item">
                <span>Total Payment:</span>
                {invoiceSummary && invoiceSummary.totalAmount && <span className="invoice-summary-total">&#8377; {formatIndianNumber(invoiceSummary.totalAmount)}</span>}
            </div>
            <div className="invoice-summary-item">
                <span>Total Invoices:</span>
                {invoiceSummary && invoiceSummary.totalInvoice && <span className="invoice-summary-total">{invoiceSummary.totalInvoice}</span>}
            </div>
        </div>

        <div className="invoice-summary-payment-mode">
            <h2>Summary of Payment Modes</h2>

            {invoiceSummary && invoiceSummary.paymentMode && invoiceSummary.paymentMode.map((mode)=>(
                <>
                    <div className="invoice-summary-payment-subheading">{mode.paymentMode}</div>
                <div className="invoice-summary-payment-item">
                    <span>Total Amount:</span>
                    <span className="invoice-summary-total">&#8377; {formatIndianNumber(mode.totalPaymentSum)}</span>
                </div>
                <div className="invoice-summary-payment-item">
                    <span>Total Invoices:</span>
                    <span className="invoice-summary-total">{mode.totalInvoice}</span>
                </div>
                </>
            ))}
        </div>
        </>
        </>}
        <div className='modal-button-group'>
            <button onClick={handleClose} className='close-button'>Close</button>
          </div>
        </div>
    </div>
    </Modal>
    </>
  )
}

export default InvoiceSummaryModal