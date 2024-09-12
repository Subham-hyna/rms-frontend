import { Modal, Tooltip } from '@mui/material';
import './PrintKotModal.css';
import React, { useState } from 'react';

const PrintKotModal = ({ children, kot }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleKotPrint = () => {
    
  };

  return (
    <>
      <Tooltip title="Print">
        {children && <button onClick={handleOpen}>{children}</button>}
      </Tooltip>
      <Modal open={open} onClose={handleClose}>
        <div className="modal" style={{ width: '500px' }}>
          <div className="modal-heading">
            <p>Print Kot</p>
            <p>To print Kot of this Order</p>
          </div>
          <div className="modal-content">
            <div className="modal-print-kot">
              <div className="modal-print-kot-header">
                <h1>Kitchen Token</h1>
              </div>

              <div className="modal-print-kot-middle">
                <p>
                  <strong>Token No:</strong> #{kot.tokenNo}
                </p>
                <p>
                  <strong>Date:</strong>{' '}
                  {new Date(kot.createdAt).toLocaleString()}
                </p>
                <p>
                  <strong>Order Type:</strong> {kot.kotType}
                </p>
                {kot.kotType === 'DINEIN' && (
                  <p>
                    <strong>Table No:</strong> {kot.tableId.name}
                  </p>
                )}
              </div>

              <div className="modal-print-kot-order-items">
                <span>
                  <p>Items</p>
                  <p>Qty</p>
                </span>
                {kot.items.map((k, i) => (
                  <span key={i}>
                    <p>{k.name}</p>
                    <p>{k.quantity}</p>
                  </span>
                ))}
              </div>

              <div className="modal-print-kot-order-footer">
                <p>Thank you</p>
              </div>
            </div>
            <div className="modal-button-group">
              <button
                className="success-button"
                onClick={handleKotPrint}
              >
                Print Kot
              </button>
              <button onClick={handleClose} className="close-button">
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PrintKotModal
