import React, { useState } from 'react'
import './Order.css'
import PageHeading from '../../../components/ui/pageHeading/pageHeading';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Tooltip } from '@mui/material';
import { orderType } from '../../../constanst';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Order = () => {
  const [activeTab, setActiveTab] = useState("MOST SOLD");
  const [orderTableNo, setOrderTableNo] = useState("");
  const [selectedOrderType, setSelectedOrderType] = useState("DINE IN")
  const [newOrder, setNewOrder] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [paymentCounter, setPaymentCounter] = useState(0);
  
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
    _id: "1",
    name: "Naan",
    shortCode: "CL",
    categoryId : {
      name : "Starters"
    },
    isVeg: false,
    isAvailable: true,
    isStar: true,
    price: 70
  },
  { 
    _id: "2",
    name: "Dal Makani",
    shortCode: "CL",
    categoryId : {
      name : "DAL"
    },
    isVeg: false,
    isAvailable: true,
    isStar: true,
    price: 120
  },
  {
    _id: "3",
    name: "Chicken Biryani",
    shortCode: "CL",
    categoryId : {
      name : "BIRIYANI"
    },
    isVeg: false,
    isAvailable: false,
    isStar: true,
    price: 300
  },
  {
    _id: "5",
    name: " Half Chicken Tandoori",
    shortCode: "CL",
    categoryId : {
      name : "CHINESE"
    },
    isVeg: false,
    isAvailable: false,
    isStar: true,
    price: 250
  },
  {
    _id: "6",
    name: " Half Chicken Tandoori",
    shortCode: "CL",
    categoryId : {
      name : "CHINESE"
    },
    isVeg: false,
    isAvailable: false,
    isStar: true,
    price: 250
  },
  {
    _id: "4",
    name: " Half Chicken Tandoori",
    shortCode: "CL",
    categoryId : {
      name : "CHINESE"
    },
    isVeg: false,
    isAvailable: false,
    isStar: true,
    price: 250
  },

]

// const [showItems, setShowItems] = useState([items && items]);

const tables = [
  // {
  //     name: "1",
  //     noOfSeats: "4",
  //     areaId : { name : "swimming pool"},
  //     shape: "RECTANGLE"
  // },
  // {
  //     name: "1",
  //     noOfSeats: "4",
  //     areaId : { name : "swimming pool"},
  //     shape: "RECTANGLE"
  // },
  // {
  //     name: "1",
  //     noOfSeats: "4",
  //     areaId : { name : "swimming pool"},
  //     shape: "RECTANGLE"
  // },
  // {
  //     name: "1",
  //     noOfSeats: "4",
  //     areaId : { name : "swimming pool"},
  //     shape: "RECTANGLE"
  // },
  // {
  //     name: "1",
  //     noOfSeats: "4",
  //     areaId : { name : "swimming pool"},
  //     shape: "RECTANGLE"
  // },
  {
      name: "1",
      noOfSeats: "4",
      areaId : { name : "swimming pool"},
      shape: "RECTANGLE"
  },
  {
      name: "1",
      noOfSeats: "4",
      areaId : { name : "swimming pool"},
      shape: "RECTANGLE"
  },
  {
      name: "1",
      noOfSeats: "4",
      areaId : { name : "swimming pool"},
      shape: "RECTANGLE"
  },
  {
      name: "2",
      noOfSeats: "2",
      areaId : { name : "ground"},
      shape: "CIRCLE"
  },
  // {
  //     name: "3",
  //     noOfSeats: "4",
  //     areaId : { name : "ground"},
  //     shape: "RECTANGLE"
  // },
  // {
  //     name: "4",
  //     noOfSeats: "6",
  //     areaId : { name : "ground"},
  //     shape: "CIRCLE"
  // },
  // {
  //     name: "5",
  //     noOfSeats: "6",
  //     areaId : { name : "ground"},
  //     shape: "CIRCLE"
  // },
  // {
  //     name: "6",
  //     noOfSeats: "2",
  //     areaId : { name : "ground"},
  //     shape: "RECTANGLE"
  // },
]

// const kot = [
//   {tokenNo: "#3241AE",
//   orderValue: "1234",
//   isexpire: "false",
//   status enum
//  ItemsId [array] fk
//    tableId objectId fk
//  shopId ObjectId fk
//  specialRequest string}
// ]

const handleNewOrder = () => {
  setNewOrder(true);
  setCartItems([]);
}

// const handleCategoryChange = (name) => {
//   setActiveTab(name);
//   setShowItems(items.filter((i)=>{
//     return i.categoryId.name.toLowerCase() === name;
//   }))
// }

const handlePushCartItems = (i) => {

  if(cartItems.length > 0){
    const item = cartItems.filter((c)=>{
      return c._id === i._id
    })

    if(item.length > 0){

      const index = cartItems.findIndex((c)=>{return c._id === i._id})
      cartItems[index].qty += 1;
      setPaymentCounter(paymentCounter+i.price);
      setCartItems([...cartItems])
    }
    else{
      i.qty = 1;
      setPaymentCounter(paymentCounter+i.price);
      setCartItems([...cartItems,i])
    }
    
  }
  else{
    i.qty = 1;
    setPaymentCounter(i.price);
    setCartItems([...cartItems,i])

  }
}

