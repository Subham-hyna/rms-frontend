import React, { useEffect, useState } from 'react'
import './PrintTableModal.css'
import { Modal, Tooltip } from '@mui/material'
import logo from '../../../assets/logo.svg'
import QRCode from 'qrcode'
import { frontend } from '../../../constanst'

const PrintTableModal = ({table,children}) => {

  const [src, setSrc] = useState("")
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const shop = 
{
  "_id": "66d7375fb62d65233df4ce36",
  "name": "Desi Eshas",
  "ownerId": "66d6d7070daa1cc6896b5aae",
  "phoneNo": 6002576479,
  "email": "dsubham490@gmail.com",
  "gstIn": "1234567890224",
  "shopType": "DHABA",
  "employeesId": [],
  "noOfemployees": 0,
  "status": "ACTIVE",
  "address": [
      "sdgds"
  ],
  "createdAt": "2024-09-03T16:20:47.623Z",
  "updatedAt": "2024-09-03T16:20:47.623Z",
  "__v": 0
}

// eslint-disable-next-line
const generateQR = async (text) => {
  try {
    setSrc(await QRCode.toDataURL(text))
  } catch (err) {
    console.error(err)
  }
}

  useEffect(()=>{
    generateQR(`${frontend}/${shop?.name}/${shop?._id}/${table?.name}`)
  },[generateQR,shop.name,shop._id,table.name])

  return (<>
    <Tooltip title="Print">
    {children && <div onClick={handleOpen} className='print-btn'>{children}</div>}
    </Tooltip>
    <Modal
    open={open}
    onClose={handleClose}
    >
        <div className='modal' style={{width:"500px"}}>
        <div className='modal-heading'>
            <p>Print Table</p>
            <p>To Edit Book with name, seats, shape</p>
        </div>
        <div className='modal-content'>
          <div className='modal-print-url'>
            <header>
            <img src={logo} alt='logo' />
            <h1>restura.</h1>
            </header>
            <span>
              <h1>Scan to Place Order</h1>
            </span>
            <h3>Table No. {table.name}</h3>
            <p>{shop.name}</p>
            <div className='qr-img'>
              <img src={src} alt="qrcode" />
            </div>
            <p>PS: Open Google Lens to scan the code</p>
          </div>
        <div className='modal-button-group'>
            <button className='success-button' >Download</button>
            <button onClick={handleClose} className='close-button'>Close</button>
          </div>
        </div>
    </div>
    </Modal>
  </>
  )
}

export default PrintTableModal