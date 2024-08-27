import React from 'react'

const AddCustomerModal = ({buttonIcon,buttonText}) => {
  return (
    <>
        <button className='page-heading-add-button'>
            <p><pre>{buttonText}</pre></p>
            {buttonIcon}
        </button>
    </>
  )
}

export default AddCustomerModal