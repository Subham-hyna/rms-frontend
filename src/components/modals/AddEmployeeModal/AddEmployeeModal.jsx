import React from 'react'

const AddEmployeeModal = ({buttonIcon,buttonText}) => {
  return (
    <>
        <button className='page-heading-add-button'>
            <p><pre>{buttonText}</pre></p>
            {buttonIcon}
        </button>
    </>
  )
}

export default AddEmployeeModal