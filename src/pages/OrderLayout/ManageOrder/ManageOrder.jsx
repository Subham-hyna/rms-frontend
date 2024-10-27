import React, { useEffect, useState } from 'react'
import PageHeading from '../../../components/ui/pageHeading/pageHeading'
import { useDispatch, useSelector } from 'react-redux';
import './ManageOrder.css'
import { Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useNavigate, useParams } from 'react-router-dom';
import { clearErrors, clearMessages, confirmOrder, deleteOrder, deleteOrderItem, getKots, rejectOrder } from '../../../redux/actions/orderAction';
import { clearMessages as invoiceAction }  from '../../../redux/actions/invoiceActioncustomerAction'
import { clearMessages as customerAction }  from '../../../redux/actions/customerAction'
import toast from 'react-hot-toast';
import ConfirmOrderModal from '../../../components/modals/ConfirmOrderModal/ConfirmOrderModal';
import PrintKotModal from '../../../components/modals/PrintKotModal/PrintKotModal';
import PrintKotBillModal from '../../../components/modals/PrintKotBillModal/PrintKotBillModal';
import TableLoader from '../../../components/ui/Loader/TableLoader/TableLoader';
import MetaData from '../../../components/ui/MetaData/MetaData';
import ConfirmationModal from '../../../components/modals/ConfirmationModal/ConfirmationModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOrderItemsModal from '../../../components/modals/EditOrderItemsModal/EditOrderItemsModal';
import EditCustomerDetailsModal from '../../../components/modals/EditCustomerDetailsModal/EditCustomerDetailsModal';

