import React, { useRef, useState } from 'react'
import AddCustomerModal from '../../../components/modals/AddCustomerModal/AddCustomerModal'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PageHeading from '../../../components/ui/pageHeading/pageHeading';
import DeleteTableModal from '../../../components/modals/DeleteTableModal/DeleteTableModal';
import ViewCustomerDetailsModal from '../../../components/modals/ViewCustomerDetailsModal/ViewCustomerDetailsModal';
import EditCustomerDetailsModal from '../../../components/modals/EditCustomerDetailsModal/EditCustomerDetailsModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Pagination, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import DownloadIcon from '@mui/icons-material/Download';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const Customer = () => {

    const rowInput = useRef(null);

    const inputFocus = () => {
        rowInput.current.focus();
    }

    const shop = {
        name : "Desi Eshas",
        _id : "sdjhvfdsjhfsdgb",
        createdAt : "2024-08-17T22:12Z"
       }

    const [startValue, setStartValue] = useState(dayjs(shop&&shop.createdAt.split("T")[0]));
    const [endValue, setEndValue] = useState(dayjs(Date.now()));

    const customerSearch = (value) => {
        console.log(value)
    }

    const customers = [
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },
        {
            name:"Subham",
            email: "dsfsdfjm @hsdf.com",
            phoneNo: "9365765523",
            totalSpending: "123123",
            lastVisited: "12/09/23"
        },

    ]

  return (
    <main>
        <PageHeading 
        heading={"Customers"} 
        subHeading={"To View and add customers"} 
        placeholder={"by name or phoneNo or email"}
        searchHandler={customerSearch}
        button={<AddCustomerModal buttonIcon={<AddCircleOutlineIcon/>} buttonText={"Add Customer"} />}
        tooltip={"Add Table"}
         /> 
         <div className='right-page-middle'>
            <div>
                <div className='right-page-middle-category'>
                    <div className='right-page-middle-category-items' style={{paddingTop:"20px"}}>
                        <span>    
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                label="From"
                                value={startValue && startValue}
                                />
                                <p> - </p>
                                <DatePicker 
                                value={endValue && endValue}
                                label="To"
                                />
                            </LocalizationProvider>
                        </span>
                    </div>
                </div>
            </div>

            <div className='right-page-content'>
            <div className='right-page-content-viewBy'>
                    <Tooltip title="Downnload"><DownloadIcon /></Tooltip>
                    <Tooltip title="Refresh"><RefreshIcon /></Tooltip>
                </div>
            </div>
            <div className='right-page-content-row'>
                    {customers.length > 0 ?
                        <>
                            <table className='table'>
                                <thead>
                                  <tr>
                                    <th><pre>Customer Name</pre></th>
                                    {<th>Email</th>}
                                    <th><pre>Phone No</pre></th>
                                    <th><pre>Spending</pre></th>
                                    <th><pre>Last Visited</pre></th>
                                    <th><pre>Action</pre></th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {
                                    customers.map((c,index)=>(
                                      <tr onClick={inputFocus} ref={rowInput} tabIndex={index} key={index}>
                                        <td>{c.name}</td>
                                        {<td><pre>{c.email}</pre></td>}
                                        <td>{c.phoneNo}</td>
                                        <td><pre>Rs. {c.totalSpending}</pre></td>
                                        <td>{c.lastVisited}</td>
                                        <td>
                                            <ViewCustomerDetailsModal><VisibilityIcon /></ViewCustomerDetailsModal>
                                            <EditCustomerDetailsModal><EditIcon /></EditCustomerDetailsModal>
                                            <DeleteTableModal><DeleteIcon /></DeleteTableModal>
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                                </table>
                        </>
                        :
                        <h1>No Tables</h1>
                    }
                </div>

        <div className='right-page-middle-footer'>
        <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
         </div>
    </main>
  )
}

export default Customer