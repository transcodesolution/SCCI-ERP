import React from 'react'
import { useDispatch } from 'react-redux'
import { logout, selectUser } from '../Features/userSlice';
import { useSelector } from 'react-redux';

const Logout = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }
  return (
    <div>
    <h1>Welcome<span>{user.name}</span>
    <button onClick={(e)=>handleLogout(e)}>Logout</button></h1>
    </div>
  )
}

export default Logout