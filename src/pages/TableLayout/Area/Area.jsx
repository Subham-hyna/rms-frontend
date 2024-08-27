import React from 'react'
import PageHeading from '../../../components/ui/pageHeading/pageHeading'
import AddAreaModal from '../../../components/modals/AddAreaModal/AddAreaModal'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ViewAreaDetailsModal from '../../../components/modals/ViewAreaDetailsModal/ViewAreaDetailsModal';
import EditAreaDetailsModal from '../../../components/modals/EditAreaDetailsModal/EditAreaDetailsModal';
import DeleteTableModal from '../../../components/modals/DeleteTableModal/DeleteTableModal';
import { Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

const Area = () => {

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

  const areaSearch = (value) => {
    console.log(value)
}

  return (
    <main>
       <PageHeading 
        heading={"Areas"} 
        subHeading={"To View and add areas of tables"} 
        placeholder={"by area"}
        searchHandler={areaSearch}
        button={<AddAreaModal buttonIcon={<AddCircleOutlineIcon/>} buttonText={"Add Area"} />}
        tooltip={"Add Table"}
         />

         <div className='right-page-middle'>
           <div style={{overflow:"hidden"}}>
           <div className='right-page-content'>
           <div className='right-page-content-viewBy' style={{padding:"30px 0"}}>
                    <Tooltip title="Refresh"><RefreshIcon /></Tooltip>
                </div>
              <div className='right-page-content-grid'>
                {areas.length > 0 ?
                <>
                  {areas.map((a,i)=>(
                     <div className='table-grid' style={{width:"150px"}} key={i}>
                     <h3>{a.name}</h3>
                     <p style={{fontSize:"12px"}}>{a.noOfTables} seats</p>
                     <span>
                             <ViewAreaDetailsModal><VisibilityIcon/></ViewAreaDetailsModal>
                             <EditAreaDetailsModal><EditIcon /></EditAreaDetailsModal>
                             <DeleteTableModal><DeleteIcon /></DeleteTableModal>
                     </span>
                 </div>
                  ))}
                </>
                :
                <h1>No Areas</h1>}
              </div>
            </div>
           </div>
         </div>
    </main>
  )
}

export default Area