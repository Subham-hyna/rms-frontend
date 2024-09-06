import React, { useEffect } from 'react'
import './QROrder.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { tableExistInShop } from '../../redux/actions/tableAction';
import logo from "../../assets/logo.svg"
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const QROrder = () => {

    const { shopId, tableNo } = useParams();
    const navigate = useNavigate();

    const{ shopName, tableExistLoading, tableExist} = useSelector((state)=>state.table);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(tableExistInShop(tableNo,shopId));
    },[dispatch,tableNo,shopId])

    useEffect(()=>{
        if(tableExist === false){
            navigate("/404")
        }
    },[tableExistLoading,tableExist,navigate])

  return (
    <main className='qr-order'>
        <div className='qr-order-container'>
            <div className='qr-order-container-header'>
                <img src={logo} alt='Logo' />
                <h1>{shopName && shopName}</h1>
            </div>
            <h1>Welcome</h1>
            <Link to={`/orders/dine-in/66d7375fb62d65233df4ce36/F2`} className='qr-order-container-button'>
                <LocalDiningIcon /> Order now
            </Link>
        </div>
    </main>
  )
}

export default QROrder