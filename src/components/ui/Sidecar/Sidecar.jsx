import React, {  useEffect, useState } from 'react'
import './Sidecar.css'
import logo from '../../../assets/logo.svg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GradingIcon from '@mui/icons-material/Grading';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import { Link, useLocation } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Tooltip from '@mui/material/Tooltip';
import ChangePasswordModal from '../../modals/ChangePasswordModal/ChangePasswordModal';

const Sidecar = () => {

  const user = {
    "avatar" : {
      "url" : "https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg"
    },
    "name" : "Subham Dutta",
    "role" : "owner"
  }

  const shop = {
    _id: "jhsafjhasbfs",
    name: "Desi Eshas"
  }

  const [activeTab, setActiveTab] = useState("");
  const [hideSidebar, setHideSidebar] = useState(false);
  const [seeDropdown, setSeeDropdown] = useState(false)


  const { pathname } = useLocation();

  useEffect(()=>{
    const uri = pathname.split("/");
    setActiveTab(uri[1]);
    window.scrollTo(0, 0);

  },[activeTab,pathname]);

  return (
    <>
      <nav style={hideSidebar?{width:"30px" , paddingLeft : "5px"}:{}} className='sidecar'>
        <header className='sidecar-header'>
        <Tooltip title="Restura">
          <Link to="/">
          <img style={hideSidebar?{width:"2rem", height:"2rem"}:{}} src={logo} alt='logo' />
          <h1 style={hideSidebar?{display:"none"}:{}}>restura.</h1>
          </Link>
          </Tooltip>
        </header>

        <ul className='sidecar-center'>
        <Tooltip title="Dashboard">
          <Link to={`/dashboard/${shop.name}/${shop._id}`} className={activeTab === "dashboard" ? "sidecar-active-tab" : ""} onClick={()=>{setActiveTab("dashboard")}}>
            <DashboardIcon />
            <h2 style={hideSidebar?{display:"none"}:{}} >Dashboard</h2>
          </Link>
          </Tooltip>
          <Tooltip title="Tables">
          <Link to={`/tables/table/${shop.name}/${shop._id}`} className={activeTab === "tables" ? "sidecar-active-tab" : ""} onClick={()=>{setActiveTab("tables")}}>
            <TableRestaurantIcon />
            <h2 style={hideSidebar?{display:"none"}:{}} >Table</h2>
          </Link>
          </Tooltip>
          <Tooltip title="Orders">
          <Link to={`/orders/${shop.name}/${shop._id}`} className={activeTab === "orders" ? "sidecar-active-tab" : ""} onClick={()=>{setActiveTab("orders")}}>
            <BorderColorIcon />
            <h2 style={hideSidebar?{display:"none"}:{}} >Order</h2>
          </Link>
          </Tooltip>
          <Tooltip title="Items">
          <Link to={`/items/${shop.name}/${shop._id}`} className={activeTab === "items" ? "sidecar-active-tab" : ""} onClick={()=>{setActiveTab("items")}}>
            <RestaurantIcon />
            <h2 style={hideSidebar?{display:"none"}:{}} >Items</h2>
          </Link>
          </Tooltip>
          <Tooltip title="Kitchen Order Token">
          <Link to={`/kot/${shop.name}/${shop._id}`} className={activeTab === "kot" ? "sidecar-active-tab" : ""} onClick={()=>{setActiveTab("kot")}}>
            <GradingIcon />
            <h2 style={hideSidebar?{display:"none"}:{}} >KOT</h2>
          </Link>
          </Tooltip>
          <Tooltip title="Invoices">
          <Link to={`/invoices/${shop.name}/${shop._id}`} className={activeTab === "invoices" ? "sidecar-active-tab" : ""} onClick={()=>{setActiveTab("invoices")}}>
            <ReceiptIcon />
            <h2 style={hideSidebar?{display:"none"}:{}} >Invoives</h2>
          </Link>
          </Tooltip>
          <Tooltip title="Reports">
          <Link to={`/reports/${shop.name}/${shop._id}`} className={activeTab === "reports" ? "sidecar-active-tab" : ""} onClick={()=>{setActiveTab("reports")}}>
            <AssessmentIcon />
            <h2 style={hideSidebar?{display:"none"}:{}}>Reports</h2>
          </Link>
          </Tooltip>
          <Tooltip title="Employees">
          <Link to={`/employees/${shop.name}/${shop._id}`} className={activeTab === "employees" ? "sidecar-active-tab" : ""} onClick={()=>{setActiveTab("employees")}}>
            <GroupIcon />
            <h2 style={hideSidebar?{display:"none"}:{}}>Employees</h2>
          </Link>
          </Tooltip>
          <Tooltip title="Customers">
          <Link to={`/customers/${shop.name}/${shop._id}`} className={activeTab === "customers" ? "sidecar-active-tab" : ""} onClick={()=>{setActiveTab("customers")}}>
            <GroupsIcon />
            <h2 style={hideSidebar?{display:"none"}:{}}>Customers</h2>
          </Link>
          </Tooltip>
          <Tooltip title="Vouchers">
          <Link to={`/vouchers/${shop.name}/${shop._id}`} className={activeTab === "vouchers" ? "sidecar-active-tab" : ""} onClick={()=>{setActiveTab("vouchers")}}>
            <ReceiptLongIcon />
            <h2 style={hideSidebar?{display:"none"}:{}}>Vouchers</h2>
          </Link>
          </Tooltip>
        </ul>

        {!hideSidebar?
        <footer className='sidecar-footer'>
        <div style={hideSidebar?{display:"none"}:{}}>
          <img src={user?.avatar.url} alt='profile_pic' />
          <h2>{user?.name.split(" ")[0]}</h2>
          <p>{user?.role}</p>
        </div>
        <button onClick={()=>{setSeeDropdown(!seeDropdown)}}>Open Profile</button>
       {seeDropdown && <menu className='sidecar-profile' >
          <li>My Account</li>
          <ChangePasswordModal onClick={()=>{console.log("first")}} >Change Password</ChangePasswordModal>
          <li >Update Avatar</li>
          <li>Logout</li>
        </menu>}


        
      </footer>
      :
      <footer className='sidecar-footer-image'>
        <img src={user?.avatar.url} alt='profile_pic' />
      </footer>
    }
        <div className='sidecar-left-arrow' onClick={()=>{setHideSidebar(!hideSidebar)}}>
          {hideSidebar?<KeyboardArrowRightIcon />:<KeyboardArrowLeftIcon />}
        </div>
      </nav>
    </>
  )
}

export default Sidecar