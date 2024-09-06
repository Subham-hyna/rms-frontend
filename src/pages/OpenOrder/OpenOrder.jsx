import React, { useEffect, useState } from 'react'
import './OpenOrder.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import RefreshIcon from '@mui/icons-material/Refresh';
import { tableExistInShop } from '../../redux/actions/tableAction';
import { getCategories } from '../../redux/actions/categoryAction';
import { Tooltip } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import logo from "../../assets/logo.svg"
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import { getItems } from '../../redux/actions/itemAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ViewCartModal from '../../components/modals/ViewCartModal/ViewCartModal';

const OpenOrder = () => {
    const [activeTab, setActiveTab] = useState("ALL");
    const [categoryId, setCategoryId] = useState("")  
    const [mealType, setMealType] = useState("");
    const { shopId, tableNo } = useParams();
    const navigate = useNavigate();
    const [searchBoxValue, setSearchBoxValue] = useState("");
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [paymentCounter, setPaymentCounter] = useState(0);
    const [itemCounter, setItemCounter] = useState(0);
    
    // const categories = [
    //         {
            
    //                 "_id": "66d9570de0e25a12e3167d36",
    //                 "name": "DAL",
    //                 "noOfItems": 0,
    //                 "priority": null,
    //                 "shopId": "66d7375fb62d65233df4ce36",
    //                 "__v": 0
    //             },
    //             {
    //         "_id": "66d9fd5cbd0880ca1a1c1cf9",
    //         "name": "CHINESE",
    //         "noOfItems": 0,
    //         "priority": null,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "66d9fd62bd0880ca1a1c1d02",
    //         "name": "DRINKS",
    //         "noOfItems": 0,
    //         "priority": null,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "66d9fd6abd0880ca1a1c1d0b",
    //         "name": "CHOWMIN",
    //         "noOfItems": 0,
    //         "priority": null,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "66d9fd73bd0880ca1a1c1d14",
    //         "name": "MAIN COURSE",
    //         "noOfItems": 0,
    //         "priority": null,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "66d9fd7dbd0880ca1a1c1d1d",
    //         "name": "SPECIAL",
    //         "noOfItems": 0,
    //         "priority": null,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "66d9fd87bd0880ca1a1c1d26",
    //         "name": "ROTI",
    //         "noOfItems": 0,
    //         "priority": null,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "66d88d16e2beb007cffa2c84",
    //         "name": "STARTERS",
    //         "noOfItems": 3,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0,
    //         "priority": 4
    //     },
    //     {
    //         "_id": "66d88d27e2beb007cffa2c8f",
    //         "name": "BIRIYANI",
    //         "noOfItems": 6,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0,
    //         "priority": 7
    //     }
    // ]

    // const items = [
    //     {
    //         "_id": "66d8a4cd2cc63ecd1b1554bc",
    //         "name": "Baby Corn",
    //         "categoryId": {
    //             "_id": "66d88d16e2beb007cffa2c84",
    //             "name": "STARTERS"
    //         },
    //         "price": 180,
    //         "mealType": "VEG",
    //         "isAvailable": true,
    //         "isStar": false,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0,
    //         "shortCode": "BC"
    //     },
    //     {
    //         "_id": "66d8a4cd2cc63ecd1b1454bc",
    //         "name": "Baby Corn",
    //         "categoryId": {
    //             "_id": "66d88d16e2beb007cffa2c84",
    //             "name": "STARTERS"
    //         },
    //         "price": 180,
    //         "mealType": "VEG",
    //         "isAvailable": true,
    //         "isStar": false,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0,
    //         "shortCode": "BC"
    //     },
    //     {
    //         "_id": "66d8a4c62cc63ecd1b1454bc",
    //         "name": "Baby Corn",
    //         "categoryId": {
    //             "_id": "66d88d16e2beb007cffa2c84",
    //             "name": "STARTERS"
    //         },
    //         "price": 180,
    //         "mealType": "VEG",
    //         "isAvailable": true,
    //         "isStar": false,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0,
    //         "shortCode": "BC"
    //     },
    //     {
    //         "_id": "66d8a4c62cc63fcd1b1454bc",
    //         "name": "Baby Corn",
    //         "categoryId": {
    //             "_id": "66d88d16e2beb007cffa2c84",
    //             "name": "STARTERS"
    //         },
    //         "price": 180,
    //         "mealType": "VEG",
    //         "isAvailable": true,
    //         "isStar": false,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0,
    //         "shortCode": "BC"
    //     },
    //     {
    //         "_id": "66d8a4fa2cc63ecd1b1554d0",
    //         "name": "Chicken Pakora",
    //         "categoryId": {
    //             "_id": "66d88d16e2beb007cffa2c84",
    //             "name": "STARTERS"
    //         },
    //         "price": 120,
    //         "mealType": "NONVEG",
    //         "isAvailable": true,
    //         "isStar": true,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "66d8c6091aadb3c5f39d6676",
    //         "name": "Veg Biriyani",
    //         "categoryId": {
    //             "_id": "66d88d27e2beb007cffa2c8f",
    //             "name": "BIRIYANI"
    //         },
    //         "price": 130,
    //         "mealType": "VEG",
    //         "isAvailable": true,
    //         "isStar": true,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0,
    //         "shortCode": "VB"
    //     },
    //     {
    //         "_id": "66d8c6121aadb3c5f39d667d",
    //         "name": "Egg Biriyani",
    //         "categoryId": {
    //             "_id": "66d88d27e2beb007cffa2c8f",
    //             "name": "BIRIYANI"
    //         },
    //         "price": 130,
    //         "mealType": "NONVEG",
    //         "isAvailable": true,
    //         "isStar": false,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "66d8c6191aadb3c5f39d6684",
    //         "name": "Chicken Biriyani",
    //         "categoryId": {
    //             "_id": "66d88d27e2beb007cffa2c8f",
    //             "name": "BIRIYANI"
    //         },
    //         "price": 130,
    //         "mealType": "NONVEG",
    //         "isAvailable": true,
    //         "isStar": true,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "66d94b2de0e25a12e31678af",
    //         "name": "Chicken Butter Masala",
    //         "categoryId": {
    //             "_id": "66d88d27e2beb007cffa2c8f",
    //             "name": "BIRIYANI"
    //         },
    //         "price": 220,
    //         "mealType": "NONVEG",
    //         "isAvailable": true,
    //         "isStar": false,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "66d94bb9e0e25a12e31678c4",
    //         "name": "Panner Butter Masala",
    //         "categoryId": {
    //             "_id": "66d88d27e2beb007cffa2c8f",
    //             "name": "BIRIYANI"
    //         },
    //         "price": 175,
    //         "mealType": "VEG",
    //         "isAvailable": true,
    //         "isStar": false,
    //         "shopId": "66d7375fb62d65233df4ce36",
    //         "__v": 0,
    //         "shortCode": "PBM"
    //     }
    // ]

    const { items } = useSelector((state)=>state.item)
    const { categories } = useSelector((state)=>state.category);
    const{ shopName, tableExistLoading, tableExist} = useSelector((state)=>state.table);
    const dispatch = useDispatch();

    const categorySorting = ((tab,id) => {
        setActiveTab(tab);
        if(tab === "ALL"){
            setCategoryId("");
        }
        else{
         setCategoryId(id)
        }
      })

      const handleChangeMealType = (value) => {
        if(value === "VEG" && mealType === "VEG"){
          setMealType("")
        }
        else if (value === "NONVEG" && mealType === "NONVEG"){
          setMealType("")
        }
        else{
          setMealType(value)
        }
    
      }

      const resetHandler = () => {
        dispatch(getItems("",shopId))
        setSearchBoxValue("")
        setActiveTab("ALL")
        setMealType("")
        setCategoryId("")
      }

      const handlePushCartItems = (i) => {

        if(cartItems.length > 0){
            const item = cartItems.filter((c)=>{
                return c.foodItemId === i._id
            })
            
            if(item.length > 0){
                
                const index = cartItems.findIndex((c)=>{return c.foodItemId === i._id})
                cartItems[index].qty += 1;
                setPaymentCounter(paymentCounter+i.price);
                setItemCounter(itemCounter+1);
                setCartItems([...cartItems])
            }
            else{
                const object = {
                    foodItemId : i._id,
                    name : i.name,
                    price : i.price,
                    qty : 1
                }
                setPaymentCounter(paymentCounter+i.price);
                setItemCounter(itemCounter+1);
                setCartItems([...cartItems,object])
            }
            
        }
        else{
            const object = {
                foodItemId : i._id,
                name : i.name,
                price : i.price,
                qty : 1
            }
            setPaymentCounter(i.price);
            setItemCounter(itemCounter+1);
            setCartItems([...cartItems,object])
            
            console.log(cartItems)
        }
      }

      const handlePopCartItems = (i) => {
      
        if(cartItems.length > 0){
          const item = cartItems.filter((c)=>{
            return c.foodItemId === i._id
          })
      
          if(item.length > 0){
            const index = cartItems.findIndex((c)=>{return c.foodItemId === i._id})
            if(cartItems[index].qty === 1){
              deleteCartItems(i);
              setPaymentCounter(paymentCounter - i.price);
              setItemCounter(itemCounter - 1);
              return;
            }
            cartItems[index].qty -= 1;
            setPaymentCounter(paymentCounter - i.price)
            setItemCounter(itemCounter - 1);
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

      const deleteCartItems = (item) => {
        setPaymentCounter(paymentCounter - (item.qty * item.price))
        setCartItems(cartItems.filter((c)=>{return item._id !== c.foodItemId}))
      }

      const handleCartItemsChange = (c,p,i) =>{
        setCartItems(c)
        setPaymentCounter(p)
        setItemCounter(i)
      }

    useEffect(()=>{
        dispatch(tableExistInShop(tableNo,shopId));
        dispatch(getCategories(shopId))
                dispatch(getItems(searchBoxValue,shopId,mealType,"","",categoryId))
    },[dispatch,tableNo,shopId,mealType,categoryId,searchBoxValue])
    
    useEffect(()=>{
        if(tableExist === false){
            navigate("/404")
        }
    },[tableExistLoading,tableExist,navigate])

  return (
    <main className='open-order'>
        <header className='open-order-header'>
            <nav className='open-order-nav'>
                <span className='open-order-nav-logo'>
                    <img src={logo} alt='logo' />
                    <p><pre>{shopName}</pre></p>
                </span>
                <span className='open-order-nav-search-bar'>
                    <form>
                        {showSearchBar && <input type='text' placeholder='Search for item' onChange={(e)=>{setSearchBoxValue(e.target.value)}} value={searchBoxValue} />}
                        <SearchRoundedIcon onClick={()=>setShowSearchBar(!showSearchBar)}  />
                    </form>
                </span>
            </nav>
            <div className='open-order-view'>
                <span className='open-order-view-tableNo'>
                <TableRestaurantIcon />
                <p>3</p>
                </span>
                <span className='open-order-view-sort'>
                {<span onClick={()=>handleChangeMealType("VEG")}>
                        <div style={mealType === "VEG" ? {backgroundColor: "var(--green)"} : {}}></div>
                        <p>Veg</p>
                      </span>}
                      { <span onClick={()=>handleChangeMealType("NONVEG")}>
                        <div style={mealType === "NONVEG" ? {backgroundColor: "var(--red)"} : {}}></div>
                        <p><pre>Non Veg</pre></p>
                      </span>}
                    <Tooltip title="Refresh"><RefreshIcon onClick={resetHandler} /></Tooltip>
                </span>
            </div>
       <div className='right-page-middle'>
            <div>
            <div className='right-page-middle-category'>
                {categories && categories?.length > 0 && <div className='right-page-middle-category-items'>
                    <li onClick={(e)=>{categorySorting("ALL")}} className={activeTab === "ALL" ? "category-active-tab" : ""} ><pre>ALL</pre></li>
                    {categories.map((m,i)=>(
                    <li key={i} onClick={(e)=>{categorySorting(m.name.toLowerCase(),m._id)}} className={activeTab === m.name.toLowerCase() ? "category-active-tab" : ""} ><pre>{m.name}</pre></li>
                ))}
                </div>}
            </div>
            </div>
         </div>
         {activeTab && <div className='showing-result'>
                        <p>Showing Result for : {activeTab.toUpperCase()} {mealType && mealType} Items {searchBoxValue && searchBoxValue}</p>
                      </div>}
         </header>
         <div className='open-order-content'>
            {items && items.length >0 ?
            <>
               {items?.map((item,index)=>(
                 <div key={index} class="food-item-row">
                 <div class="food-item-image">
                   <KebabDiningIcon />
                 </div>
                 <div className="food-item-details">
                   <h4><span className={item.mealType === "VEG" ? "veg-logo" : "non-veg-logo"}></span> {item.name}</h4>
                   <p className="food-item-price">Rs. {item.price}</p>
                 </div>
                 { cartItems.filter((c)=>{
                return c.foodItemId === item._id
            }).length === 0
             ? 
                 <button className="add-to-cart-btn" onClick={()=>handlePushCartItems(item)}>Add to Cart</button>
                 :
              <div className="quantity-selector">
                  <button className="minus-btn"onClick={()=>handlePopCartItems(item)}>−</button>
                  <span className="quantity-display" >{cartItems.find((c)=>{return c.foodItemId === item._id}).qty}</span>
                  <button className="plus-btn" onClick={()=>handlePushCartItems(item)}>+</button>
                </div>}
               </div>
               ))}
            </>
            :
            <h1>No items</h1>    
        }
         </div>
         <div className={cartItems.length > 0 ? "cart-popup active" : "cart-popup"}>
              <div class="cart-popup-details">
                <ShoppingCartIcon className="cart-popup-logo" />
                <div className="cart-popup-info">
                  <h4>Cart Summary</h4>
                  <p>{itemCounter} Items in cart</p>
                  <p>Rs. {paymentCounter}</p>
                </div>
              </div>
              <ViewCartModal handleCartItemsChange={handleCartItemsChange} paymentCounter={paymentCounter} itemCounter={itemCounter} cartItems={cartItems} >View Cart</ViewCartModal>
            </div>
         </main>
  )
}

export default OpenOrder