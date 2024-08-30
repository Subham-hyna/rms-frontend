import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ToggleMode from '../ToogleMode/ToogleMode';
import { Tooltip } from '@mui/material';

const Navbar = ({listOfTabs,activeTab}) => {

    const tables = [
        {
            _id: "gefghfds",
            name: "1"
        },
        {
            _id: "gefghfdssdf",
            name: "2"
        },
        {
            _id: "gefghsdfsds",
            name: "3"
        },
    ]

    const kot = [ 
        {
            "tableId" : {
                "name" : "1"
            },
            "tokenNo" : "23111"
        },
        {
            "tableId" : {
                "name" : "2"
            },
            "tokenNo" : "23411"
        },
        {
            "tableId" : {
                "name" : "3"
            },
            "tokenNo" : "25171"
        },
    ]


    const handleChange = () => {
        console.log("first")
    }
  return (
    <>
    <nav className='navbar'>
       <ul className='navbar-left'>
       {listOfTabs.map((m,i)=>
            <Link key={i} className={activeTab === m.title.toLowerCase() ? "nav-active-tab" : ""} to={m.link} >{m.title}</Link>
        )}
       </ul>
       <div className='navbar-right'>
            {kot?.length > 0 && <div className='notify'></div>}
            <Tooltip title={"KOT"}>
            <NotificationsActiveIcon />
            </Tooltip>
            <Tooltip title={"Switch"}>
            <ToggleMode />
            </Tooltip>
            <Link to={"/orders/dfh/dsg"}><pre>New Order</pre></Link>
            <select onChange={(e)=>handleChange(e.target.value)}>
                <option value={""}>Print Bills</option>
                {tables.map((m,i)=>(
                <option key={i} value={m._id}>{m.name}</option>
                ))}
            </select>
       </div>
    </nav>
    </>
  )
}

export default Navbar