import React, { useEffect } from 'react'
import PageHeading from '../../../components/ui/pageHeading/pageHeading'
import AddCategoryModal from '../../../components/modals/AddCategoryModal/AddCategoryModal'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationModal from '../../../components/modals/ConfirmationModal/ConfirmationModal';
import { Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { clearErrors, clearMessages, deleteCategory, getCategories } from '../../../redux/actions/categoryAction';
import EditCategoryDetailsModal from '../../../components/modals/EditCategoryDetailsModal/EditCategoryDetailsModal';

const Categories = () => {

  const { categories, categoryLoading, categoryError, categoryMessage } = useSelector((state)=>state.category);

  const shop = 
  {
    "_id": "66d7375fb62d65233df4ce36",
    "name": "Desi Eshas",
    "ownerId": "66d6d7070daa1cc6896b5aae",
    "phoneNo": 6002576479,
    "email": "dsubham490@gmail.com",
    "gstIn": "1234567890224",
    "shopType": "DHABA",
    "employeesId": [],
    "noOfemployees": 0,
    "status": "ACTIVE",
    "address": [
        "sdgds"
    ],
    "createdAt": "2024-09-03T16:20:47.623Z",
    "updatedAt": "2024-09-03T16:20:47.623Z",
    "__v": 0
}

const dispatch = useDispatch();

const approveHandler = (id) => {
  dispatch(deleteCategory(id,shop._id));
}

useEffect(()=>{
  dispatch(getCategories(shop._id))
},[dispatch,shop._id,categoryError,categoryMessage])

useEffect(()=>{
  if(categoryError){
      toast.error(categoryError);
      dispatch(clearErrors());
    }
  if(categoryMessage){
      toast.success(categoryMessage);
      dispatch(clearMessages());
  }
  
},[dispatch,categoryError,categoryMessage])

  return (
       <main>
       <PageHeading 
        heading={"Category"} 
        subHeading={"To View and add categories"} 
        button={<AddCategoryModal buttonIcon={<AddCircleOutlineIcon/>} buttonText={"Add Category"} />}
        tooltip={"Add Category"}
         />

         <div className='right-page-middle'>
           <div className='right-page-content'>
           <div className='right-page-content-viewBy' style={{padding:"30px 0"}}>
                    <Tooltip title="Refresh"><RefreshIcon onClick={()=>dispatch(getCategories(shop._id))} /></Tooltip>
                </div>
              {categoryLoading ?
              <h1>Loading</h1>
              :
              <>
              <div className='right-page-content-grid' style={categories?.length === 0 ?{justifyContent:"center", alignItems:"center"}:{}}>
                {categories?.length > 0 ?
                <>
                  {categories?.map((a,i)=>(
                     <div className='table-grid' style={{width:"150px"}} key={i}>
                     <h3>{a.name}</h3>
                     <p style={{fontSize:"12px"}}>{a.noOfItems} Items</p>
                     <span>
                             <EditCategoryDetailsModal category={a}><EditIcon /></EditCategoryDetailsModal>
                             <ConfirmationModal heading={"Confirmation"} subHeading={"Are you sure to delete this Area and tables related to this area"} data={a} confirmationHandler={approveHandler} > <DeleteIcon /> </ConfirmationModal>
                     </span>
                 </div>
                  ))}
                </>
                :
                <h1>No Categories</h1>}
              </div>
              </>}
            </div>
         </div>
    </main>
  )
}

export default Categories