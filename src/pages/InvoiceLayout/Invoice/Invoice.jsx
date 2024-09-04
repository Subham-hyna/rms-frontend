import React, { useState } from 'react'
import PageHeading from '../../../components/ui/pageHeading/pageHeading';
import ViewCustomerDetailsModal from '../../../components/modals/ViewCustomerDetailsModal/ViewCustomerDetailsModal';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Pagination, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import DownloadIcon from '@mui/icons-material/Download';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { transactionMode } from '../../../constanst';
import PrintTableModal from '../../../components/modals/PrintTableModal/PrintTableModal';
import PrintIcon from '@mui/icons-material/Print';
import ConfirmationModal from '../../../components/modals/ConfirmationModal/ConfirmationModal';

const Invoice = () => {
    const [paymentMode, setPaymentMode] = useState("");
    const [activeTab, setActiveTab] = useState("all");

    const shop = {
        name : "Desi Eshas",
        _id : "sdjhvfdsjhfsdgb",
        createdAt : "2024-08-17T22:12Z"
       }

    const [startValue, setStartValue] = useState(dayjs(shop&&shop.createdAt.split("T")[0]));
    const [endValue, setEndValue] = useState(dayjs(Date.now()));

    const invoiceSearch = (value) => {
        console.log(value)
    }

    const invoices = [
        {
            "invoiceNo" : "#34712",
            "orderAmount" : "568",
            "gst" : "12",
            "totalItems" : "3",
            items : [
                {
                    name: "Chicken Lolipop",
                    quantity: "1",
                    price: "100"
                },
                {
                    name: "Chicken Biriyani",
                    quantity: "1",
                    price: "300"
                },
                {
                    name: "Water",
                    quantity: "1",
                    price: "20"
                },
            ],
            paymentMode : "CASH",
            customerId: {
                "phoneNo" : "9365765523"
            },
            createdAt : "2024-08-20T22:12Z"
        },
        {
            "invoiceNo" : "#34712",
            "orderAmount" : "568",
            "gst" : "12",
            "totalItems" : "3",
            items : [
                {
                    name: "Chicken Lolipop",
                    quantity: "1",
                    price: "100"
                },
                {
                    name: "Chicken Biriyani",
                    quantity: "1",
                    price: "300"
                },
                {
                    name: "Water",
                    quantity: "1",
                    price: "20"
                },
            ],
            paymentMode : "CASH",
            customerId: {
                "phoneNo" : "9365765523"
            },
            createdAt : "2024-08-20T22:12Z"
        },
        {
            "invoiceNo" : "#34712",
            "orderAmount" : "568",
            "gst" : "12",
            "totalItems" : "3",
            items : [
                {
                    name: "Chicken Lolipop",
                    quantity: "1",
                    price: "100"
                },
                {
                    name: "Chicken Biriyani",
                    quantity: "1",
                    price: "300"
                },
                {
                    name: "Water",
                    quantity: "1",
                    price: "20"
                },
            ],
            paymentMode : "CASH",
            customerId: {
                "phoneNo" : "9365765523"
            },
            createdAt : "2024-08-20T22:12Z"
        },
        {
            "invoiceNo" : "#34712",
            "orderAmount" : "568",
            "gst" : "12",
            "totalItems" : "3",
            items : [
                {
                    name: "Chicken Lolipop",
                    quantity: "1",
                    price: "100"
                },
                {
                    name: "Chicken Biriyani",
                    quantity: "1",
                    price: "300"
                },
                {
                    name: "Water",
                    quantity: "1",
                    price: "20"
                },
            ],
            paymentMode : "CASH",
            customerId: {
                "phoneNo" : "9365765523"
            },
            createdAt : "2024-08-20T22:12Z"
        },
        {
            "invoiceNo" : "#34712",
            "orderAmount" : "568",
            "gst" : "12",
            "totalItems" : "3",
            items : [
                {
                    name: "Chicken Lolipop",
                    quantity: "1",
                    price: "100"
                },
                {
                    name: "Chicken Biriyani",
                    quantity: "1",
                    price: "300"
                },
                {
                    name: "Water",
                    quantity: "1",
                    price: "20"
                },
            ],
            paymentMode : "CASH",
            customerId: {
                "phoneNo" : "9365765523"
            },
            createdAt : "2024-08-20T22:12Z"
        },
        {
            "invoiceNo" : "#34712",
            "orderAmount" : "568",
            "gst" : "12",
            "totalItems" : "3",
            items : [
                {
                    name: "Chicken Lolipop",
                    quantity: "1",
                    price: "100"
                },
                {
                    name: "Chicken Biriyani",
                    quantity: "1",
                    price: "300"
                },
                {
                    name: "Water",
                    quantity: "1",
                    price: "20"
                },
            ],
            paymentMode : "CASH",
            customerId: {
                "phoneNo" : "9365765523"
            },
            createdAt : "2024-08-20T22:12Z"
        },
        {
            "invoiceNo" : "#34712",
            "orderAmount" : "568",
            "gst" : "12",
            "totalItems" : "3",
            items : [
                {
                    name: "Chicken Lolipop",
                    quantity: "1",
                    price: "100"
                },
                {
                    name: "Chicken Biriyani",
                    quantity: "1",
                    price: "300"
                },
                {
                    name: "Water",
                    quantity: "1",
                    price: "20"
                },
            ],
            paymentMode : "CASH",
            customerId: {
                "phoneNo" : "9365765523"
            },
            createdAt : "2024-08-20T22:12Z"
        },
        {
            "invoiceNo" : "#34712",
            "orderAmount" : "568",
            "gst" : "12",
            "totalItems" : "3",
            items : [
                {
                    name: "Chicken Lolipop",
                    quantity: "1",
                    price: "100"
                },
                {
                    name: "Chicken Biriyani",
                    quantity: "1",
                    price: "300"
                },
                {
                    name: "Water",
                    quantity: "1",
                    price: "20"
                },
            ],
            paymentMode : "CASH",
            customerId: {
                "phoneNo" : "9365765523"
            },
            createdAt : "2024-08-20T22:12Z"
        },
        {
            "invoiceNo" : "#34712",
            "orderAmount" : "568",
            "gst" : "12",
            "totalItems" : "3",
            items : [
                {
                    name: "Chicken Lolipop",
                    quantity: "1",
                    price: "100"
                },
                {
                    name: "Chicken Biriyani",
                    quantity: "1",
                    price: "300"
                },
                {
                    name: "Water",
                    quantity: "1",
                    price: "20"
                },
            ],
            paymentMode : "CASH",
            customerId: {
                "phoneNo" : "9365765523"
            },
            createdAt : "2024-08-20T22:12Z"
        },
    ]

    const viewingDays = ["ALL","TODAY","YESTERDAY","LAST WEEK","LAST MONTH","CUSTOM"]

  return (
    <main>
        <PageHeading 
        heading={"Invoices"} 
        subHeading={"To View and add invoices"} 
        placeholder={"by name or invoiceNo or email"}
        searchHandler={invoiceSearch}
        tooltip={"Add Invoice"}
         /> 
         <div className='right-page-middle' style={{gap:"10px"}}>
            <div>
                <div className='right-page-middle-category' >
                    <div className='right-page-middle-category-items'>
                    {viewingDays.map((m,i)=>(
                    <li key={i} onClick={(e)=>{setActiveTab(m.toLowerCase())}} className={activeTab === m.toLowerCase() ? "category-active-tab" : ""} ><pre>{m}</pre></li>
                ))}
                   {activeTab === "custom" && <span>    
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                label="From"
                                value={startValue && startValue}
                                onChange={(startValue)=>{setStartValue(startValue)}}
                                />
                                <p> - </p>
                                <DatePicker 
                                value={endValue && endValue}
                                label="To"
                                onChange={(endValue)=>{setEndValue(endValue)}}
                                />
                            </LocalizationProvider>
                        </span>}
                    </div>
                </div>
            </div>

            <div className='right-page-content'>
            <div className='right-page-content-viewBy'>
            <form>
      <Tooltip title="Sort by Payment Mode">
      <select
        style={{width:"130px"}}
        value={paymentMode}
        onChange={(e)=>setPaymentMode(e.target.value)}
      >
        <option value="">Payment Mode </option>
        <option value="ALL">ALL</option>
        {transactionMode.map((t,i)=>(
        <option key={i} value={t}>{t}</option>
            
        ))}
      </select>
      </Tooltip>
    </form>
                    <Tooltip title="Downnload"><DownloadIcon /></Tooltip>
                    <Tooltip title="Refresh"><RefreshIcon /></Tooltip>
                </div>
            </div>
            {activeTab && <div className='showing-result'>
                        <p>Showing Result for : {activeTab.toUpperCase() === "CUSTOM" ? `From ${startValue} to ${endValue}` : activeTab.toUpperCase()} Invoices {paymentMode.length !== 0 &&  ` in ${paymentMode} payment mode`}</p>
                      </div>}
            <div className='right-page-content-row'>
                    {invoices.length > 0 ?
                        <>
                            <table className='table'>
                                <thead>
                                  <tr>
                                    <th><pre>Invoice No</pre></th>
                                    <th><pre>Customer</pre></th>
                                    {<th>Amount</th>}
                                    <th><pre>Total Items</pre></th>
                                    <th><pre>Invoice Date</pre></th>
                                    <th><pre>Payment Mode</pre></th>
                                    <th><pre>Action</pre></th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {
                                    invoices.map((c,index)=>(
                                      <tr key={index}>
                                        <td>{c.invoiceNo}</td>
                                        <td>{c.customerId.phoneNo}</td>
                                        {<td><pre>{c.orderAmount + c.gst}</pre></td>}
                                        <td>{c.totalItems}</td>
                                        <td>{c.createdAt}</td>
                                        <td>{c.paymentMode}</td>
                                        <td>
                                            <ViewCustomerDetailsModal><VisibilityIcon /></ViewCustomerDetailsModal>
                                            <PrintTableModal><PrintIcon /></PrintTableModal>
                                            <ConfirmationModal><DeleteIcon /></ConfirmationModal>
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                                </table>
                        </>
                        :
                        <h1>No Invoices</h1>
                    }
                </div>

        <div className='right-page-middle-footer'>
        <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
         </div>
    </main>
  )
}

export default Invoice