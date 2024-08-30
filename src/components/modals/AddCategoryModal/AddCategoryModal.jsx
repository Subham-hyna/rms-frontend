import React from 'react'

const AddCategoryModal = ({buttonIcon,buttonText}) => {
  return (
    <>
        <button className='page-heading-add-button'>
            <p><pre>{buttonText}</pre></p>
            {buttonIcon}
        </button>
    </>
  )
}

export default AddCategoryModal