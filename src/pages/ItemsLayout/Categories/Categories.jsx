import React from 'react'
import PageHeading from '../../../components/ui/pageHeading/pageHeading'
import AddCategoryModal from '../../../components/modals/AddCategoryModal/AddCategoryModal'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ViewAreaDetailsModal from '../../../components/modals/ViewAreaDetailsModal/ViewAreaDetailsModal';
import EditAreaDetailsModal from '../../../components/modals/EditAreaDetailsModal/EditAreaDetailsModal';
import ConfirmationModal from '../../../components/modals/ConfirmationModal/ConfirmationModal';
import { Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

const Categories = () => {

  const areaSearch = (value) => {
    console.log(value)
}

  const categories = [
    {
      name: "Starters",
      noOfItems: 10
    },
    {
      name: "Dal",
      noOfItems: 5
    },
    {
      name: "Main Course",
      noOfItems: 10
    },
    {
      name: "Chinese",
      noOfItems: 10
    },
    {
      name: "Biriyani",
      noOfItems: 10
    },
    {
      name: "Deserts",
      noOfItems: 10
    },
  ]

  return (
       <main>
       <PageHeading 
        heading={"Category"} 
        subHeading={"To View and add categories"} 
        placeholder={"for category"}
        searchHandler={areaSearch}
        button={<AddCategoryModal buttonIcon={<AddCircleOutlineIcon/>} buttonText={"Add Category"} />}
        tooltip={"Add Category"}
         />

         <div className='right-page-middle'>
           <div className='right-page-content'>
           <div className='right-page-content-viewBy' style={{padding:"30px 0"}}>
                    <Tooltip title="Refresh"><RefreshIcon /></Tooltip>
                </div>
              <div className='right-page-content-grid' style={categories.length === 0 ?{justifyContent:"center", alignItems:"center"}:{}}>
                {categories.length > 0 ?
                <>
                  {categories.map((a,i)=>(
                     <div className='table-grid' style={{width:"150px"}} key={i}>
                     <h3>{a.name}</h3>
                     <p style={{fontSize:"12px"}}>{a.noOfItems} Items</p>
                     <span>
                             <ViewAreaDetailsModal><VisibilityIcon/></ViewAreaDetailsModal>
                             <EditAreaDetailsModal><EditIcon /></EditAreaDetailsModal>
                             <ConfirmationModal><DeleteIcon /></ConfirmationModal>
                     </span>
                 </div>
                  ))}
                </>
                :
                <h1>No Categories</h1>}
              </div>
            </div>
         </div>
    </main>
  )
}

export default Categories