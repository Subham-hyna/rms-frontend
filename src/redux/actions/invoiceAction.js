import { allInvoicesFail, allInvoicesLoading, allInvoicesSuccess, clearError, clearMessage, generateInvoiceFail, generateInvoiceLoading, generateInvoiceSuccess, invoiceSummaryFail, invoiceSummaryLoading, invoiceSummarySuccess, paidInvoiceFail, paidInvoiceLoading, paidInvoiceSuccess, singleInvoiceFail, singleInvoiceRequest, singleInvoiceSuccess, updateInvoiceFail, updateInvoiceLoading, updateInvoiceSuccess } from "../reducers/invoiceReducer";
import { server } from "../store";
import axios from "axios";

// Generate Single Invoice
export const generateSingleInvoice = (kotId,shopId) => async (dispatch) => {
    try {
      dispatch(generateInvoiceLoading());
  
      let token = localStorage.getItem("Access-Token");
  
      const config = { headers: { 
        'Authorization': `Bearer ${token}` 
      },
      withCredentials: true
      }
  
      let link = `${server}/invoices/single-invoice/${shopId}`;

      const { data } = await axios.post(link,{kotId},config);
  
      dispatch(generateInvoiceSuccess(data));
    } catch (error) {
      dispatch(generateInvoiceFail(error.response.data.message));
    }
};

// Generate Table Invoice
export const generateTableInvoice = (tableId,shopId) => async (dispatch) => {
    try {
      dispatch(generateInvoiceLoading());
  
      let token = localStorage.getItem("Access-Token");
  
      const config = { headers: { 
        'Authorization': `Bearer ${token}` 
      },
      withCredentials: true
      }
  
      let link = `${server}/invoices/table-invoice/${shopId}`;

      const { data } = await axios.post(link,{tableId},config);
  
      dispatch(generateInvoiceSuccess(data));
    } catch (error) {
      dispatch(generateInvoiceFail(error.response.data.message));
    }
};

// Pay invoice
export const paidInvoice = (invoiceId,paymentMode,amountReceived,shopId) => async (dispatch) => {
    try {
      dispatch(paidInvoiceLoading());
  
      let token = localStorage.getItem("Access-Token");
  
      const config = { headers: { 
        'Authorization': `Bearer ${token}` 
      },
      withCredentials: true
      }
  
      let link = `${server}/invoices/pay-invoice/${invoiceId}/${shopId}`;

      const { data } = await axios.put(link,{paymentMode,amountReceived},config);
  
      dispatch(paidInvoiceSuccess(data));
    } catch (error) {
      dispatch(paidInvoiceFail(error.response.data.message));
    }
};

// Add Charges
export const addCharges = (invoiceId,deliveryCharges,packingFee,discount,shopId) => async (dispatch) => {
    try {
      dispatch(updateInvoiceLoading());
  
      let token = localStorage.getItem("Access-Token");
  
      const config = { headers: { 
        'Authorization': `Bearer ${token}` 
      },
      withCredentials: true
      }
  
      let link = `${server}/invoices/add-charges/${invoiceId}/${shopId}`;

      const { data } = await axios.put(link,{deliveryCharges,packingFee,discount},config);
  
      dispatch(updateInvoiceSuccess(data));
    } catch (error) {
      dispatch(updateInvoiceFail(error.response.data.message));
    }
};

// Get All Invoices
export const getInvoices = (q = "",shopId,currentPage=1,paymentMode="",startDate="",endDate="") => async (dispatch) => {
  try {
    dispatch(allInvoicesLoading());

    let token = localStorage.getItem("Access-Token");

    const config = { headers: { 
      'Authorization': `Bearer ${token}` 
    },
    withCredentials: true
    }

    let link = `${server}/invoices/get-invoices/${shopId}?q=${q}&page=${currentPage}&startDate=${startDate}&endDate=${endDate}`;

    if(paymentMode !==""){
      link = `${server}/invoices/get-invoices/${shopId}?q=${q}&page=${currentPage}&paymentMode=${paymentMode}&startDate=${startDate}&endDate=${endDate}`;
    }

    const { data } = await axios.get(link,config);
    console.log(data)

    dispatch(allInvoicesSuccess(data));
  } catch (error) {
    dispatch(allInvoicesFail(error.response.data.message));
  }
};

// Get Single Invoice
export const getSingleInvoice = (invoiceId) => async (dispatch) => {
  try {
    dispatch(singleInvoiceRequest());

    let link = `${server}/invoices/get-invoice/${invoiceId}`;

    const { data } = await axios.get(link);

    dispatch(singleInvoiceSuccess(data));
  } catch (error) {
    dispatch(singleInvoiceFail(error.response.data.message));
  }
};

// Get Invoice Summary
export const getInvoiceSummary = (shopId,startDate,endDate,password) => async (dispatch) => {
  try {
    dispatch(invoiceSummaryLoading());

    let token = localStorage.getItem("Access-Token");
    
    const config = { headers: { 
      'Authorization': `Bearer ${token}` 
    },
    withCredentials: true
  }

    let link = `${server}/invoices/get-invoiceSummary/${startDate}/${endDate}/${shopId}`;

    const { data } = await axios.post(link,{password},config);

    dispatch(invoiceSummarySuccess(data));
  } catch (error) {
    dispatch(invoiceSummaryFail(error.response.data.message));
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch(clearError());
};
  
//Clearing Message
export const clearMessages = () => async (dispatch) => {
    dispatch(clearMessage());
};
