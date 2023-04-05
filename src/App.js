import React from 'react';
import './App.css';
import Login from './Components/Login';
// import { useSelector } from 'react-redux';
// import { selectUser } from './Features/userSlice';
// import Logout from './Components/Logout';
// import Admin from './Page/Admin/Admin';
import Sidebar from './Components/Commom/Sidebar';
import Header from './Components/Commom/Header';
function App() {
  // const user = useSelector(selectUser);
    // {user ? <Login/> : <Logout/>}      

  return (
    <div className="App">
    <Login/>
    <Header/>
    <Sidebar/>
    </div>
  );
}

export default App;
