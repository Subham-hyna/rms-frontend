import React from 'react'
import './App.css';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
// import {Toaster} from 'react-hot-toast';
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
import VerifyUser from './pages/VerifyUser/VerifyUser';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Login from './pages/Login/Login';
import RegisterOwner from './pages/RegisterOwner/RegisterOwner'
import ErrorPage from './pages/ErrorPage/ErrorPage';
import TableLayout from './pages/TableLayout/TableLayout';
import Shops from './pages/Shops/Shops';
import Dashboard from './pages/Dashboard/Dashboard';
import CustomerLayout from './pages/CustomerLayout/CustomerLayout';
import ItemsLayout from './pages/ItemsLayout/ItemsLayout';
import EmployeesLayout from './pages/EmployeesLayout/EmployeesLayout';
import InvoiceLayout from './pages/InvoiceLayout/InvoiceLayout';
import OrderLayout from './pages/OrderLayout/OrderLayout';

function App() {
  return (
    <>
    <Router>
     <div className='App'>
      <Routes>
         <Route exact={true} path='/user/forgot-password' element={<ForgotPassword />} />
         <Route exact={true} path='/' element={<Login />} />
         <Route exact={true} path='/user/register-owner' element={<RegisterOwner />} />
         <Route exact={true} path='/user/verify/:token' element={<VerifyUser />} />
         <Route exact={true} path='/user/reset-password/:token' element={<ResetPassword />} />
         <Route exact={true} path='*' element={<ErrorPage />} />


          {/* Private Only for Owner */}

         <Route exact={true} path='/shops' element={<Shops />} />
         <Route exact={true} path='/tables/table/:shopName/:shopId' element={<TableLayout />} />
         <Route exact={true} path='/tables/area/:shopName/:shopId' element={<TableLayout />} />
         <Route exact={true} path='/customers/customer/:shopName/:shopId' element={<CustomerLayout />} />
         <Route exact={true} path='/employees/employee/:shopName/:shopId' element={<EmployeesLayout />} />
         <Route exact={true} path='/items/item/:shopName/:shopId' element={<ItemsLayout />} />
         <Route exact={true} path='/items/category/:shopName/:shopId' element={<ItemsLayout />} />
         <Route exact={true} path='/invoices/invoice/:shopName/:shopId' element={<InvoiceLayout />} />
         <Route exact={true} path='/dashboard/:shopName/:shopId' element={<Dashboard />} />
         <Route exact={true} path='/orders/order/:shopName/:shopId' element={<OrderLayout />} />
         <Route exact={true} path='/orders/manage/:shopName/:shopId' element={<OrderLayout />} />
         <Route exact={true} path='/orders/table/:shopName/:shopId' element={<OrderLayout />} />
         </Routes>
     </div>
     </Router>
       {/* <Toaster 
       position='top-right'
       /> */}
   </>
  );
}

export default App;
