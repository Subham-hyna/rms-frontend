import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.svg"
import { useDispatch, useSelector } from 'react-redux'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TableLoader from '../../components/ui/Loader/TableLoader/TableLoader';
import MetaData from '../../components/ui/MetaData/MetaData';
import { clearErrors, clearMessages, getKots, updateKotStatus } from '../../redux/actions/orderAction';
import toast from 'react-hot-toast';
import ConfirmOrderModal from '../../components/modals/ConfirmOrderModal/ConfirmOrderModal';

const KotPage = () => {

    const { orderLoading, kots, orderError, orderMessage } = useSelector(state=>state.order)
    const [searchBoxValue, setSearchBoxValue] = useState("");
    const [showSearchBar, setShowSearchBar] = useState(false);
    const { shop } = useSelector(state=>state.shop);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const resetHandler = () => {
        dispatch(getKots("","COOKING","",shop._id))
        setSearchBoxValue("");
    }

    const confirmHandler =  (id) => {
        dispatch(updateKotStatus(id,shop._id))
    }

    useEffect(()=>{
        dispatch(getKots(searchBoxValue,"COOKING","",shop._id))
    },[shop,dispatch,searchBoxValue])

    useEffect(()=>{
        if(orderError){
          toast.error(orderError);
          dispatch(clearErrors());
        }
        if(orderMessage){
            toast.success(orderMessage);
            dispatch(clearMessages());
        }
        
      },[dispatch,orderError,orderMessage])

  return (
    <main className='open-order'>
                <MetaData title={"ORDERS"} />
        <header className='open-order-header'>
            <nav className='open-order-nav'>
                <span className='open-order-nav-logo'>
                    <img src={logo} alt='logo' />
                    <p><pre>{shop.name}</pre></p>
                </span>
                <span className='open-order-nav-search-bar'>
                <form>
                        {showSearchBar && <input type='text' placeholder='Search for table' onChange={(e)=>{setSearchBoxValue(e.target.value)}} value={searchBoxValue} />}
                        <SearchRoundedIcon onClick={()=>setShowSearchBar(!showSearchBar)}  />
                    </form>
                </span>
            </nav>
            <div className='open-order-view' style={{justifyContent:"flex-start"}}>
            <span className='open-order-view-tableNo' style={{justifyContent:"space-between"}}>
                {<button onClick={()=>navigate(`/shops`)}>Take Orders</button>}
                </span>
                <span className='open-order-view-sort'>
                    <Tooltip title="Refresh"><RefreshIcon onClick={resetHandler} /></Tooltip>
                </span>
            </div>
         </header>
        {orderLoading ? 
                <TableLoader column={5} />
                :
                <>
                <div className='right-page-content-grid' style={kots?.length === 0 ? {justifyContent:"center", alignItems:"center"}:{gap:"20px"}}>
                    {kots?.length > 0 ?
                        <>
                            {kots.map((kot,i)=>(
                              <>
                                <div key={i} className="modal-print-kot">
              <div className="modal-print-kot-header">
                <h1>Kitchen Token</h1>
              </div>

              <div className="modal-print-kot-middle">
                <p>
                  <strong>Token No:</strong> #{kot.tokenNo}
                </p>
                <p>
                  <strong>Date:</strong>{' '}
                  {new Date(kot.createdAt).toLocaleString()}
                </p>
                <p>
                  <strong>Order Type:</strong> {kot.kotType}
                </p>
                {kot.kotType === 'DINEIN' && (
                  <p>
                    <strong>Table No:</strong> {kot?.tableId?.name}
                  </p>
                )}
              </div>

              <div className="modal-print-kot-order-items">
                <span>
                  <p>Items</p>
                  <p>Qty</p>
                </span>
                {kot.items.map((k, i) => (
                  <span key={i}>
                    <p>{k.name}</p>
                    <p>{k.quantity}</p>
                  </span>
                ))}
              </div>
             {kot.specialRequest !== "" && <div className='special-request'>
              <p>
                  <strong>Special Request:</strong> {kot.specialRequest}
                </p>
              </div>}

              <div className="modal-print-kot-order-footer">
                <p>Thank you</p>
              </div>
            <ConfirmOrderModal style={{border:"1px solid var(--violet)"}} heading={"Confirmation"} subHeading={"Are you sure to this item is served?"} data={kot} confirmationHandler={confirmHandler} >Served</ConfirmOrderModal>
            </div>
                              </>
                            ))}
                        </>
                        :
                        <h1>No Orders</h1>
                    }
                </div>
                </>}
    </main>
  )
}

export default KotPage