import React, { useState } from 'react'
import './Table.css'
import PageHeading from '../../../components/ui/pageHeading/pageHeading'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddTableModal from '../../../components/modals/AddTableModal/AddTableModal';
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PrintIcon from '@mui/icons-material/Print';
import ViewTableDetailsModal from '../../../components/modals/ViewTableDetailsModal/ViewTableDetailsModal';
import EditTableDetailsModal from '../../../components/modals/EditTableDetailsModal/EditTableDetailsModal';
import DeleteTableModal from '../../../components/modals/DeleteTableModal/DeleteTableModal';
import PrintTableModal from '../../../components/modals/PrintTableModal/PrintTableModal';
import RefreshIcon from '@mui/icons-material/Refresh';
import DownloadIcon from '@mui/icons-material/Download';

const Table = () => {

    const [activeTab, setActiveTab] = useState("ALL");
    const [gridView, setGridView] = useState(true);
    const tableSearch = (value) => {
        console.log(value)
    }

    const areas = [
        {
            name:"Ground",
            noOfTables: 10,
            priority: 1
        },
        {
            name:"First",
            noOfTables: 5,
            priority: 2
        },
        {
            name:"Swimming Pool",
            noOfTables: 5,
            priority: 3
        },
        {
            name:"Swimming ool",
            noOfTables: 5,
            priority: 4
        },
    ]

    const tables = [
        {
            name: "1",
            noOfSeats: "4",
            areaId : { name : "swimming pool"},
            shape: "RECTANGLE"
        },
        {
            name: "1",
            noOfSeats: "4",
            areaId : { name : "swimming pool"},
            shape: "RECTANGLE"
        },
        {
            name: "1",
            noOfSeats: "4",
            areaId : { name : "swimming pool"},
            shape: "RECTANGLE"
        },
        {
            name: "1",
            noOfSeats: "4",
            areaId : { name : "swimming pool"},
            shape: "RECTANGLE"
        },
        {
            name: "1",
            noOfSeats: "4",
            areaId : { name : "swimming pool"},
            shape: "RECTANGLE"
        },
        {
            name: "1",
            noOfSeats: "4",
            areaId : { name : "swimming pool"},
            shape: "RECTANGLE"
        },
        {
            name: "1",
            noOfSeats: "4",
            areaId : { name : "swimming pool"},
            shape: "RECTANGLE"
        },
        {
            name: "1",
            noOfSeats: "4",
            areaId : { name : "swimming pool"},
            shape: "RECTANGLE"
        },
        {
            name: "2",
            noOfSeats: "2",
            areaId : { name : "ground"},
            shape: "CIRCLE"
        },
        {
            name: "3",
            noOfSeats: "4",
            areaId : { name : "ground"},
            shape: "RECTANGLE"
        },
        {
            name: "4",
            noOfSeats: "6",
            areaId : { name : "ground"},
            shape: "CIRCLE"
        },
        {
            name: "5",
            noOfSeats: "6",
            areaId : { name : "ground"},
            shape: "CIRCLE"
        },
        {
            name: "6",
            noOfSeats: "2",
            areaId : { name : "ground"},
            shape: "RECTANGLE"
        },
    ]

    // const tables = []


  return (
    <main>
        <PageHeading 
        heading={"Tables"} 
        subHeading={"To View and add tables"} 
        placeholder={"by tables or area"}
        searchHandler={tableSearch}
        button={<AddTableModal buttonIcon={<AddCircleOutlineIcon/>} buttonText={"Add Table"} />}
        tooltip={"Add Table"}
         />

         <div className='right-page-middle'>
            <div>
            <div className='right-page-middle-category'>
                {/* {areas.length > 0 && <h2>Areas</h2>} */}
                {areas && areas.length > 0 && <div className='right-page-middle-category-items'>
                    <li onClick={(e)=>{setActiveTab("ALL")}} className={activeTab === "ALL" ? "category-active-tab" : ""} ><pre>ALL</pre></li>
                    {areas.map((m)=>(
                    <li onClick={(e)=>{setActiveTab(m.name.toLowerCase())}} className={activeTab === m.name.toLowerCase() ? "category-active-tab" : ""} ><pre>{m.name}</pre></li>
                ))}
                </div>}
            </div>
            </div>

            <div className='right-page-content'>
                <div className='right-page-content-viewBy'>
                    <Tooltip title="Downnload"><DownloadIcon /></Tooltip>
                    <Tooltip title="Refresh"><RefreshIcon /></Tooltip>
                    <p>View by </p>
                    <div>
                    <Tooltip title="Grid"><GridViewIcon onClick={()=>setGridView(true)} style={gridView ? {color: "var(--violet)"} : {}} /></Tooltip>
                    <Tooltip title="Row"><TableRowsIcon onClick={()=>setGridView(false)} style={gridView ? {} : {color: "var(--violet)"}} /></Tooltip>
                    </div>
                </div>
                {gridView ? 
                <div className='right-page-content-grid'>
                    {tables.length > 0 ?
                        <>
                            {tables.map((t,i)=>(
                                <div className='table-grid' key={i} style={t.shape === "CIRCLE" ? {borderRadius:"100%"}:{}}>
                                    <h3>{t.name}</h3>
                                    <p>{t.areaId.name}</p>
                                    <p>{t.noOfSeats} seats</p>
                                    <span>
                                            <ViewTableDetailsModal><VisibilityIcon style={{fontSize: "10px"}} /></ViewTableDetailsModal>
                                            <EditTableDetailsModal><EditIcon style={{fontSize: "10px"}} /></EditTableDetailsModal>
                                            <DeleteTableModal><DeleteIcon style={{fontSize: "10px"}} /></DeleteTableModal>
                                            <PrintTableModal><PrintIcon style={{fontSize: "10px"}} /></PrintTableModal>
                                    </span>
                                </div>
                            ))}
                        </>
                        :
                        <h1>No Tables</h1>
                    }
                </div>
                :
                <div className='right-page-content-row'>
                    {tables.length > 0 ?
                        <>
                            <table className='table'>
                                <thead>
                                  <tr>
                                    <th><pre>Table No</pre></th>
                                    {areas.length > 0 && <th>Area</th>}
                                    <th><pre>No of Seats</pre></th>
                                    <th><pre>Action</pre></th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {
                                    tables.map((t,index)=>(
                                      <tr key={index}>
                                        <td>{t.name}</td>
                                        {areas.length > 0 && <td><pre>{t.areaId.name}</pre></td>}
                                        <td>{t.noOfSeats}</td>
                                        <td>
                                            <ViewTableDetailsModal><VisibilityIcon /></ViewTableDetailsModal>
                                            <EditTableDetailsModal><EditIcon /></EditTableDetailsModal>
                                            <DeleteTableModal><DeleteIcon /></DeleteTableModal>
                                            <PrintTableModal><PrintIcon /></PrintTableModal>
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                                </table>
                        </>
                        :
                        <h1>No Tables</h1>
                    }
                </div>}
            </div>
         </div>
    </main>
  )
}

export default Table