const handlePopCartItems = (event,i) => {
  event.preventDefault()

  if(cartItems.length > 0){
    const item = cartItems.filter((c)=>{
      return c._id === i._id
    })

    if(item.length > 0){
      const index = cartItems.findIndex((c)=>{return c._id === i._id})
      if(cartItems[index].qty === 1){
        deleteCartItems(i)
        setPaymentCounter(paymentCounter - i.price)
        return;
      }
      cartItems[index].qty -= 1;
      setPaymentCounter(paymentCounter - i.price)
      setCartItems([...cartItems])
    }
    else{
      return;
    }
    
  }
  else{
    return;
  }

}

const itemReduceHandler = (i) => {
  const index = cartItems.findIndex((c)=>{return c._id === i._id})
  if(cartItems[index].qty === 1){
    setPaymentCounter(paymentCounter - i.price)
    deleteCartItems(i)
    return;
  }
  cartItems[index].qty -= 1;
  setPaymentCounter(paymentCounter - i.price)
  setCartItems([...cartItems])
}

const itemIncreaseHandler = (i) => {
  const index = cartItems.findIndex((c)=>{return c._id === i._id})
      cartItems[index].qty += 1;
      setPaymentCounter(paymentCounter + i.price);
      setCartItems([...cartItems])
}

const deleteCartItems = (item) => {
  setPaymentCounter(paymentCounter - (item.qty * item.price))
  setCartItems(cartItems.filter((c)=>{return item._id !== c._id}))
}

// useEffect(()=>{

// },[cartItems,setCartItems])

  return (
    <main>
        <PageHeading 
        heading={"Orders"} 
        subHeading={"To View and add orders"} 
        placeholder={"by items or short code"}
        searchHandler={itemSearch}
         />

<div className='right-page-middle'>
            <div>
            <div className='right-page-middle-category'>
                {categories && categories.length > 0 && <div className='right-page-middle-category-items'>
                    <li onClick={(e)=>{setActiveTab("MOST SOLD")}} className={activeTab === "MOST SOLD" ? "category-active-tab" : ""} ><pre>MOST SOLD</pre></li>
                    <li onClick={(e)=>{setActiveTab("STARRED")}} className={activeTab === "STARRED" ? "category-active-tab" : ""} ><pre>STARRED</pre></li>
                    {categories.map((m,i)=>(
                    <li key={i} onClick={(e)=>{setActiveTab(m.name.toLowerCase())}} className={activeTab === m.name.toLowerCase() ? "category-active-tab" : ""} ><pre>{m.name}</pre></li>
                ))}
                </div>}
            </div>
            </div>

            <div style={{display:"flex",width:"100%", gap:"5px"}}>
            <div className='right-page-content' style={{flex:"2"}}>
                <div className='right-page-content-viewBy'>
                    <Tooltip title="Refresh"><RefreshIcon /></Tooltip>
                </div>
                <div className='right-page-content-grid' style={items?.length === 0 ? {justifyContent:"center", alignItems:"center"}:{}}>
                    {items.length > 0 ?
                        <>
                            {items.map((t,i)=>(
                                <div className='table-grid' style={{cursor:"pointer", justifyContent:"center", alignItems:"center"}} key={i} onClick={()=>handlePushCartItems(t)} onContextMenu={(event)=>handlePopCartItems(event,t)}>
                                    <h3>{t.name}</h3>
                                    <p style={{fontSize: "12px", fontWeight: "500"}}>Rs. {t.price}</p>
                                </div>
                            ))}
                        </>
                        :
                        <h1>No Items</h1>
                    }
                </div>
            </div>
            <div className='right-page-order' style={newOrder ? {} : {justifyContent:"center",alignItems:"center"}} >
            {newOrder ?
              <>
            <Tooltip title="Table No">
                 <select
                   value={orderTableNo}
                   onChange={(e)=>setOrderTableNo(e.target.value)}
                 >
                   <option value="">Select Table no</option>
                   {tables.map((t,i)=>(
                   <option key={i} value={t.name}>Table No. {t.name}</option>

                   ))}
                 </select>
              </Tooltip>
              {orderTableNo !== "" && 
              <>
              <div className='right-page-order-customer'>
              <input type='text' placeholder='Name or Phone No or Email' /> 
              </div>
              <span className='right-page-order-type'>
                    {orderType.map((m,i)=>(
                      <li key={i} className={selectedOrderType === m ? 'active-order-type-tab' : ""} onClick={()=>setSelectedOrderType(m)}><pre>{m}</pre></li>
                    ))}
              </span>
              <div className='right-page-order-table'>
                    <table>
                      <thead>
                        <th>Items</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Action</th>
                      </thead>
                      <tbody>
                        {cartItems.length > 0 && cartItems.map((c,i)=>(
                          <tr key={i}>
                            <td>{c.name}</td>
                            <td><div><Tooltip title="Deduct"><RemoveIcon onClick={()=>itemReduceHandler(c)} /></Tooltip>{c.qty}<Tooltip title="Add"><AddIcon onClick={()=>itemIncreaseHandler(c)} /></Tooltip></div></td>
                            <td>{c.price}</td>
                            <td><Tooltip title="delete"><DeleteForeverIcon onClick={()=>deleteCartItems(c)} style={{color:"var(--red)"}} /></Tooltip></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
              </div>
              {cartItems.length > 0 && <div className='right-page-order-payment'>
                      <span>
                        <pre><p>Total Payment</p></pre>
                        <pre><p>Rs. {paymentCounter}</p></pre>
                      </span>
                      <div className='payment-btn'>
                          <button>PROCEED</button>
                          <button>PRINT</button>
                      </div>
              </div>}
              </>
              }
            </>
            :
            <><button onClick={handleNewOrder} className='new-order-btn'>New Order</button></>  
          }
            </div>
            </div>
         </div>
    </main>
  )
}

export default Order