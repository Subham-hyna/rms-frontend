import React from 'react'

const AddItemModal = ({buttonIcon,buttonText}) => {
  return (
    <>
        <button className='page-heading-add-button'>
            <p><pre>{buttonText}</pre></p>
            {buttonIcon}
        </button>
    </>
  )
}

export default AddItemModal