import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ResetPassword = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    
    const submitHandler = () => {

    }

  return (
    <div className='login-page' style={{justifyContent: "center" , alignItems: "center"}}>
      <div className='login-right' style={{ backgroundColor: "var(--darkwhite)" , borderRadius: "10px"}}>
        <div className='login-content'>
          <div className='login-subheading'>
            <h6>Reset Password</h6>
            <p>Please reset your password</p>
          </div>
          <form className='login-form' onSubmit={submitHandler}>
          <div className='login-password' >
                    <input style={{ marginBottom: "0px"}} type={showPassword ? "text" : "password"} onChange={(e)=>(setPassword(e.target.value)) } value={password} placeholder='Password' required={true} />
                    {!showPassword ? <VisibilityOffIcon onClick={()=>{setShowPassword(!showPassword)}} /> : <VisibilityIcon onClick={()=>{setShowPassword(!showPassword)}}/>}
              </div>
          <div className='login-password'>
                    <input style={{ marginBottom: "0px"}} type={showConfirmPassword ? "text" : "password"} onChange={(e)=>(setConfirmPassword(e.target.value)) } value={confirmPassword} placeholder='Confirm Password' required={true} />
                    {!showConfirmPassword ? <VisibilityOffIcon onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}} /> : <VisibilityIcon onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}/>}
              </div>
            <button type='submit' className='login-button'>Submit</button>
          </form>
        </div>
      </div>
  </div>
  )
}

export default ResetPassword