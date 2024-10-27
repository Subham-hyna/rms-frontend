import React, { useEffect, useState } from 'react'
import PageHeading from '../../../components/ui/pageHeading/pageHeading';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Pagination, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { transactionMode } from '../../../constanst';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { clearErrors, clearMessages, getInvoices } from '../../../redux/actions/invoiceAction';
import toast from 'react-hot-toast';
import ViewInvoiceDetailsModal from '../../../components/modals/ViewInvoiceDetailsModal/ViewInvoiceDetailsModal';
import TableLoader from '../../../components/ui/Loader/TableLoader/TableLoader';
import MetaData from '../../../components/ui/MetaData/MetaData';
import InvoiceSummaryModal from '../../../components/modals/InvoiceSummaryModal/InvoiceSummaryModal';

const Invoice = () => {
    const [paymentMode, setPaymentMode] = useState("");
    const [activeTab, setActiveTab] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [page,setPage] = useState(1);
    const { shop } = useSelector(state=>state.shop);
    const { user } = useSelector(state=>state.user);
    const { invoices, invoiceLoading, invoiceMessage, invoiceError, resultPerPage, invoiceFilteredCount } = useSelector(state=>state.invoice);

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const [viewStartDate, setViewStartDate] = useState();
    const [viewEndDate, setViewEndDate] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const { shopId,shopName, q } = useParams();

    const invoiceSearch = (value) => {
      setSearchValue(value);
      if(value === ""){
        return
      }
      if(value.length > 0){
          navigate(`/invoices/invoice/${shop.name}/${shop._id}/${value.trim()}`)
        }
        else{
          navigate(`/invoices/invoice/${shop.name}/${shop._id}`)
      }
    }

    const resetHandler = () => {
      dispatch(getInvoices("",shop._id,1,""))
      setSearchValue("");
      setPaymentMode("");
      setStartDate("");
      setEndDate("");
      setActiveTab("all")
      navigate(`/invoices/invoice/${shop.name}/${shop._id}`)
    }

    const onPageChange = (event, value) => {
      setPage(value);
    };

    const dateRangeSorting = (tab) => {
      setActiveTab(tab)

function formatToUTC(date) {
  return date.toISOString();
}

// Helper function to format date to UTC with time set to 18:30:00
function setTimeToUTC1830(date) {
  date.setUTCHours(18, 30, 0, 0); // Set time to 18:30:00 UTC
  return date;
}

// Helper function to get the start of the day in UTC based on IST
function setStartOfDayUTC(date) {
  const localDate = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  localDate.setDate(localDate.getDate() - 1); // Move one day back
  return setTimeToUTC1830(localDate);
}

// Helper function to get the end of the day in UTC based on IST
function setEndOfDayUTC(date) {
  const localDate = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  return setTimeToUTC1830(localDate);
}

// Main Code
const now = new Date();

const startOfToday = setStartOfDayUTC(new Date(now)); // Start of today in UTC based on IST
const endOfToday = setEndOfDayUTC(new Date()); // End of today in UTC based on IST

const startOfYesterday = setStartOfDayUTC(new Date(now.setDate(now.getDate() - 1)));
const endOfYesterday = startOfToday 

const startOfLast7Days = setStartOfDayUTC(new Date(now.setDate(now.getDate() - 6)));
const endOfLast7Days = setEndOfDayUTC(new Date());

const startOfLast30Days = setStartOfDayUTC(new Date(now.setDate(now.getDate() - 29)));
const endOfLast30Days = setEndOfDayUTC(new Date());

const startOfLastYear = setStartOfDayUTC(new Date(now.getFullYear() - 1, 0, 1));
const endOfLastYear = setEndOfDayUTC(new Date(now.getFullYear() - 1, 11, 31));

setPage(1)

      if(tab === "today"){
        setStartDate(formatToUTC(startOfToday));
        setEndDate(formatToUTC(endOfToday))
      }

      if(tab === "all"){
        resetHandler();
      }

      if(tab === "yesterday"){
        setStartDate(formatToUTC(startOfYesterday));
        setEndDate(formatToUTC(endOfYesterday))
      }

      if(tab === "last 7 days"){
        setStartDate(formatToUTC(startOfLast7Days));
        setEndDate(formatToUTC(endOfLast7Days))
      }

      if(tab === "last 30 days"){
        setStartDate(formatToUTC(startOfLast30Days));
        setEndDate(formatToUTC(endOfLast30Days))
      }

      if(tab === "last year"){
        setStartDate(formatToUTC(startOfLastYear));
        setEndDate(formatToUTC(endOfLastYear))
      }

    }

    const customDates = () => {
      if(!viewStartDate || !viewEndDate){
        return toast.error("Invalid Dates")
      }
      if(viewStartDate >= viewEndDate){
        return toast.error("Invalid Dates")
      }

      function formatDateToUTC(date) {
        return date.toISOString().slice(0, 19) + 'Z'; 
    }

    setPage(1);
    
    
    const startDateObj = new Date(viewStartDate); 
    const endDateObj = new Date(viewEndDate);     
    
    startDateObj.setUTCDate(startDateObj.getUTCDate() - 1); 
    startDateObj.setUTCHours(18, 30, 0, 0); 
    
    
    endDateObj.setUTCDate(endDateObj.getUTCDate() - 1);
    endDateObj.setUTCHours(18, 30, 0, 0); 
    
    const formattedStartDate = formatDateToUTC(startDateObj); 
    const formattedEndDate = formatDateToUTC(endDateObj);     
    
    setStartDate(formattedStartDate);
    setEndDate(formattedEndDate);
      dispatch(getInvoices(q,shopId,page,paymentMode, formattedStartDate,formattedEndDate));
    }

    useEffect(()=>{
      if(activeTab === "all"){
        dispatch(getInvoices(q,shopId,page,paymentMode, "",""));
        return;
      }
      else if(activeTab === "custom" && startDate === "" && endDate === ""){
        return;
      }
      else{
        dispatch(getInvoices(q,shopId,page,paymentMode, startDate,endDate));

      }
      console.log(startDate)
      // eslint-disable-next-line
    },[dispatch,q,page,shopId,invoiceMessage,invoiceError,paymentMode,activeTab]);

    const viewingDays = ["ALL","TODAY","YESTERDAY","LAST 7 DAYS","LAST 30 DAYS","LAST YEAR","CUSTOM"]

    useEffect(()=>{
      if((shopId?.toString() !== shop?._id?.toString()) || (shopName?.toString() !==shop?.name?.toString()) || shop?.ownerId?.toString() !== user._id?.toString()){
          navigate("/404")
      }
    },[navigate,shopId,shopName,shop,user])

    useEffect(()=>{
      if(invoiceError){
        toast.error(invoiceError);
        dispatch(clearErrors());
      }
      if(invoiceMessage){
          toast.success(invoiceMessage);
          dispatch(clearMessages());
      }
      
  },[dispatch,invoiceError,invoiceMessage])

  return (
    <main>
      <MetaData title={'INVOICES'} />
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
                    <li key={i} onClick={(e)=>{dateRangeSorting(m.toLowerCase())}} className={activeTab === m.toLowerCase() ? "category-active-tab" : ""} ><pre>{m}</pre></li>
                ))}
                   {activeTab === "custom" && <span className='right-page-middle-category-custom-dates'>    
                                <div>
                                  <p>From</p>
                                  <input
                                type='date' 
                                label="From"
                                value={viewStartDate && viewStartDate}
                                onChange={(e)=>setViewStartDate(e.target.value)}
                                />
                                </div>
                                <div>
                                  <p>To</p>
                                  <input
                                type='date' 
                                value={viewEndDate && viewEndDate}
                                label="To"
                                onChange={(e)=>setViewEndDate(e.target.value)}
                                />
                                </div>
                                <button onClick={customDates}>Search</button>
                        </span>}
                    </div>
                </div>
            </div>

            <div className='right-page-content'>
            <div className='right-page-content-viewBy'>
              <InvoiceSummaryModal startDate={startDate} endDate={endDate} >Summary</InvoiceSummaryModal>
            <form>
      <Tooltip title="Sort by Payment Mode">
      <select
        style={{width:"130px"}}
        value={paymentMode}
        onChange={(e)=>setPaymentMode(e.target.value)}
      >
        <option value="">Payment Mode </option>
        {transactionMode.map((t,i)=>(
        <option key={i} value={t}>{t}</option>
            
        ))}
      </select>
      </Tooltip>
    </form>
                    {/* <Tooltip title="Downnload"><DownloadIcon /></Tooltip> */}
                    <Tooltip title="Refresh"><RefreshIcon onClick={resetHandler} /></Tooltip>
                </div>
            </div>
            {(searchValue || paymentMode || startDate || endDate) && <div className='showing-result'>
                        <p>Showing Result for : Invoices {paymentMode.length !== 0 &&  ` in ${paymentMode} payment mode ${searchValue} from ${startDate.toISOString()} to ${endDate}`}</p>
                      </div>}
            {invoiceLoading ?
              <TableLoader column={6} />
              :
              <>
                <div className='right-page-content-row'>
                    {invoices?.length > 0 ?
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
                                    invoices?.map((c,index)=>(
                                      <tr key={index}>
                                        <td>{c?.invoiceNo}</td>
                                        <td>{c?.customerId?.phoneNo}</td>
                                        {<td><pre>&#8377; {c.totalPayment}</pre></td>}
                                        <td>{c.totalItems}</td>
                                        <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                                        <td>{c.paymentMode}</td>
                                        <td>
                                            <ViewInvoiceDetailsModal invoice={c}><VisibilityIcon /></ViewInvoiceDetailsModal>
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
        {invoiceFilteredCount > resultPerPage && 
          (<div className='right-page-middle-footer'>
          <Pagination 
          count={Math.ceil(invoiceFilteredCount / resultPerPage)}
          page={page}
          onChange={onPageChange}
          variant="outlined" shape="rounded"
          />
          </div>)
        }
              </>
      }
         </div>
    </main>
  )
}

export default Invoice