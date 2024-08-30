import React, { useState } from 'react'
import AddEmployeeModal from '../../../components/modals/AddEmployeeModal/AddEmployeeModal'
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
import { employeeStatus } from '../../../constanst';

const Employee = () => {

    const [selectedEmployeeStatus, setSelectedEmployeeStatus] = useState("");

    const shop = {
        name : "Desi Eshas",
        _id : "sdjhvfdsjhfsdgb",
        createdAt : "2024-08-17T22:12Z"
       }

    const [startValue, setStartValue] = useState(dayjs(shop&&shop.createdAt.split("T")[0]));
    const [endValue, setEndValue] = useState(dayjs(Date.now()));

    const employeeSearch = (value) => {
        console.log(value)
    }

    const employees = [
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },
        {
            name: "Subham Dutta",
            saleId : "1233fs",
            dateOfJoining: "12-09-2024",
            email: "subhamdutta460@gmail.com",
            phoneNo: "9365765523",
            address :["No 2 colony Bishnunagar","Goalpara, Assam","783101","Assam"],
            status : "ACTIVE"
        },

    ]

  return (
    <main>
        <PageHeading 
        heading={"Employees"} 
        subHeading={"To View and add employees"} 
        placeholder={"by name or phoneNo or email"}
        searchHandler={employeeSearch}
        button={<AddEmployeeModal buttonIcon={<AddCircleOutlineIcon/>} buttonText={"Add Employee"} />}
        tooltip={"Add Employee"}
         /> 
         <div className='right-page-middle' style={{gap:"10px"}}>
            <div>
                <div className='right-page-middle-category' >
                    <div className='right-page-middle-category-items'>
                        <span>    
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
                        </span>
                    </div>
                </div>
            </div>

            <div className='right-page-content'>
            <div className='right-page-content-viewBy'>
            <form>
      <Tooltip title="Sort by Employee Status">
      <select
        value={selectedEmployeeStatus}
        onChange={(e)=>setSelectedEmployeeStatus(e.target.value)}
      >
        <option value="">Employee Status</option>
        <option value="ALL">ALL</option>
        {employeeStatus.map((t,i)=>(
        <option key={i} value={t}>{t}</option>
            
        ))}
      </select>
      </Tooltip>
    </form>
                    <Tooltip title="Downnload"><DownloadIcon /></Tooltip>
                    <Tooltip title="Refresh"><RefreshIcon /></Tooltip>
                </div>
            </div>
            {<div className='showing-result'>
                        <p>Showing Result for : {`From ${startValue} to ${endValue}`} {selectedEmployeeStatus && `of ${selectedEmployeeStatus} employees`}</p>
                </div>}
            <div className='right-page-content-row'>
                    {employees.length > 0 ?
                        <>
                            <table className='table'>
                                <thead>
                                  <tr>
                                    <th><pre>Sale Id</pre></th>
                                    <th><pre>Employee Name</pre></th>
                                    {<th>Email</th>}
                                    <th><pre>Phone No</pre></th>
                                    <th><pre>Status</pre></th>
                                    <th><pre>Joining Date</pre></th>
                                    <th><pre>Leaving Date</pre></th>
                                    <th><pre>Action</pre></th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {
                                    employees.map((c,index)=>(
                                      <tr key={index}>
                                        <td>{c.saleId}</td>
                                        <td>{c.name}</td>
                                        {<td><pre>{c.email}</pre></td>}
                                        <td>{c.phoneNo}</td>
                                        <td>{c.status}</td>
                                        <td>{c.dateOfJoining}</td>
                                        <td>{c.dateOfLeaving}</td>
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
                        <h1>No Employees</h1>
                    }
                </div>

        <div className='right-page-middle-footer'>
        <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
         </div>
    </main>
  )
}

export default Employee