import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
function LogoutBtn() {
  const navigate= useNavigate()
    const dispatch= useDispatch();
    const logoutHandler=()=>{
      authService.logout().then(()=>{
        dispatch(logout());
        navigate("/login")
      })
    }
  return (
    <button onClick={logoutHandler} className='inlint-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
        Logout
    </button>
  )
}

export default LogoutBtn
