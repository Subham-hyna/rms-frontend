import React, { useEffect } from 'react'
import PageHeading from '../../../components/ui/pageHeading/pageHeading'
import AddAreaModal from '../../../components/modals/AddAreaModal/AddAreaModal'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditAreaDetailsModal from '../../../components/modals/EditAreaDetailsModal/EditAreaDetailsModal';
import ConfirmationModal from '../../../components/modals/ConfirmationModal/ConfirmationModal';
import { Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, clearMessages, getAreas } from '../../../redux/actions/areaAction';
import toast from 'react-hot-toast';
import { deleteArea } from "../../../redux/actions/areaAction.js"
import { useNavigate, useParams } from 'react-router-dom';

const Area = () => {

const { areas, areaLoading, areaError, areaMessage } = useSelector((state)=>state.area);

const {shopId , shopName} = useParams();
const navigate = useNavigate();

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
  dispatch(deleteArea(id,shop._id));
}

useEffect(()=>{
  dispatch(getAreas(shop._id))
},[dispatch,shop._id,areaError,areaMessage])

useEffect(()=>{
  if(areaError){
      toast.error(areaError);
      dispatch(clearErrors());
    }
  if(areaMessage){
      toast.success(areaMessage);
      dispatch(clearMessages());
  }
  
},[dispatch,areaError,areaMessage])

useEffect(()=>{
  if((shopId.toString() !== shop?._id.toString()) || (shopName.toString() !==shop?.name.toString())){
      navigate("/404")
  }
},[navigate,shop._id,shopId,shopName,shop.name])


  return (
    <main>
       <PageHeading 
        heading={"Areas"} 
        subHeading={"To View and add areas of tables"} 
        button={<AddAreaModal buttonIcon={<AddCircleOutlineIcon/>} buttonText={"Add Area"} />}
        tooltip={"Add Table"}
         />

         <div className='right-page-middle'>
           <div className='right-page-content'>
           <div className='right-page-content-viewBy' style={{padding:"30px 0"}}>
                    <Tooltip title="Refresh"><RefreshIcon onClick={()=>dispatch(getAreas(shop._id))} /></Tooltip>
                </div>
              {areaLoading ? 
              <h1>Loading</h1>
              :
              <>
              <div className='right-page-content-grid' style={areas?.length === 0 ?{justifyContent:"center", alignItems:"center"}:{}}>
                {areas?.length > 0 ?
                <>
                  {areas?.map((a,i)=>(
                     <div className='table-grid' style={{width:"150px"}} key={i}>
                     <h3>{a.name}</h3>
                     <p style={{fontSize:"12px"}}>{a.noOfTables} tables</p>
                     <span>
                             <EditAreaDetailsModal area={a}><EditIcon /></EditAreaDetailsModal>
                             <ConfirmationModal heading={"Confirmation"} subHeading={"Are you sure to delete this Area and tables related to this area"} data={a} confirmationHandler={approveHandler} > <DeleteIcon /> </ConfirmationModal>
                 
                     </span>
                 </div>
                  ))}
                </>
                :
                <h1>No Areas</h1>}
              </div>
              </>}
            </div>
         </div>
    </main>
  )
}

export default Area