const ManageOrder = () => {
  // eslint-disable-next-line
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [activeTab, setActiveTab] = useState("ALL");

  const { orderLoading, kots, orderError, orderMessage } = useSelector(state=>state.order)
  const { shop } = useSelector(state=>state.shop)
  const { invoiceMessage } = useSelector(state=>state.invoice)
  const { user } = useSelector(state=>state.user)
  const { customerMessage } = useSelector(state=>state.customer)

  const { shopName ,shopId, q } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteItemHandler = (id,kotId) => {
    console.log(id)
    dispatch(deleteOrderItem(kotId,id,shop._id))
  }

  const itemSearch = (value) => {
    setSearchBoxValue(value);
    if(value === ""){
      return
    }
    if(value.length > 0){
        setActiveTab("ALL")
        navigate(`/orders/manage/${shop.name}/${shop._id}/${value.trim()}`)
      }
      else{
        navigate(`/orders/manage/${shop.name}/${shop._id}`)
      }
    }
    
    const resetHandler = () => {
      dispatch(getKots(q,"","",shop._id));
      setActiveTab("ALL");
      setSearchBoxValue("")
      navigate(`/orders/manage/${shop.name}/${shop._id}`)
    }

    const handleDeleteKot = (kotId) => {
      dispatch(deleteOrder(kotId,shop._id));
    }
    const handleCancelKot = (kotId) => {
      dispatch(rejectOrder(kotId,shop._id));
    }

    const handleConfirmKot = (kotId) => {
      dispatch(confirmOrder(kotId,shop._id));
    }

    useEffect(()=>{
      if(activeTab === "ALL"){
        dispatch(getKots(q,"","",shop._id))
      }
      else if( activeTab === "REQUESTED"){
        dispatch(getKots(q,"REQUESTED","",shop._id))
      }
      else if( activeTab === "DINEIN"){
        dispatch(getKots(q,"","DINEIN",shop._id))
      }
      else if( activeTab === "TAKEAWAY"){
        dispatch(getKots(q,"","TAKEAWAY",shop._id))
      }
      else if( activeTab === "DELIVERY"){
        dispatch(getKots(q,"","DELIVERY",shop._id))
      }
    },[dispatch,q,activeTab,orderError,orderMessage,shop,invoiceMessage,customerMessage])

useEffect(()=>{
  if((shopId.toString() !== shop?._id.toString()) || (shopName.toString() !==shop?.name.toString()) || shop?.ownerId.toString() !== user._id.toString()){
      navigate("/404")
  }
},[navigate,shopId,shopName,shop,user])

useEffect(()=>{
  if(orderError){
    toast.error(orderError);
    dispatch(clearErrors());
  }
  if(orderMessage){
      toast.success(orderMessage);
      dispatch(clearMessages());
  }
  if(invoiceMessage){
    toast.success(invoiceMessage)
    dispatch(invoiceAction());
  }        
  if(customerMessage){
    toast.success(customerMessage);
    dispatch(customerAction());
  }
  
},[dispatch,orderError,orderMessage,invoiceMessage,customerMessage])

  return (
    <main>
      <MetaData title={'MANAGE ORDERS'} />
        <PageHeading 
        heading={"Manage Orders"} 
        subHeading={"To View ongoing orders"} 
        placeholder={"by token No"}
        searchHandler={itemSearch}
         />
         <div className='right-page-middle'>
            <div>
            <div className='right-page-middle-category'>
                <div className='right-page-middle-category-items'>
                    <li onClick={(e)=>{setActiveTab("ALL")}} className={activeTab === "ALL" ? "category-active-tab" : ""} ><pre>ALL</pre></li>
                    <li onClick={(e)=>{setActiveTab("REQUESTED")}} className={activeTab === "REQUESTED" ? "category-active-tab" : ""} ><pre>REQUESTED</pre></li>
                    <li onClick={(e)=>{setActiveTab("DINEIN")}} className={activeTab === "DINEIN" ? "category-active-tab" : ""} ><pre>DINEIN</pre></li>
                    <li onClick={(e)=>{setActiveTab("TAKEAWAY")}} className={activeTab === "TAKEAWAY" ? "category-active-tab" : ""} ><pre>TAKEAWAY</pre></li>
                    <li onClick={(e)=>{setActiveTab("DELIVERY")}} className={activeTab === "DELIVERY" ? "category-active-tab" : ""} ><pre>DELIVERY</pre></li>
                    
                </div>
            </div>
            </div>

            <div className='right-page-content'>
                <div className='right-page-content-viewBy'>
                    <Tooltip title="Refresh"><RefreshIcon onClick={resetHandler} /></Tooltip>
                    
                </div>
                {(activeTab !== "ALL" || searchBoxValue !== "") && <div className='showing-result'>
                        <p>Showing Result for : {activeTab} Orders for {searchBoxValue && searchBoxValue}</p>
                      </div>}
               {orderLoading ? 
                <TableLoader column={5} />
                :
                <>
                <div className='right-page-content-grid' style={kots?.length === 0 ? {justifyContent:"center", alignItems:"center"}:{gap:"20px"}}>
                    {kots?.length > 0 ?
                        <>
                            {kots.map((k,i)=>(
                              <div key={i} className='kot-container'>
                                <div className='kot-header'> 
                                <span className='kot-header-name'>
                                  <h1>Order #{k.tokenNo}</h1>
                                  <h4>{k.kotType === "DINEIN" ? `Dine in / Table No. ${k.tableId?.name}` : k.kotType}</h4>
                                  {(k?.customerId?.name || k?.customerId?.phoneNo)  && <h5 style={{display:"flex", justifyContent:"flex-start", alignItems:"center", gap:"5px"}}>{k.customerId?.name} {k.customerId?.phoneNo}  <EditCustomerDetailsModal customer={k?.customerId}><EditIcon /></EditCustomerDetailsModal></h5>}
                                </span>
                                <span className='kot-header-status' style={k.status === "REQUESTED" ?{backgroundColor:"var(--orange)"}:{backgroundColor:"var(--green)"}}>
                                    {k.status}
                                </span>
                                </div>
                                <div className='right-page-order-table kot-table'>
                                  <table>
                                    <thead>
                                      <th>Items</th>
                                      <th>Qty</th>
                                      <th>Action</th>
                                    </thead>
                                    <tbody>
                                      {k.items.length > 0 && k.items.map((c,i)=>(
                                        <tr key={i}>
                                          <td>{c.name}</td>
                                          <td>{c.quantity}</td>
                                          <td style={{display: "flex"}}>
                                            <EditOrderItemsModal kotId={k._id} orderItem={c} ><EditIcon /></EditOrderItemsModal>
                                            <ConfirmationModal heading={"Confirmation"} subHeading={"Are you sure to delete this item"} data={{...c,kotId:k._id}} confirmationHandler={deleteItemHandler} ><DeleteIcon /></ConfirmationModal>
                                        </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                            </div>
                            <div className='kot-footer'>
                                  <span className='kot-footer-payment'>
                                    <h2>Total Amount ({k.totalOrderItems} items)</h2>
                                    <h2>Rs. {k.orderValue}</h2>
                                  </span>
                                  <span className='kot-footer-button'>
                                  {k.status !== "REQUESTED" ?
                                  <>
                                  <PrintKotModal kot={k}>Print Kot</PrintKotModal>
                                  <PrintKotBillModal kotId={k._id} >Pay Bill</PrintKotBillModal>
                                  <ConfirmOrderModal style={{backgroundColor:"var(--red)"}} heading={"Delete KOT"} subHeading={"Are you sure to Delete this Kot"} data={k} confirmationHandler={handleDeleteKot}>Cancel</ConfirmOrderModal>
                                  </>
                                  :
                                  <>
                                    <ConfirmOrderModal heading={"Delete KOT"} subHeading={"Are you sure to Delete this Request"} data={k} confirmationHandler={handleCancelKot}>Cancel</ConfirmOrderModal>
                                    <ConfirmOrderModal heading={"Confirm KOT"} subHeading={"Are you sure to Confirm this Request"} data={k} confirmationHandler={handleConfirmKot}>Confirm</ConfirmOrderModal>
                                  </>
                                  }
                                  </span>
                            </div>
                              </div>
                            ))}
                        </>
                        :
                        <h1>No Orders</h1>
                    }
                </div>
                </>}
            </div>
         </div>
    </main>
  )
}

export default ManageOrder