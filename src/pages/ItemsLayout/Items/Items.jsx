import React, { useState } from 'react'
import PageHeading from '../../../components/ui/pageHeading/pageHeading'
import AddItemModal from '../../../components/modals/AddItemModal/AddItemModal'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { Switch, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTableDetailsModal from '../../../components/modals/EditTableDetailsModal/EditTableDetailsModal';
import ConfirmationModal from '../../../components/modals/ConfirmationModal/ConfirmationModal';
import RefreshIcon from '@mui/icons-material/Refresh';
import DownloadIcon from '@mui/icons-material/Download';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Items = () => {

  const [activeTab, setActiveTab] = useState("ALL");
  const [gridView, setGridView] = useState(true);    
  const [vegTab, setVegTab] = useState(false);
  const [nonVegTab, setNonVegTab] = useState(false);
  const [available, setAvailable] = useState("");

  const itemSearch = (value) => {
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

  const items = [
    {
        "_id": "66d8a4cd2cc63ecd1b1554bc",
        "name": "Baby Corn",
        "categoryId": {
            "_id": "66d88d16e2beb007cffa2c84",
            "name": "STARTERS"
        },
        "price": 180,
        "mealType": "VEG",
        "isAvailable": false,
        "isStar": false,
        "shopId": "66d7375fb62d65233df4ce36",
        "__v": 0,
        "shortCode": "BC"
    },
    {
        "_id": "66d8a4fa2cc63ecd1b1554d0",
        "name": "Chicken Pakora",
        "categoryId": {
            "_id": "66d88d16e2beb007cffa2c84",
            "name": "STARTERS"
        },
        "price": 120,
        "mealType": "NONVEG",
        "isAvailable": true,
        "isStar": false,
        "shopId": "66d7375fb62d65233df4ce36",
        "__v": 0
    },
    {
        "_id": "66d8a5112cc63ecd1b1554d7",
        "name": "Dal Makhani",
        "categoryId": {
            "_id": "66d88d2de2beb007cffa2c94",
            "name": "DAL"
        },
        "price": 120,
        "mealType": "VEG",
        "isAvailable": true,
        "isStar": false,
        "shopId": "66d7375fb62d65233df4ce36",
        "__v": 0
    },
    {
        "_id": "66d8a51c2cc63ecd1b1554de",
        "name": "Dal Tarke",
        "categoryId": {
            "_id": "66d88d2de2beb007cffa2c94",
            "name": "DAL"
        },
        "price": 100,
        "mealType": "VEG",
        "isAvailable": true,
        "isStar": false,
        "shopId": "66d7375fb62d65233df4ce36",
        "__v": 0
    },
    {
        "_id": "66d8a5272cc63ecd1b1554e5",
        "name": "Chicken Tarke",
        "categoryId": {
            "_id": "66d88d2de2beb007cffa2c94",
            "name": "DAL"
        },
        "price": 130,
        "mealType": "NONVEG",
        "isAvailable": true,
        "isStar": false,
        "shopId": "66d7375fb62d65233df4ce36",
        "__v": 0
    }
]

  const changeStarStatus = (_id) => {
    console.log("hi");
  }

  const changeAvailbilityStatus = (_id) => {
    console.log("hi");
  }

  const handleVegTabChange = () => {
    setVegTab(!vegTab);
    setNonVegTab(false);
  }

  const handleNonVegTabChange = () => {
    setVegTab(false);
    setNonVegTab(!nonVegTab);
  }

  return (
    <main>
        <PageHeading 
        heading={"Items"} 
        subHeading={"To View and add items"} 
        placeholder={"by items or short code"}
        searchHandler={itemSearch}
        button={<AddItemModal buttonIcon={<AddCircleOutlineIcon/>} buttonText={"Add Item"} />}
        tooltip={"Add Item"}
         />

         <div className='right-page-middle'>
            <div>
            <div className='right-page-middle-category'>
                {categories && categories.length > 0 && <div className='right-page-middle-category-items'>
                    <li onClick={(e)=>{setActiveTab("ALL")}} className={activeTab === "ALL" ? "category-active-tab" : ""} ><pre>ALL</pre></li>
                    <li onClick={(e)=>{setActiveTab("STARRED")}} className={activeTab === "STARRED" ? "category-active-tab" : ""} ><pre>STARRED</pre></li>
                    {categories.map((m,i)=>(
                    <li key={i} onClick={(e)=>{setActiveTab(m.name.toLowerCase())}} className={activeTab === m.name.toLowerCase() ? "category-active-tab" : ""} ><pre>{m.name}</pre></li>
                ))}
                </div>}
            </div>
            </div>

            <div className='right-page-content'>
                <div className='right-page-content-viewBy'>
                <form>
      <Tooltip title="Sort by Availablity">
      <select
        value={available}
        onChange={(e)=>setAvailable(e.target.value)}
      >
        <option value="">Availabity</option>
        <option value="ALL">ALL</option>
        <option value="available">Available</option>
        <option value="not available">Not Available</option>
      </select>
      </Tooltip>
    </form>
                      {<span onClick={handleVegTabChange}>
                        <div style={vegTab ? {backgroundColor: "var(--green)"} : {}}></div>
                        <p>Veg</p>
                      </span>}
                      { <span onClick={handleNonVegTabChange}>
                        <div style={nonVegTab ? {backgroundColor: "var(--red)"} : {}}></div>
                        <p><pre>Non Veg</pre></p>
                      </span>}
                    <Tooltip title="Downnload"><DownloadIcon /></Tooltip>
                    <Tooltip title="Refresh"><RefreshIcon /></Tooltip>
                    <p><pre>View by</pre> </p>
                    <div>
                    <Tooltip title="Grid"><GridViewIcon onClick={()=>setGridView(true)} style={gridView ? {color: "var(--violet)"} : {}} /></Tooltip>
                    <Tooltip title="Row"><TableRowsIcon onClick={()=>setGridView(false)} style={gridView ? {} : {color: "var(--violet)"}} /></Tooltip>
                    </div>
                </div>
                      {activeTab && <div className='showing-result'>
                        <p>Showing Result for : {activeTab.toUpperCase()} {vegTab && 'veg'} {nonVegTab && 'non veg'} {available && available !== "ALL" && available} Items</p>
                      </div>}
                {gridView ? 
                <div className='right-page-content-grid' style={items?.length === 0 ? {justifyContent:"center", alignItems:"center"}:{}}>
                    {items.length > 0 ?
                        <>
                            {items.map((t,i)=>(
                                <div className='table-grid' key={i} style={t.shape === "CIRCLE" ? {borderRadius:"100%"}:{}}>
                                    <h3>{t.name}</h3>
                                    <p>{t.categoryId.name}</p>
                                    <p><pre>{t.price}</pre></p>
                                    <span>
                                            <EditTableDetailsModal><EditIcon style={{fontSize: "10px"}} /></EditTableDetailsModal>
                                            <ConfirmationModal><DeleteIcon style={{fontSize: "10px"}} /></ConfirmationModal>
                                    </span>
                                </div>
                            ))}
                        </>
                        :
                        <h1>No Items</h1>
                    }
                </div>
                :
                <div className='right-page-content-row'>
                    {items.length > 0 ?
                        <>
                            <table className='table'>
                                <thead>
                                  <tr>
                                    <th><pre>Item</pre></th>
                                    {categories.length > 0 && <th>Category</th>}
                                    <th><pre>Price</pre></th>
                                    <th><pre>Short Code</pre></th>
                                    <th>Star</th>
                                    <th>Avaiable</th>
                                    <th><pre>Action</pre></th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {
                                    items.map((t,index)=>(
                                      <tr key={index}>
                                        <td>{t.name}</td>
                                        {categories.length > 0 && <td><pre>{t.categoryId.name}</pre></td>}
                                        <td>
                                          {t.price}
                                        </td>
                                        <td>{t.shortCode}</td>
                                        <td onClick={()=>changeStarStatus(t.name)}>{t.isStar ? <StarIcon style={{fontSize:"20px",color:"var(--violet)"}} /> : <StarBorderIcon style={{fontSize:"20px",color:"var(--darkgrey)"}} /> }</td>
                                        <td><Switch size="small" checked={t.isAvailable} onChange={()=>changeAvailbilityStatus(t)} /></td>
                                        <td>
                                            <EditTableDetailsModal><EditIcon /></EditTableDetailsModal>
                                            <ConfirmationModal><DeleteIcon /></ConfirmationModal>
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                                </table>
                        </>
                        :
                        <h1>No Items</h1>
                    }
                </div>}
            </div>
         </div>
    </main>
  )
}

export default Items